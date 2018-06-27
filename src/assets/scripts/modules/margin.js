export default function setMargin(element) {
  const footerContainer = document.querySelector(".footer");
  const footerHeight = getComputedStyle(footerContainer).height;
  const block = document.querySelector(element);
  block.style.marginBottom = footerHeight;
}
