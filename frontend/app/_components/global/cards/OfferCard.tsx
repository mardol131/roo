"use client";

import Image from "next/image";
import React from "react";
import image from "../../../_images/test.jpg";
import { FaStar } from "react-icons/fa";

type Props = {};

export default function OfferCard({}: Props) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl">
      <Image
        className="h-60 object-cover"
        src={image}
        alt=""
        width={600}
        height={600}
      />
      <div className="grid grid-cols-[2fr_1fr] py-3 px-7">
        <div>
          <p className="font-semibold">Mlýn Davídkov</p>
          <p>
            Od <span className="font-semibold">80.000 Kč</span> za den
          </p>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <FaStar className="text-pink" />
          <p className="font-semibold">4,9</p>
        </div>
      </div>
    </div>
  );
}
