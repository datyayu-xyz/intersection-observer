const blocks = document.getElementsByTagName("div");

function ioHandler(entries) {
  for (let entry of entries) {
    if (entry.intersectionRatio === 1) {
      entry.target.style.background = "green"
    } else if (entry.intersectionRatio > .5) {
      entry.target.style.background = "yellow"
    } else {
      entry.target.style.background = "red"
    }
  }
}

const ioConfig = {
  threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(ioHandler, ioConfig);

[].forEach.call(blocks, block => {
  io.observe(block)
})
