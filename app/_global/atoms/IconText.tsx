import React, { CSSProperties, ReactNode } from "react";
import { FaStore } from "react-icons/fa6";
import babyShower from "../../../_icons/baby-shower.svg";

type Props = {
  text: string;
};

export default function IconText({ text }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 text-center bg-white w-full">
      <div
        style={{
          mixBlendMode: "destination-out" as CSSProperties["mixBlendMode"],
        }}
        className={` p-[2px] rounded-full flex items-center justify-center h-15 w-15`}
      ></div>
      <p className="break-words">{text}</p>
    </div>
  );
}
