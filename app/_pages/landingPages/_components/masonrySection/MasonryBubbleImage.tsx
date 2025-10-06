"use client";

export type MasonryBubbleImageProps = {
  column?: {
    start: number;
    end: number;
  };
  row?: {
    start: number;
    end: number;
  };
  image: string;
};

export function MasonryBubbleImage(props: MasonryBubbleImageProps) {
  return (
    <div
      style={{
        gridColumnStart: props.column?.start,
        gridColumnEnd: props.column?.end,
        gridRowStart: props.row?.start,
        gridRowEnd: props.row?.end,
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`p-5 font-bold text-xl rounded-large shadow-lg flex sm:h-auto h-50 items-center justify-center`}
    ></div>
  );
}
