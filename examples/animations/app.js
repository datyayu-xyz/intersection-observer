const blocks = document.getElementsByTagName("div");

function ioHandler(entries) {
  for (let entry of entries) {
    const element = entry.target;

    if (entry.intersectionRatio > 0.5) {
      element.classList.add('animate')
    }

  }
}

const ioConfig = {
  threshold: 0.5
};

const io = new IntersectionObserver(ioHandler, ioConfig);

[].forEach.call(blocks, block => io.observe(block))
