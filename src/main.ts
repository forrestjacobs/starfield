import { makeRenderer } from "./render";
import { generateStars } from "./setup";
import "./style.css";

const canvas = document.createElement("canvas");

function setDimensions() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
}

window.addEventListener("resize", () => setDimensions());

setDimensions();

document.querySelector<HTMLDivElement>("#app")!.append(canvas);

const c = canvas.getContext("2d")!;

const render = makeRenderer(generateStars());

function tick(time: DOMHighResTimeStamp) {
  render(c, canvas.width, canvas.height, time);
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
