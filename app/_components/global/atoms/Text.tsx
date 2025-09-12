import React from "react";

type Props = {
  text: string;
};

const Text = (props: Props) => {
  return <div>{props.text}</div>;
};
