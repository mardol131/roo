export function getImageSrc(name, route) {
    return `${process.env.NEXT_PUBLIC_CDN_URL}/${route && `${route}/`}${name}`;
}
