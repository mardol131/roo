"use client";

import Image from "next/image";
import React, { useState } from "react";
import image from "@/app/_images/test.jpg";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import classes from "./listingCard.module.scss";
import clsx from "clsx";
import Text from "../text/Text";

type Props = {};

export default function ListingCard({}: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <Link
      href={"/inzerat/muj-inzerat"}
      className={clsx(classes.wrapper, "animate")}
    >
      <button className={classes.categoryTag}>Kategorie</button>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
        className={clsx(classes.likeButton, "animate")}
      >
        <button className={clsx(isLiked && classes.iconActive, classes.icon)}>
          <FaHeart />
        </button>
      </div>

      <Image
        className={classes.image}
        src={image}
        alt="image"
        width={600}
        height={600}
      />
      <div className={classes.infoWrapper}>
        <div>
          <Text
            text="Mlýn Davídkov"
            tag="p"
            fontWeight="semibold"
            size="bodyMd"
          />
          <Text
            text={`Od <span class="font-semibold">80.000 Kč</span> za den`}
            tag="p"
            fontWeight="light"
          />
        </div>
        <div className={classes.rating}>
          <FaStar />
          <Text text="4,9" tag="span" size="bodyMd" />
        </div>
      </div>
    </Link>
  );
}
