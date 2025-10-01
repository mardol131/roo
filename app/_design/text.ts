import { TextColorType } from "./colors";

export const landingHeading = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl",
  xl: "text-7xl",
};

export type LandingHeadingType = keyof typeof landingHeading;

export type HeadingLevelType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ParagraphType = "paragraph";

export type PayloadRichTextTagsType = HeadingLevelType | ParagraphType;

export type TextSettingsType = {
  text: string;
  color?: TextColorType;
};

export type PayloadRichTextDataType = {
  root: {
    children: {
      tag: PayloadRichTextTagsType;
      children: {
        text: string;
        detail: number;
        format: number;
        mode: string;
        style: string;
        type: string;
        version: number;
      }[];
      direction: any;
      format: string;
      indent: number;
      type: string;
      version: number;
    }[];
    title: string;
    updatedAt: string;
  };
};

export type PayloadRichTextColors = {
  h1?: TextColorType;
  h2?: TextColorType;
  h3?: TextColorType;
  h4?: TextColorType;
  h5?: TextColorType;
  h6?: TextColorType;
  paragraph?: TextColorType;
};

export type PayloadRichTextSizes = {
  h1?: number;
  h2?: number;
  h3?: number;
  h4?: number;
  h5?: number;
  h6?: number;
  paragraph?: number;
};

export type PayloadRichTextWeights = {
  h1?: number;
  h2?: number;
  h3?: number;
  h4?: number;
  h5?: number;
  h6?: number;
  paragraph?: number;
};

export const textWeight = {};

export type PayloadTextSectionType = {
  richText: PayloadRichTextDataType;
  richTextColors?: PayloadRichTextColors;
  richTextWeights?: PayloadRichTextWeights;
  richTextSizes?: PayloadRichTextSizes;
};
