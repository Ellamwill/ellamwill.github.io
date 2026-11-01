import type { ImageMetadata } from 'astro';
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{webp,svg}', { eager: true });
export function asset(name: string): ImageMetadata {
  const value = images[`../assets/${name}`]?.default;
  if (!value) throw new Error(`Selected image missing: ${name}`);
  return value;
}
