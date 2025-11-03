export const TextLevels = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  label1: "label1",
  label2: "label2",
  label3: "label3",
  label4: "label4",
  label5: "label5",
  label6: "label6",
  label7: "label7",
  label8: "label8",
  paragraph1: "paragraph1",
  paragraph2: "paragraph2",
  paragraph3: "paragraph3",
  paragraph4: "paragraph4",
  paragraph5: "paragraph5",
};

export type TextLevelType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "label1"
  | "label2"
  | "label3"
  | "label4"
  | "label5"
  | "label6"
  | "label7"
  | "label8"
  | "labelMicro"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3"
  | "paragraph4"
  | "paragraph5";

export const fontWeight = {
  sm: "font-",
  md: "font-medium",
  lg: "font-semibold",
  xl: "font-bold",
  "2xl": "font-bold",
};
export type FontWeightType = keyof typeof fontWeight;

export const fontSize = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

export const fontType = {
  montserrat: "font-montserrat",
  nunito: "font-nunito",
};

export type FontType = keyof typeof fontType;
