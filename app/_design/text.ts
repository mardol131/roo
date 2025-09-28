import { TextColorType } from "./colors";

export const landingHeading = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl",
  xl: "text-7xl",
};

export type LandingHeadingType = keyof typeof landingHeading;

export type HeadingLevelType = "h1" | "h2" | "h3";

export type TextSettingsType = {
  text: string;
  color?: TextColorType;
};
