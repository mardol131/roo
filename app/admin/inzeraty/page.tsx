import React from "react";
import { AdminListingCard } from "../page";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-10">
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
