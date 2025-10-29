export type SidesType = "left" | "right";

export const sides = {
  left: "left",
  right: "right",
};

export const textAlign = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
};

export type TextAlignType = keyof typeof textAlign;
