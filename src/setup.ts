const NUM_STARS = 4_096;
const NUM_LAYERS = 256;

export type Star = [number, number];

export type StarGroup = {
  fillStyle: string;
  stars: Star[];
};

export type StarLayer = {
  radius: number;
  dx: number;
  groups: StarGroup[];
};

function toHex(v: number) {
  return Math.min(255, Math.max(0, Math.round(v)))
    .toString(16)
    .padStart(2, "0");
}

function hexFromHue(x: number) {
  const r = 0.8 * x + 0.2 * 128;
  const g = 0.8 * 128 + 0.2 * (255 - x);
  const b = 0.8 * (255 - x) + 0.2 * x;
  return `${toHex(128 + r * 0.5)}${toHex(128 + g * 0.5)}${toHex(
    128 + b * 0.5
  )}`;
}

export function generateStars(): StarLayer[] {
  const layers: Array<{ [fillStyle: string]: Star[] }> = Array.from(
    { length: NUM_LAYERS },
    () => ({})
  );
  for (let i = 0; i < NUM_STARS; i++) {
    const star: Star = [Math.random(), Math.random()];

    const fillStyle = `#${hexFromHue(Math.floor(Math.random() * 32) * 8)}`;

    const stars = layers[Math.floor(NUM_LAYERS * Math.random())];
    if (stars[fillStyle] === undefined) {
      stars[fillStyle] = [];
    }
    stars[fillStyle].push(star);
  }

  return layers.map((layer, i) => ({
    radius: Math.max(1, Math.pow((i / NUM_LAYERS) * 4, 4) / 64) / 2048,
    dx: Math.pow(i / NUM_LAYERS, 32) / 15_360,
    groups: Object.entries(layer).map(([fillStyle, stars]) => ({
      fillStyle,
      stars,
    })),
  }));
}
