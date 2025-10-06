import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { PayloadTextSectionType } from "@/app/_design/text";
import { PayloadRichTextGenerator } from "@/app/_functions/transformations/payloadRichTextGenerator";

export type MasonryBubbleTextProps = {
  text: PayloadTextSectionType;
  color?: ColorsAndGradientsType;
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
        props.color && colorsAndGradients[props.color]
      } p-10 rounded-large shadow-lg flex flex-col gap-4 items-center justify-center`}
    >
      <PayloadRichTextGenerator text={props.text} />
    </div>
  );
}
