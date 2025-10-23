export function getImageSrc(name: string) {
  return `${process.env.NEXT_PUBLIC_CDN_URL}/${name}`;
}
