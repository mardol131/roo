import React from "react";
import { LuLoaderCircle } from "react-icons/lu";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="animate-spin text-3xl text-primary">
      <LuLoaderCircle />
    </div>
  );
}
