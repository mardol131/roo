import React from "react";
import Catalog from "./_components/Catalog";

type Props = {};

export default function MainPage({}: Props) {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div>
        <Catalog />
      </div>
    </div>
  );
}
