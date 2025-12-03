import { Enum } from "../functions/enum";

export const colors = {
  secondary: "#ff9900",
  secondaryDark: "#f2810e",
  primary: "#e70d72",
  tertiary: "#552783",
  tertiaryDark: "#333366",

  specialBlue: "#0099FF",
  specialGreen: "#80F20E",

  white: "#FFFFFF",
  rooGray: "#343434",
  rooBlack: "#181818",

  success: "#48DC00",
  warning: "#FCAA2E",
  danger: "#EE094B",
};

export type ColorsType = keyof typeof colors;

export type ColorGradientType =
  | "#f2800f"
  | "#f06922"
  | "#ee5237"
  | "#eb3b4a"
  | "#e9245e"
  | "#e60d72"
  | "#ca1275"
  | "#ac1879"
  | "#8f1d7c"
  | "#722280"
  | "#552783";

export type ColorsAndGradientsType = keyof typeof colorsAndGradients;

export const colorsAndGradients = Enum(
  "white",
  "whiteOpac",
  "success",
  "warning",
  "danger",
  "secondary",
  "secondaryOpac",
  "secondaryDark",
  "secondaryDarkOpac",
  "primary",
  "primaryOpac",
  "tertiary",
  "tertiaryOpac",
  "tertiaryDark",
  "tertiaryDarkOpac",
  "blackTransparent",
  "transparentBlack",
  "primaryTransparent",
  "secondaryTransparent",
  "tertiaryTransparent",
  "transparentPrimary",
  "transparentSecondary",
  "transparentTertiary",
  "primarySecondaryOpac",
  "primaryTertiaryOpac",
  "secondaryTertiaryOpac",
  "secondaryPrimaryOpac",
  "tertiaryPrimaryOpac",
  "tertiarySecondaryOpac",
  "primarySecondaryTertiaryOpac",
  "primaryTertiarySecondaryOpac",
  "secondaryPrimaryTertiaryOpac",
  "secondaryTertiryPrimaryOpac",
  "tertiaryPrimarySecondaryOpac",
  "tertiarySecondaryPrimaryOpac",
  "primarySecondary",
  "primaryTertiary",
  "secondaryTertiary",
  "secondaryPrimary",
  "tertiaryPrimary",
  "tertiarySecondary",
  "primarySecondaryTertiary",
  "primaryTertiarySecondary",
  "secondaryPrimaryTertiary",
  "secondaryTertiryPrimary",
  "tertiaryPrimarySecondary",
  "tertiarySecondaryPrimary"
);

export type TextColorType = keyof typeof textColor;

export const textColor = Enum(
  "primary",
  "secondary",
  "tertiary",
  "black",
  "white",
  "success",
  "warning",
  "danger",
  "placeholder",
  "lightOne",
  "lightTwo",
  "primarySecondaryOpac",
  "primaryTertiaryOpac",
  "secondaryTertiaryOpac",
  "secondaryPrimaryOpac",
  "tertiaryPrimaryOpac",
  "tertiarySecondaryOpac",
  "primarySecondaryTertiaryOpac",
  "primaryTertiarySecondaryOpac",
  "secondaryPrimaryTertiaryOpac",
  "secondaryTertiryPrimaryOpac",
  "tertiaryPrimarySecondaryOpac",
  "tertiarySecondaryPrimaryOpac",
  "primarySecondary",
  "primaryTertiary",
  "secondaryTertiary",
  "secondaryPrimary",
  "tertiaryPrimary",
  "tertiarySecondary",
  "primarySecondaryTertiary",
  "primaryTertiarySecondary",
  "secondaryPrimaryTertiary",
  "secondaryTertiryPrimary",
  "tertiaryPrimarySecondary",
  "tertiarySecondaryPrimary"
);
