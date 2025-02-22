export function getImage(
  dir: string,
  image: string,
  images: Record<
    string,
    () => Promise<{
      default: ImageMetadata;
    }>
  >,
): string {
  const path = `/src/assets/${dir}${image}`;
  if (!images[path]) throw new Error(`"${path}" not found`);
  return path;
}
