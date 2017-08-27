let element = document.getElementById("last");
let elementsCounter = 10;


function ioHandler(entries) {
  for (let entry of entries) {
    if (entry.intersectionRatio === 1) {
      io.unobserve(element)
      elementsCounter += 10;

      for (let i = elementsCounter - 10; i <= elementsCounter; i++) {
        element = document.createElement('div')
        element.textContent = i;
        document.body.appendChild(element);
      }

      io.observe(element)
    }

  }
}

const ioConfig = {
  threshold: 1
};

const io = new IntersectionObserver(ioHandler, ioConfig);

io.observe(element)
