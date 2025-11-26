"use client";

import { useAppDispatch } from "@/app/_redux/hooks";
import {
  headerFilterSlice,
  ListingCategoryType,
} from "@/app/_redux/slices/filtersSlice/headerFilterSlice";

import { getLocalization } from "@/app/_localization/getLocalization";
import Image from "next/image";
import gastro from "@/app/_images/gastro.jpg";
import place from "@/app/_images/place.jpg";
import entertainment from "@/app/_images/entertainment.jpg";

import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { ColorsAndGradientsType } from "@roo/shared/src/design/colors";
import { useTranslations } from "next-intl";

type Props = {};

export default function ListingCategorySettings({}: Props) {
  const dispatch = useAppDispatch();

  const t = useTranslations("header.listingCategory.card");

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
              <div key={item.value} className="">
                <div
                  onClick={() => {
                    setListingCategory(item.value);
                  }}
                  className="relative h-full w-full group shadow-lg rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt="hll"
                    width={500}
                    height={500}
                    className="absolute top-0 h-full left-0 w-full z-0 object-cover rounded-xl"
                  />
                  <div className="flex bg-black/70 group-hover:bg-black/50 animate scale-z-100 flex-col text-center gap-4 items-center justify-between h-full p-5">
                    <Text
                      text={t(`${item.value}.heading`)}
                      tag="p"
                      size="headingSm"
                      color="white"
                      fontWeight="semibold"
                    />
                    <Text
                      text={t(`${item.value}.text`)}
                      tag="p"
                      color="white"
                      fontWeight="semibold"
                    />
                    <Button
                      text={t(`${item.value}.button_text`)}
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
