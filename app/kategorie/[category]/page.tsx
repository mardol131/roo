import CategoryListings from "@/app/_components/category/CategoryListings";
import FilterBar from "@/app/_components/category/FilterBar";
import React, { ReactNode } from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-[18rem_5fr]">
      <FilterBar />
      <CategoryListings />
    </div>
  );
}
