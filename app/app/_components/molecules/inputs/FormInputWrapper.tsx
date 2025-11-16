import React, { PropsWithChildren } from "react";

type Props = {
  spanTwo?: boolean;
  bgFilled?: boolean;
};

export default function FormInputWrapper({
  children,
  spanTwo,
  bgFilled = true,
}: PropsWithChildren & Props) {
  const columnSpan = spanTwo && "col-span-2";

  const background = bgFilled ? "bg-zinc-50" : "bg-white";

  const classes = `${columnSpan} ${background}`;
  return (
    <div
      className={`${classes} border border-borderLight  shadow-md p-3 flex flex-col rounded-medium`}
    >
      {children}
    </div>
  );
}
