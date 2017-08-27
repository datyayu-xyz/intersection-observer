const blocks = document.getElementsByTagName("img");

function ioHandler(entries) {
  for (let entry of entries) {
    const element = entry.target;

    if (entry.intersectionRatio > 0.05) {
      element.src = element.dataset["src"];
      element.onload = () => {
        io.unobserve(element);
      };
    }

  }
}

const ioConfig = {
  threshold: 0.05
};

const io = new IntersectionObserver(ioHandler, ioConfig);

[].forEach.call(blocks, block => io.observe(block))
