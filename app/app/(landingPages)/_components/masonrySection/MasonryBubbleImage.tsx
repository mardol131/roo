"use client";

import { ImageType } from "@/app/_types/objects";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";

export type MasonryBubbleImageProps = {
  column?: {
    start: number;
    end: number;
  };
  row?: {
    start: number;
    end: number;
  };
  image: ImageType;
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
      className={`overflow-hidden font-bold text-xl rounded-large shadow-xl flex sm:h-auto h-50 items-center justify-center`}
    >
      <Image
        src={getImageSrc(props.image.src, "cms")}
        alt={props.alt || "image-alt"}
        width={800}
        height={800}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
