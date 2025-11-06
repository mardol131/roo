import React from "react";
import FilterBar from "../_components/FilterBar";
import CategoryListings from "../_components/CategoryListings";

type Props = {};

export default function CategoryPage({}: Props) {
  return (
    <div className="grid grid-cols-[18rem_5fr]">
      <FilterBar />
      <CategoryListings />
    </div>
  );
}
