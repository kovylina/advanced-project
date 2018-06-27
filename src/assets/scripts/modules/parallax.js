const parallaxContainer = document.querySelector(".parallax");
const layers = Array.from(parallaxContainer.children);

const moveLayers = e => {
  // по умолчанию, движение мыши отслеживается относительно точки (0, 0)
  // будем отслеживать относительно центра страницы
  const initialX = window.innerWidth / 1 - e.pageX;
  const initialY = window.innerHeight / 1 - e.pageY;

  layers.forEach((layer, i) => {
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;

    // чтобы не было видно нижнего края, сместим картинки вниз
    const bottomPosition = (window.innerHeight / 2) * divider;
    const image = layer.firstElementChild;

    image.style.bottom = `-${bottomPosition}px`;
    layer.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
    layer.style.webkitTransform = `translate3d(${positionX}px, ${positionY}px, 0)`;
  });
};

window.addEventListener("mousemove", moveLayers);
