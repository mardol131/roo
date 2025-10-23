export function getImageSrc(name: string, route?: string) {
  return `${process.env.NEXT_PUBLIC_CDN_URL}/${route && `${route}/`}${name}`;
}
