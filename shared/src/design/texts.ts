export const textTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  em: "em",
  p: "p",
  span: "span",
};

export type TextTag = keyof typeof textTag;

export const fontWeight = {
  base: "font-fontBase",
  semibold: "font-fontSemibold",
  bold: "font-fontBold",
  extraBold: "font-fontExtrabold",
};
export type FontWeight = keyof typeof fontWeight;

export const fontSize = {
  displayLg: "text-displayLg",
  displayMd: "text-displayMd",
  displaySm: "text-displaySm",
  headingXl: "text-headingXl",
  headingLg: "text-headingLg",
  headingMd: "text-headingMd",
  headingSm: "text-headingSm",
  headingXs: "text-headingXs",
  body: "text-body",
  bodySm: "text-bodySm",
  bodyXs: "text-bodyXs",
};

export type FontSize = keyof typeof fontSize;

export const font = {
  display: "font-caveat",
  heading: "font-glacial",
  body: "font-inter",
};

export type Font = keyof typeof font;
