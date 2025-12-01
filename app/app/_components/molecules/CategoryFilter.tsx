"use client";

import { useState } from "react";
import { Checkbox } from "../filters/Checkbox";

type Props = {};

export default function CategoryFilter(props: Props) {
  const [showAll, setShowAll] = useState(false);
  const items = [];

  return (
    <div className="flex flex-col gap-4 items-center">
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <Checkbox text="Koktejl" value={20} />
      <p>Další možnosti (17)</p>
    </div>
  );
}
