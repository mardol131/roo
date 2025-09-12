import React, { ReactNode } from "react";
import map from "@/app/_images/map.png";
import { Checkbox } from "@/app/_components/global/molecules/Checkbox";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";

type Props = {};

type FilterSectionWrapperProps = {
  children: ReactNode;
  header?: string;
};

function FilterSectionWrapper(props: FilterSectionWrapperProps) {
  return (
    <div className="p-8 border-b border-borderLight flex flex-col gap-3">
      {props.header && <p className="text-lg">{props.header}</p>}
      {props.children}
    </div>
  );
}

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-[1fr_5fr]">
      <div className="border-r border-borderLight min-h-screen">
        <FilterSectionWrapper>
          <div
            style={{ backgroundImage: `url('${map.src}')` }}
            className="aspect-square w-full overflow-hidden rounded-medium brightness-100 flex items-center justify-center flex-col gap-2"
          >
            <FaMapMarkerAlt className="text-4xl text-pink" />
            <button className="bg-pink text-white font-semibold py-2 px-3 rounded-medium">
              Ukázat na mapě
            </button>
          </div>
        </FilterSectionWrapper>

        <FilterSectionWrapper header="Populární filtr">
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Populární filtr">
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Populární filtr">
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Populární filtr">
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Populární filtr">
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Populární filtr">
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
          <Checkbox text="Koktejl" value={20} />
        </FilterSectionWrapper>
      </div>
      <div></div>
    </div>
  );
}
