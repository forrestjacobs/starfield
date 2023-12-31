import { StarLayer } from "./setup";

const TAU = 2 * Math.PI;

export function renderBackground(
  c: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  const gradient = c.createLinearGradient(0, 0, width / 16, height);

  // Add three color stops
  gradient.addColorStop(0, "#383040");
  gradient.addColorStop(1, "#000000");

  // Set the fill style and draw a rectangle
  c.fillStyle = gradient;
  c.fillRect(0, 0, width, height);
}

export function makeRenderer(layers: StarLayer[]) {
  return (
    c: CanvasRenderingContext2D,
    width: number,
    height: number,
    timeMs: number
  ): void => {
    const smallerDimension = Math.min(width, height);
    for (const layer of layers) {
      const radius = layer.radius * smallerDimension;
      const offset = (timeMs * layer.dx) % 1;
      for (const group of layer.groups) {
        c.fillStyle = group.fillStyle;
        for (const [x, y] of group.stars) {
          c.beginPath();
          c.arc(
            width * ((x + offset) % 1),
            height * y,
            radius,
            0,
            TAU
          );
          c.closePath();
          c.fill();
        }
      }
    }
  };
}
