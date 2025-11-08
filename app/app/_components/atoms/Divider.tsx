import React from "react";

type Props = {
  height: number;
  className?: string;
};

export default function Divider({ height }: Props) {
  return (
    <div style={{ height: `${height}px` }} className="w-full bg-gray-200"></div>
  );
}
