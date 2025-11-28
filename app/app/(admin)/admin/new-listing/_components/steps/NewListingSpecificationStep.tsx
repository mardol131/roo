"use client";

import Button from "@/app/_components/atoms/Button";

import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormMultiSelectInput } from "@/app/_components/molecules/inputs/FormMultiSelectInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  Category,
  newListing,
} from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";

type Props = {};

type SpecTagProps = {
  data: Category;
  onClick: (value: Category) => void;
  disableIcon?: boolean;
};

export function SpecTag(props: SpecTagProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.onClick(props.data);
      }}
      className="p-1 px-2 flex items-center justify-center gap-1 text-white cursor-pointer shadow-md/20 rounded-full bg-primary"
    >
      <Text
        text={props.data.label}
        tag="p"
        color="white"
        className="font-semibold"
      />
      {!props.disableIcon && <FaXmark />}
    </button>
  );
}

function SpecTagModal(props: SpecTagProps) {
  return (
    <button
      onMouseDown={(e) => {
        e.stopPropagation();
        props.onClick(props.data);
      }}
      className="font-semibold first:bg-primary/20 hover:bg-primary group  animate group px-2 rounded-full cursor-pointer"
    >
      <Text
        text={props.data.label}
        tag="p"
        color="black"
        className="font-semibold group-hover:text-white animate"
      />
    </button>
  );
}

export const specTagMockData: Category[] = [
  { label: "Hotel", slug: "hotel", id: "1" },
  { label: "Hrad", slug: "hrad", id: "2" },
  { label: "Stodola", slug: "stodola", id: "3" },
  { label: "Stan", slug: "stan", id: "4" },
  { label: "Sad", slug: "sad", id: "5" },
  { label: "Sad", slug: "sad", id: "6" },
  { label: "Sad", slug: "sad", id: "7" },
  { label: "Sad", slug: "sad", id: "8" },
  { label: "Sad", slug: "sad", id: "9" },
  { label: "Sad", slug: "sad", id: "10" },
  { label: "Sad", slug: "sad", id: "11" },
  { label: "Sad", slug: "sad", id: "12" },
];

export default function NewListingSpecificationStep({}: Props) {
  const state = useAppSelector((state) => state.newListing);
  const [selectedSpecifications, setSelectedSpecifications] = useState<
    Category[]
  >(state.listingData.specifications);
  const t = useTranslations(
    state.listingData.type
      ? `admin.company.newListing.steps.specification.${state.listingData.type}`
      : "admin.company.newListing.steps.specification.gastro"
  );
  const { changeStepHandler } = useNewListingSteps();
  const dispatch = useAppDispatch();

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedSpecifications.length > 0) {
      dispatch(newListing.actions.saveSpecifications(selectedSpecifications));
      changeStepHandler("listingLocation");
    }
  }

  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading={t("heading")}
      subheading={t("subheading")}
    >
      <div className="w-full max-w-200 animate-popup">
        <FormMultiSelectInput
          spanTwo={true}
          label="Země"
          name="serviceCountries"
          placeholder="Vyberte země"
          options={specTagMockData}
          defaultValue={selectedSpecifications}
          onChangeAction={setSelectedSpecifications}
          required={true}
          largeBaseField
        />
      </div>

      <div className="flex gap-5">
        <Button
          text={t("buttonBack")}
          type="button"
          bgColor="secondaryPrimary"
          size="xl"
          textColor="white"
          rounding="full"
          onClick={() => {
            changeStepHandler("listingName");
          }}
        />
        <Button
          text={t("buttonContinue")}
          type="submit"
          bgColor="secondaryPrimary"
          size="xl"
          textColor="white"
          rounding="full"
        />
      </div>
    </AdminNewListingFormWrapper>
  );
}
