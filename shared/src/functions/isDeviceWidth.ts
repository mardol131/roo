import { Breakpoints } from "../design/breakpoints";

export function isDeviceWidth(size: Breakpoints): boolean {
  if (typeof window === "undefined") return false;

  const width = window.innerWidth;

  if (size === "sm") {
    return width >= 640;
  } else if (size === "md") {
    return width >= 768;
  } else if (size === "lg") {
    return width >= 1024;
  } else if (size === "xl") {
    return width >= 1280;
  } else if (size === "2xl") {
    return width >= 1536;
  } else {
    return false;
  }
}
