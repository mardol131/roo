import React from "react";
import classes from "./divider.module.scss";

type Props = {
  height: number;
  className?: string;
};

export default function Divider({ height }: Props) {
  return (
    <div style={{ height: `${height}px` }} className={classes.divider}></div>
  );
}
