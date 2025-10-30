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
  whiteOpac: "bg-white/50",

  secondary: "bg-secondary",
  secondaryOpac: "bg-secondary/50",

  secondaryDark: "bg-secondaryDark",
  secondaryDarkOpac: "bg-secondaryDark/50",

  primary: "bg-primary",
  primaryOpac: "bg-primary/50",

  tertiary: "bg-tertiary",
  tertiaryOpac: "bg-tertiary/50",

  tertiaryDark: "bg-tertiaryDark",
  tertiaryDarkOpac: "bg-tertiaryDark/50",

  blackTransparent: "bg-linear-60 from-rooBlack to-transparent",
  transparentBlack: "bg-linear-60 from-transparent to-rooBlack",

  primaryTransparent: "bg-linear-30 from-primary/70 to-transparent",
  secondaryTransparent: "bg-linear-30 from-secondary/70 to-transparent",
  tertiaryTransparent: "bg-linear-30 from-tertiary/70 to-transparent",

  transparentPrimary: "bg-linear-30 from-transparent to-primary/70",
  transparentSecondary: "bg-linear-30 from-transparent to-secondary/70",
  transparentTertiary: "bg-linear-30 from-transparent to-tertiary/70",

  primarySecondaryOpac: "bg-linear-30 from-primary/70 to-secondary/70",
  primaryTertiaryOpac: "bg-linear-30 from-primary/70 to-tertiary/70",
  secondaryTertiaryOpac: "bg-linear-30 from-secondary/70 to-tertiary/70",
  secondaryPrimaryOpac: "bg-linear-30 from-secondary/70 to-primary/70",
  tertiaryPrimaryOpac: "bg-linear-30 from-tertiary/70 to-primary/70",
  tertiarySecondaryOpac: "bg-linear-30 from-tertiary/70 to-secondary/70",
  primarySecondaryTertiaryOpac:
    "bg-linear-30 from-primary/70 via-secondary/70 to-tertiary/70",
  primaryTertiarySecondaryOpac:
    "bg-linear-30 from-primary/70 via-tertiary/70 to-secondary/70",
  secondaryPrimaryTertiaryOpac:
    "bg-linear-30 from-secondary/70 via-primary/70 to-tertiary/70",
  secondaryTertiryPrimaryOpac:
    "bg-linear-30 from-secondary/70 via-tertiary/70 to-primary/70",
  tertiaryPrimarySecondaryOpac:
    "bg-linear-30 from-tertiary/70 via-primary/70 to-secondary/70",
  tertiarySecondaryPrimaryOpac:
    "bg-linear-30 from-tertiary/70 via-secondary/70 to-primary/70",
  primarySecondary: "bg-linear-30 from-primary to-secondary",
  primaryTertiary: "bg-linear-30 from-primary to-tertiary",
  secondaryTertiary: "bg-linear-30 from-secondary to-tertiary",
  secondaryPrimary: "bg-linear-30 from-secondary to-primary",
  tertiaryPrimary: "bg-linear-30 from-tertiary to-primary",
  tertiarySecondary: "bg-linear-30 from-tertiary to-secondary",
  primarySecondaryTertiary:
    "bg-linear-30 from-primary via-secondary to-tertiary",
  primaryTertiarySecondary:
    "bg-linear-30 from-primary via-tertiary to-secondary",
  secondaryPrimaryTertiary:
    "bg-linear-30 from-secondary via-primary to-tertiary",
  secondaryTertiryPrimary:
    "bg-linear-30 from-secondary via-tertiary to-primary",
  tertiaryPrimarySecondary:
    "bg-linear-30 from-tertiary via-primary to-secondary",
  tertiarySecondaryPrimary:
    "bg-linear-30 from-tertiary via-secondary to-primary",
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
  textLight: "text-textLight",
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
