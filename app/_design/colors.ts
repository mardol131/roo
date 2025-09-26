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

export type colorsAndGradientsType = keyof typeof colorsAndGradients;

export const colorsAndGradients = {
  secondary: "bg-secondary",
  primary: "bg-primary",
  tertiary: "bg-tertiary",
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
  black: "text-black",
  white: "text-white",
};
