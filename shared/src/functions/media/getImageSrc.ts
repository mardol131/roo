export function getImageSrc(name: string, route?: "cms") {
  return `${process.env.NEXT_PUBLIC_CDN_URL}/${route && `${route}/`}${name}`;
}
