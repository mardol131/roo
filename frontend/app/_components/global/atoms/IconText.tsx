import React from "react";
import { FaStore } from "react-icons/fa6";

type Props = {
  color: string;
  text: string;
};

export default function IconText(props: Props) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className={`${
          "bg-" + props.color
        } p-[2px] rounded-full flex items-center justify-center h-15 w-15`}
      >
        <div
          className={`text-orange bg-white w-full h-full rounded-full flex items-center justify-center text-3xl`}
        >
          <FaStore />
        </div>
      </div>
      <p className="break-words">{props.text}</p>
    </div>
  );
}
