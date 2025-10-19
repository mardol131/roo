"use client";

import Image, { StaticImageData } from "next/image";

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
  alt: string;
};

export function MasonryBubbleImage(props: MasonryBubbleImageProps) {
  return (
    <div
      style={{
        gridColumnStart: props.column?.start,
        gridColumnEnd: props.column?.end,
        gridRowStart: props.row?.start,
        gridRowEnd: props.row?.end,
      }}
      className={`overflow-hidden font-bold text-xl rounded-large shadow-lg flex sm:h-auto h-50 items-center justify-center`}
    >
      <Image
        src={props.image}
        alt={props.alt}
        width={800}
        height={800}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
