import { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@roo/shared/src/design/colors";

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
      } p-6 rounded-large shadow-xl flex flex-col gap-4 items-center justify-center`}
    >
      <GenerateTexts texts={props.texts} />
    </div>
  );
}
