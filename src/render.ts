import { Star } from "./setup";

const TAU = 2 * Math.PI;

export function makeRenderer(stars: Star[]) {
  return (
    c: CanvasRenderingContext2D,
    width: number,
    height: number,
    timeMs: number
  ): void => {
    const gradient = c.createLinearGradient(0, 0, width / 16, height);

    // Add three color stops
    gradient.addColorStop(0, "#383040");
    gradient.addColorStop(1, "#000000");

    // Set the fill style and draw a rectangle
    c.fillStyle = gradient;
    c.fillRect(0, 0, width, width);

    for (const star of stars) {
      c.beginPath();
      const x = (star.x + (timeMs / 8) * Math.pow(star.z, 32)) % width;
      c.arc(x, star.y, star.radius, 0, TAU, false);
      c.fillStyle = star.fillStyle;
      c.fill();
    }
  };
}
