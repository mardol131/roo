import Image from "next/image";
import React, { ReactNode } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PriceRangeSlider } from "../global/filters/PriceRangeSlider";
import CategoryFilter from "../global/molecules/CategoryFilter";
import map from "@/app/_images/map.png";

type FilterSectionWrapperProps = {
  children: ReactNode;
  header?: string;
};

function FilterSectionWrapper(props: FilterSectionWrapperProps) {
  return (
    <div className="p-8 border-b border-borderLight flex flex-col gap-6 last:border-b-0">
      {props.header && (
        <p className="text-md text-textNormal">{props.header}</p>
      )}
      {props.children}
    </div>
  );
}

type Props = {};

export default function FilterBar({}: Props) {
  return (
    <div className="relative border-r border-borderLight min-h-screen pb-20">
      <div className="sticky top-11/12 flex items-center justify-center w-full px-5">
        <button className="bg-primary w-full py-2 rounded-small text-white font-semibold shadow-lg hover:scale-105 animate cursor-pointer hover:shadow-primary-950/30">
          Vyhledat
        </button>
      </div>
      <div className="mb-10">
        <FilterSectionWrapper>
          <div className="relative w-full h-35 overflow-hidden rounded-medium brightness-100 flex items-center justify-center flex-col gap-2 shadow-lg">
            <div className="z-20 flex flex-col items-center justify-center gap-3">
              {" "}
              <FaMapMarkerAlt className="text-4xl text-primary" />
              <button className="bg-primary text-white py-1 px-3 text-sm rounded-small">
                Najdi na mapě
              </button>
            </div>
            <Image
              src={map}
              width={500}
              height={500}
              alt="map"
              className="absolute z-0 h-full object-cover grayscale-70 hue-rotate-170"
            />
          </div>
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Rozpočet">
          <PriceRangeSlider
            min={0}
            max={1000}
            rtl={false}
            counts={[0, 20, 5, 50, 40, 17, 17, 50, 100, 17, 17, 3, 0]}
          />
        </FilterSectionWrapper>

        <FilterSectionWrapper header="Populární filtry">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Typ místa">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Catering a nápoje">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Podle typu akce">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Místní pravidla">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Na místě">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Technologie">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="vybavení na místě">
          <CategoryFilter />
        </FilterSectionWrapper>
        <FilterSectionWrapper header="Služby">
          <CategoryFilter />
        </FilterSectionWrapper>
      </div>
    </div>
  );
}
