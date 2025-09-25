import { BubbleType } from "@/app/_types/bubbles";
import Link from "next/link";
import React from "react";

type Props = BubbleType;

export default function Bubble(props: Props) {
  const colSpan = "col-span-" + props.colSpan;
  return (
    <div
      style={{
        backgroundImage: `url('${props.image.src}')`,
        gridColumn: `span ${props.colSpan} / span ${props.colSpan}`,
      }}
      className={`bg-amber-300 ${colSpan} rounded-3xl flex items-end justify-end p-3 bg-cover shadow-xl`}
    >
      <Link
        href={props.link}
        className="bg-white p-2 rounded-full px-5 uppercase font-semibold"
      >
        {props.text}
      </Link>
    </div>
  );
}
