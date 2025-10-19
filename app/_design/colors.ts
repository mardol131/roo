export const colors = {
  secondary: "#f2800f",
  primary: "#e70d72",
  tertiary: "#552783",
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
  secondary: "bg-secondary",
  secondaryOpac: "bg-secondary/50",
  primary: "bg-primary",
  primaryOpac: "bg-primary/50",
  tertiary: "bg-tertiary",
  tertiaryOpac: "bg-tertiary/50",
  whiteOpac: "bg-white/50",

  blackTransparent: "bg-linear-60 from-black/70 to-transparent",
  transparentBlack: "bg-linear-60 from-transparent to-black/70",

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
  secondary: "text-secondary",
  primary: "text-primary",
  tertiary: "text-tertiary",
  black: "text-textNormal",
  white: "text-white",
  textLight: "text-textLight",
  primarySecondaryOpac:
    "bg-linear-to-r from-primary/70 to-secondary/70 bg-clip-text text-transparent",
  primaryTertiaryOpac:
    "bg-linear-to-r from-primary/70 to-tertiary/70 bg-clip-text text-transparent",
  secondaryTertiaryOpac:
    "bg-linear-to-r from-secondary/70 to-tertiary/70 bg-clip-text text-transparent",
  secondaryPrimaryOpac:
    "bg-linear-to-r from-secondary/70 to-primary/70 bg-clip-text text-transparent",
  tertiaryPrimaryOpac:
    "bg-linear-to-r from-tertiary/70 to-primary/70 bg-clip-text text-transparent",
  tertiarySecondaryOpac:
    "bg-linear-to-r from-tertiary/70 to-secondary/70 bg-clip-text text-transparent",
  primarySecondaryTertiaryOpac:
    "bg-linear-to-r from-primary/70 via-secondary/70 to-tertiary/70 bg-clip-text text-transparent",
  primaryTertiarySecondaryOpac:
    "bg-linear-to-r from-primary/70 via-tertiary/70 to-secondary/70 bg-clip-text text-transparent",
  secondaryPrimaryTertiaryOpac:
    "bg-linear-to-r from-secondary/70 via-primary/70 to-tertiary/70 bg-clip-text text-transparent",
  secondaryTertiryPrimaryOpac:
    "bg-linear-to-r from-secondary/70 via-tertiary/70 to-primary/70 bg-clip-text text-transparent",
  tertiaryPrimarySecondaryOpac:
    "bg-linear-to-r from-tertiary/70 via-primary/70 to-secondary/70 bg-clip-text text-transparent",
  tertiarySecondaryPrimaryOpac:
    "bg-linear-to-r from-tertiary/70 via-secondary/70 to-primary/70 bg-clip-text text-transparent",
  primarySecondary:
    "bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent",
  primaryTertiary:
    "bg-linear-to-r from-primary to-tertiary bg-clip-text text-transparent",
  secondaryTertiary:
    "bg-linear-to-r from-secondary to-tertiary bg-clip-text text-transparent",
  secondaryPrimary:
    "bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent",
  tertiaryPrimary:
    "bg-linear-to-r from-tertiary to-primary bg-clip-text text-transparent",
  tertiarySecondary:
    "bg-linear-to-r from-tertiary to-secondary bg-clip-text text-transparent",
  primarySecondaryTertiary:
    "bg-linear-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent",
  primaryTertiarySecondary:
    "bg-linear-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent",
  secondaryPrimaryTertiary:
    "bg-linear-to-r from-secondary via-primary to-tertiary bg-clip-text text-transparent",
  secondaryTertiryPrimary:
    "bg-linear-to-r from-secondary via-tertiary to-primary bg-clip-text text-transparent",
  tertiaryPrimarySecondary:
    "bg-linear-to-r from-tertiary via-primary to-secondary bg-clip-text text-transparent",
  tertiarySecondaryPrimary:
    "bg-linear-to-r from-tertiary via-secondary to-primary bg-clip-text text-transparent",
};
