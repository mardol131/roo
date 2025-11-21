"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import {
  FormTextInput,
  FormTextInputProps,
} from "@/app/_components/molecules/inputs/FormTextInput";
import React, { FormEvent, useCallback, useState } from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import LocationFormPart from "./LocationFormPart";

type Props = {};

export default function NewListingLocationStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const [addressIsSameAsInvoicing, setAddressIsSameAsInvoicing] =
    useState(false);

  function checkboxOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setAddressIsSameAsInvoicing(e.target.checked);
  }

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStepHandler("summary");
  }, []);

  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading={"Kde se tvoje místo nachází?"}
      subheading={
        "Zadej přesnou adresu. Pokud je adresa stejná jako sídlo tvé firmy, zaklikni pole “Adresa je stejná jako fakturační"
      }
    >
      <div className="w-full flex flex-col gap-5 items-center justify-center max-w-150">
        <FormCheckboxInput
          label={{ text: "Adresa je stejná jako fakturační", tag: "span" }}
          name="sameAddress"
          value="true"
          onChange={checkboxOnChangeHandler}
          isChecked={addressIsSameAsInvoicing}
        />
        <LocationFormPart addressIsSameAsInvoicing={addressIsSameAsInvoicing} />
      </div>
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
