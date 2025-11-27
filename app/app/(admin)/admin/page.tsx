import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-5 p-10 overflow-y-auto"></div>
  );
}

export type GraphBarType = {
  percentPoints: number;
};

function GraphBar(props: GraphBarType) {
  return (
    <div className="flex group flex-col h-full justify-end items-center">
      <p className="font-bold text-primary text-sm">25</p>
      <div
        style={{ height: `${props.percentPoints}%` }}
        className="w-full bg-linear-60 from-secondary/70 to-primary/70 group-odd:bg-primary/20 h-[80%] max-w-10 rounded-full shadow-lg"
      ></div>
    </div>
  );
}
