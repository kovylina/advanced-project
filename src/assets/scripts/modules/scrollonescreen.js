import detectIE from "./detectie";
export default function scrollOneScreen(direction) {
  let scrollTo = 0;

  switch (direction) {
    case "up":
      scrollTo = -window.innerHeight;
      break;
    case "down":
      scrollTo = window.innerHeight;
      break;
    default:
      scrollTo = window.innerHeight;
  }

  if (detectIE()) {
    window.scrollBy(0, scrollTo);
  } else {
    window.scrollBy({ top: scrollTo, behavior: "smooth" });
  }
}
