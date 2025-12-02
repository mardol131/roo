import React, { PropsWithChildren } from "react";

type Props = {
  spanTwo?: boolean;
  bgFilled?: boolean;
  isInvalid?: boolean;
  isOpen?: boolean;
};

export default function FormInputWrapper({
  children,
  spanTwo,
  bgFilled = true,
  isInvalid,
  isOpen,
}: PropsWithChildren & Props) {
  const columnSpan = spanTwo && "col-span-2";

  const background = isInvalid
    ? "bg-red-50 border border-danger"
    : bgFilled
      ? "bg-zinc-50"
      : "bg-white";

  const zIndex = isOpen ? "z-9999" : "";
  const classes = `${columnSpan} ${background} ${zIndex}`;
  return (
    <div
      className={`${classes} border animate-popup border-borderLight text-base shadow-md p-2 flex flex-col rounded-lg`}
    >
      {children}
    </div>
  );
}
