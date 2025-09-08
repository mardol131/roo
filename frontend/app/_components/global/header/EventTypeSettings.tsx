import React, { ReactNode } from "react";
import { GiPartyPopper } from "react-icons/gi";

type Props = {};

export type IconTextType = {
  text: string;
  color: string;
  children: ReactNode;
};

function IconText({ text, children }: IconTextType) {
  return (
    <div className="cursor-pointer relative overflow-hidden group flex flex-col items-center gap-4 text-center w-full border-2 rounded-xl border-gray-100 p-5 max-w-50 bg-opa hover:!text-white transition-all ease-in-out">
      {children}
      <p className="break-words z-20 font-semibold capitalize">{text}</p>
      <span className="absolute inset-0 bg-gradient-to-r from-orange to-pink opacity-0 transition-opacity duration-500 ease-in-out z-10 group-hover:opacity-100"></span>
    </div>
  );
}

export default function EventTypeSettings({}: Props) {
  return (
    <div className="bg-white rounded-2xl flex gap-3 p-5 items-center w-full max-w-lowerHeader justify-center">
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
      <IconText text="akce" color="" />
    </div>
  );
}
