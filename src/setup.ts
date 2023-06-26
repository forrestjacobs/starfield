const NUM_STARS = 5_000;

export type Star = {
  x: number;
  y: number;
  z: number;
  radius: number;
  fillStyle: string;
};

function toHex(v: number) {
  return Math.min(255, Math.max(0, Math.round(v)))
    .toString(16)
    .padStart(2, "0");
}

function shift(x: number) {
  const r = 0.8 * x + 0.2 * 128;
  const g = 0.8 * 128 + 0.2 * (255 - x);
  const b = 0.8 * (255 - x) + 0.2 * x;
  return `${toHex(128 + r * 0.5)}${toHex(128 + g * 0.5)}${toHex(
    128 + b * 0.5
  )}`;
}

export function generateStars(width: number, height: number) {
  const stars: Star[] = [];
  for (let i = 0; i < NUM_STARS; i++) {
    const z = Math.random();

    const star = {
      x: Math.random() * width,
      y: Math.random() * height,
      z,
      radius: Math.max(0.5, Math.pow(z * 4, 4) / 128),
      fillStyle: `#${shift(Math.random() * 255)}`,
    };
    stars.push(star);
  }
  stars.sort((lhs, rhs) => Math.sign(lhs.z - rhs.z));
  return stars;
}
