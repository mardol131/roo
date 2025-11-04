"use client";

import { useAppDispatch } from "@/app/_redux/hooks";
import {
  headerFilterSlice,
  ListingCategoryType,
} from "@/app/_redux/slices/headerFilterSlice";

import { getLocalization } from "@/_localization/getLocalization";
import Image from "next/image";
import gastro from "@/app/_images/gastro.jpg";
import place from "@/app/_images/place.jpg";
import entertainment from "@/app/_images/entertainment.jpg";

import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { ColorsAndGradientsType } from "@roo/shared/src/design/colors";

const m = getLocalization("cs", "header.guest_counter");

type Props = {};

export default function ListingCategorySettings({}: Props) {
  const dispatch = useAppDispatch();
  function nullHeaderSettings() {
    dispatch(headerFilterSlice.actions.changeSettings(null));
  }

  function setListingCategory(value: ListingCategoryType) {
    dispatch(headerFilterSlice.actions.changeListingCategory(value));
  }

  const categories: {
    value: ListingCategoryType;
    image: string;
    buttonBg: ColorsAndGradientsType;
  }[] = [
    { value: "gastro", image: gastro.src, buttonBg: "secondaryPrimary" },
    { value: "place", image: place.src, buttonBg: "primary" },
    {
      value: "entertainment",
      image: entertainment.src,
      buttonBg: "primaryTertiary",
    },
  ];

  return (
    <div className="top-0  w-full  flex items-center justify-center">
      <div className="max-w-300 w-full flex justify-center items-center">
        <div className=" p-8 bg-white shadow-xl border border-borderLight w-full grid grid-cols-3 gap-15 rounded-large">
          {categories.map((item) => {
            return (
              <div>
                <div
                  onClick={() => {
                    setListingCategory(item.value);
                  }}
                  className="relative w-full shadow-lg rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt="hll"
                    width={500}
                    height={500}
                    className="absolute top-0 left-0 w-full z-0 object-cover rounded-xl"
                  />
                  <div className="flex bg-black/50 scale-z-100 flex-col text-center gap-4 items-center p-5">
                    <Text
                      text="Gastro"
                      level="label4"
                      color="white"
                      fontWeight="lg"
                    />
                    <Text
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      level="paragraph3"
                      color="white"
                      fontWeight="md"
                    />
                    <Button
                      text="Hledám gastro"
                      textColor="white"
                      bgColor={item.buttonBg}
                      size="xl"
                      rounding="full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
