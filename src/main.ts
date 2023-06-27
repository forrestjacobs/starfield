import { makeRenderer } from "./render";
import { generateStars } from "./setup";
import "./style.css";

const WIDTH = 1920;
const HEIGHT = 1080;

const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

document.querySelector<HTMLDivElement>("#app")!.append(canvas);

const c = canvas.getContext("2d")!;

const render = makeRenderer(generateStars());

function tick(time: DOMHighResTimeStamp) {
  render(c, WIDTH, HEIGHT, time);
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
