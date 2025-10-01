export type Sides = "left" | "right";

export const textAlign = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
};

export type TextAlignType = keyof typeof textAlign;
