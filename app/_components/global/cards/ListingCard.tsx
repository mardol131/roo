"use client";

import Image from "next/image";
import React, { useState } from "react";
import image from "../../../_images/test.jpg";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

type Props = {};

export default function ListingCard({}: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl">
      <button className="absolute left-2 top-2 bg-orange py-1 px-2 rounded-full text-sm text-white font-semibold">
        Kategorie
      </button>
      <div
        onClick={() => {
          setIsLiked(!isLiked);
        }}
        className="cursor-pointer hover:scale-120 ease-in-out transition-all absolute right-2 top-2 text-lg"
      >
        {isLiked ? (
          <button className="text-rose-500 cursor-pointer">
            <FaHeart />
          </button>
        ) : (
          <button className="text-white cursor-pointer">
            <FaHeart />
          </button>
        )}
      </div>

      <Image
        className="h-50 object-cover"
        src={image}
        alt=""
        width={600}
        height={600}
      />
      <div className="grid grid-cols-[2fr_1fr] p-4">
        <div>
          <p className="font-semibold">Mlýn Davídkov</p>
          <p className="text-sm">
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
