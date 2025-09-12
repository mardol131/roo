import React from "react";
import ButtonDesign, { ButtonPropsType } from "../atoms/ButtonDesign";

type Props = ButtonPropsType & { webhookUrl: string };

export default function ButtonWebhook(props: Props) {
  return (
    <ButtonDesign size={props.size} text={props.text} design={props.design} />
  );
}
