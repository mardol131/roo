import React from "react";
import Text from "../../atoms/text/Text";

type Props = {
  text: string;
  className?: string;
};

export default function FormInputLabel({ text, className }: Props) {
  return (
    <Text
      text={text}
      tag="label"
      color="primary"
      fontWeight="semibold"
      size="bodySm"
      className={className ? className : ""}
    />
  );
}
