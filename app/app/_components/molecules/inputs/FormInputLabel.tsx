import React from "react";
import Text from "../../atoms/Text";

type Props = {
  text: string;
};

export default function FormInputLabel({ text }: Props) {
  return (
    <Text
      text={text}
      tag="label"
      color="primary"
      fontWeight="semibold"
      size="bodySm"
    />
  );
}
