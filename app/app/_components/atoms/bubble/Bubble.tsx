import { BubbleType } from "@/app/_types/bubbles";
import Link from "next/link";
import React from "react";
import classes from "./bubble.module.scss";
import Button from "../button/Button";

export default function Bubble(props: BubbleType) {
  return (
    <div
      style={{
        backgroundImage: `url('${props.image.src}')`,
        gridColumn: `span ${props.colSpan} / span ${props.colSpan}`,
      }}
      className={classes.wrapper}
    >
      <Button
        link={props.link}
        text={props.text}
        rounding="full"
        bgColor="white"
        size="lg"
      />
    </div>
  );
}
