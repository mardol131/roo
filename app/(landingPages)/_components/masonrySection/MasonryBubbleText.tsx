import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { PayloadTextSectionType } from "@/app/_design/text";
import { PayloadRichTextGenerator } from "@/app/_functions/transformations/payloadRichTextGenerator";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";

export type MasonryBubbleTextProps = {
  texts: TextProps[];
  bgColor?: ColorsAndGradientsType;
  column?: {
    start: number;
    end: number;
  };
  row?: {
    start: number;
    end: number;
  };
};

export function MasonryBubbleText(props: MasonryBubbleTextProps) {
  return (
    <div
      style={{
        gridColumnStart: props.column?.start,
        gridColumnEnd: props.column?.end,
        gridRowStart: props.row?.start,
        gridRowEnd: props.row?.end,
      }}
      className={`${
        props.bgColor && colorsAndGradients[props.bgColor]
      } p-10 rounded-large shadow-lg flex flex-col gap-4 items-center justify-center`}
    >
      <GenerateTexts texts={props.texts} />
    </div>
  );
}
