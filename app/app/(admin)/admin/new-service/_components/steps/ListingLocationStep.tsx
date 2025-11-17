"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-service/_components/wrappers/AdminNewListingFormWrapper";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import {
  FormTextInput,
  FormTextInputProps,
} from "@/app/_components/molecules/inputs/FormTextInput";
import React, { FormEvent, useCallback, useState } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";

type Props = {};

export default function ListingLocationStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const [addressIsSameAsInvoicing, setAddressIsSameAsInvoicing] =
    useState(false);

  const inputsData: FormTextInputProps[] = [
    {
      label: "Ulice",
      type: "text",
      placeholder: "Eventova 333",
      name: "street",
      disabled: addressIsSameAsInvoicing,
    },
    {
      label: "Město",
      type: "text",
      placeholder: "Praha",
      name: "city",
      disabled: addressIsSameAsInvoicing,
    },
    {
      label: "PSČ",
      type: "text",
      placeholder: "100 00",
      name: "cityCode",
      disabled: addressIsSameAsInvoicing,
    },
    {
      label: "Země",
      type: "text",
      placeholder: "Česká republika",
      name: "country",
      disabled: addressIsSameAsInvoicing,
    },
  ];

  function checkboxOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setAddressIsSameAsInvoicing(e.target.checked);
  }

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <AdminWrapper>
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
          <AdminFormPartWrapper disabled={addressIsSameAsInvoicing}>
            {inputsData.map((input) => {
              return (
                <FormTextInput
                  key={input.label + input.value}
                  {...input}
                  type="text"
                  spanTwo={input.name === "street" || input.name === "country"}
                  required={!addressIsSameAsInvoicing}
                />
              );
            })}
          </AdminFormPartWrapper>
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
    </AdminWrapper>
  );
}
