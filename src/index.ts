import pellicola from "pellicola";
import { generateStars } from "./setup";
import { makeRenderer } from "./render";

const WIDTH = 1920;
const HEIGHT = 1080;

pellicola(
  () => {
    const render = makeRenderer(generateStars(WIDTH, HEIGHT));
    return ({ context, time }) => {
      render(
        context as unknown as CanvasRenderingContext2D,
        WIDTH,
        HEIGHT,
        time * 1_000
      );
    };
  },
  {
    dimensions: [WIDTH, HEIGHT],
    duration: 60 * 60 * 1.5,
    renderInParallel: true,
    maxConcurrency: 32,
    filename: `out/starfield-${new Date().toISOString().replaceAll(":", "-")}.mp4`,
  }
).then(() => console.log("Done!"));
