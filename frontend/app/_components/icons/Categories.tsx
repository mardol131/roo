import React from "react";
import IconText from "../global/atoms/IconText";

type Props = {};

export default function Categories({}: Props) {
  const icons = [];

  for (let i = 0; i < 11; i++) {
    icons.push(<IconText key={i} color="orange" text="Opening párty" />);
  }

  return (
    <div className="flex justify-between w-full py-10 gap-3">
      {icons.map((icon) => {
        return icon;
      })}
    </div>
  );
}
