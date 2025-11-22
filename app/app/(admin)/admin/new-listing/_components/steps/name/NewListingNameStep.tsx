"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormEvent, useCallback } from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import { useAppDispatch } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";

type Props = {};

export default function NewListingNameStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const dispatch = useAppDispatch();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = formDataToObject(new FormData(e.currentTarget));
    console.log(data);
    dispatch(newListing.actions.saveListingName(data.listingName));
    changeStepHandler("listingSpecification");
  }, []);

  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading={"Název místa"}
    >
      <AdminFormPartWrapper>
        <Text
          text="Jak se tvoje místo jménuje?"
          tag="h3"
          size="headingSm"
          className="col-span-2 text-center"
          fontWeight="semibold"
        />
        <FormTextInput
          label="Jméno tvého místa"
          type="text"
          placeholder="např. Statek Ondřejov"
          name="listingName"
          spanTwo
          required
        />
      </AdminFormPartWrapper>
      <Button
        text="Pokračovat"
        type="submit"
        bgColor="secondaryPrimary"
        size="xl"
        textColor="white"
        rounding="full"
      />
    </AdminNewListingFormWrapper>
  );
}
