import React from "react";
import { AdminListingCard } from "../_components/AdminListingCard";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";
import image from "@/app/_images/test.jpg";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid listingGridColumns gap-adminGap p-10">
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />
      <AdminListingCard />

      <AdminListingCard />
    </div>
  );
}
