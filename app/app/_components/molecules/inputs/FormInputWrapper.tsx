import React, { PropsWithChildren } from "react";

type Props = {
  spanTwo?: boolean;
  bgFilled?: boolean;
  isInvalid?: boolean;
};

export default function FormInputWrapper({
  children,
  spanTwo,
  bgFilled = true,
  isInvalid,
}: PropsWithChildren & Props) {
  const columnSpan = spanTwo && "col-span-2";

  const background = isInvalid
    ? "bg-red-50 border border-danger"
    : bgFilled
      ? "bg-zinc-50"
      : "bg-white";

  const classes = `${columnSpan} ${background}`;
  return (
    <div
      className={`${classes} border border-borderLight  shadow-md p-3 flex flex-col rounded-medium`}
    >
      {children}
    </div>
  );
}
