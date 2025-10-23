export function getImageSrc(name: string, route?: string) {
  console.log(`${process.env.NEXT_PUBLIC_CDN_URL}/${name}`);
  return `${process.env.NEXT_PUBLIC_CDN_URL}/${route && `${route}/`}${name}`;
}
