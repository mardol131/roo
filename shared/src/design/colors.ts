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

export const colorsAndGradients = {
  white: "bg-white",
  whiteOpac: "bg-whiteOpac",

  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",

  secondary: "bg-secondary",
  secondaryOpac: "bg-secondaryOpac",

  secondaryDark: "bg-secondaryDark",
  secondaryDarkOpac: "bg-secondaryDarkOpac",

  primary: "bg-primary",
  primaryOpac: "bg-primaryOpac",

  tertiary: "bg-tertiary",
  tertiaryOpac: "tertiaryOpac",

  tertiaryDark: "bg-tertiaryDark",
  tertiaryDarkOpac: "bg-tertiaryDarkOpac",

  blackTransparent: "bg-blackTransparent",
  transparentBlack: "bg-transparentBlack",

  primaryTransparent: "bg-primaryTransparent",
  secondaryTransparent: "bg-secondaryTransparent",
  tertiaryTransparent: "bg-tertiaryTransparent",

  transparentPrimary: "bg-transparentPrimary",
  transparentSecondary: "bg-transparentSecondary",
  transparentTertiary: "bg-transparentTertiary",

  primarySecondaryOpac: "bg-primarySecondaryOpac",
  primaryTertiaryOpac: "bg-primaryTertiaryOpac",
  secondaryTertiaryOpac: "bg-secondaryTertiaryOpac",
  secondaryPrimaryOpac: "bg-secondaryPrimaryOpac",
  tertiaryPrimaryOpac: "bg-tertiaryPrimaryOpac",
  tertiarySecondaryOpac: "bg-tertiarySecondaryOpac",
  primarySecondaryTertiaryOpac: "bg-primarySecondaryTertiaryOpac",
  primaryTertiarySecondaryOpac: "bg-primaryTertiarySecondaryOpac",
  secondaryPrimaryTertiaryOpac: "bg-secondaryPrimaryTertiaryOpac",
  secondaryTertiryPrimaryOpac: "bg-secondaryTertiryPrimaryOpac",
  tertiaryPrimarySecondaryOpac: "bg-tertiaryPrimarySecondaryOpac",
  tertiarySecondaryPrimaryOpac: "bg-tertiarySecondaryPrimaryOpac",
  primarySecondary: "bg-primarySecondary",
  primaryTertiary: "bg-primaryTertiary",
  secondaryTertiary: "bg-secondaryTertiary",
  secondaryPrimary: "bg-secondaryPrimary",
  tertiaryPrimary: "bg-tertiaryPrimary",
  tertiarySecondary: "bg-tertiarySecondary",
  primarySecondaryTertiary: "bg-primarySecondaryTertiary",
  primaryTertiarySecondary: "bg-primaryTertiarySecondary",
  secondaryPrimaryTertiary: "bg-secondaryPrimaryTertiary",
  secondaryTertiryPrimary: "bg-secondaryTertiryPrimary",
  tertiaryPrimarySecondary: "bg-tertiaryPrimarySecondary",
  tertiarySecondaryPrimary: "bg-tertiarySecondaryPrimary",
};

export type TextColorType = keyof typeof textColor;

export const textColor = {
  primary: "text-primary",

  secondary: "text-secondary",
  secondaryDark: "text-secondaryDark",

  tertiary: "text-tertiary",
  tertiaryDark: "text-tertiaryDark",

  black: "text-rooBlack",
  white: "text-white",

  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",

  placeholder: "text-placeholder",

  lightOne: "text-lightOne",
  lightTwo: "text-lightTwo",

  primarySecondaryOpac: "text-primarySecondaryOpac",
  primaryTertiaryOpac: "text-primaryTertiaryOpac",
  secondaryTertiaryOpac: "text-secondaryTertiaryOpac",
  secondaryPrimaryOpac: "text-secondaryPrimaryOpac",
  tertiaryPrimaryOpac: "text-tertiaryPrimaryOpac",
  tertiarySecondaryOpac: "text-tertiarySecondaryOpac",
  primarySecondaryTertiaryOpac: "text-primarySecondaryTertiaryOpac",
  primaryTertiarySecondaryOpac: "text-primaryTertiarySecondaryOpac",
  secondaryPrimaryTertiaryOpac: "text-secondaryPrimaryTertiaryOpac",
  secondaryTertiryPrimaryOpac: "text-secondaryTertiryPrimaryOpac",
  tertiaryPrimarySecondaryOpac: "text-tertiaryPrimarySecondaryOpac",
  tertiarySecondaryPrimaryOpac: "text-tertiarySecondaryPrimaryOpac",
  primarySecondary: "text-primarySecondary",
  primaryTertiary: "text-primaryTertiary",
  secondaryTertiary: "text-secondaryTertiary",
  secondaryPrimary: "text-secondaryPrimary",
  tertiaryPrimary: "text-tertiaryPrimary",
  tertiarySecondary: "text-tertiarySecondary",
  primarySecondaryTertiary: "text-primarySecondaryTertiary",
  primaryTertiarySecondary: "text-primaryTertiarySecondary",
  secondaryPrimaryTertiary: "text-secondaryPrimaryTertiary",
  secondaryTertiryPrimary: "text-secondaryTertiryPrimary",
  tertiaryPrimarySecondary: "text-tertiaryPrimarySecondary",
  tertiarySecondaryPrimary: "text-tertiarySecondaryPrimary",
};
