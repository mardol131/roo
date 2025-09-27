import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";

export type MasonryBubbleTextProps = {
  text?: string;
  heading?: string;
  textColor?: TextColorType;
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
      className={`${props.color && colorsAndGradients[props.color]} ${
        props.textColor ? textColor[props.textColor] : "text-white"
      } p-5 rounded-large shadow-lg flex flex-col gap-4 items-center justify-center`}
    >
      {props.heading && (
        <p className="text-2xl font-semibold">{props.heading}</p>
      )}
      {props.text && <p className="text-xl">{props.text}</p>}{" "}
    </div>
  );
}
