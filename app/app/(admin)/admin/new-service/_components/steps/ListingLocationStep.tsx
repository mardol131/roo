"use client";

import Button from "@/app/_global/atoms/Button";

import AdminFormWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import React, { useState } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import {
  AdminFormCheckbox,
  AdminFormInput,
  AdminFormInputType,
} from "../AdminFormInput";
import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";

type Props = {};

export default function ListingLocationStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const [addressIsSameAsInvoicing, setAddressIsSameAsInvoicing] =
    useState(false);

  const inputsData: AdminFormInputType[] = [
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

  return (
    <AdminWrapper>
      <AdminFormWrapper
        heading={"Kde se tvoje místo nachází?"}
        subheading={
          "Zadej přesnou adresu. Pokud je adresa stejná jako sídlo tvé firmy, zaklikni pole “Adresa je stejná jako fakturační"
        }
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center max-w-150">
          <AdminFormCheckbox
            text={{ text: "Adresa je stejná jako fakturační", level: "label4" }}
            name="sameAddress"
            onChange={checkboxOnChangeHandler}
            checked={addressIsSameAsInvoicing}
          />
          <AdminFormPartWrapper disabled={addressIsSameAsInvoicing}>
            {inputsData.map((input) => {
              return (
                <AdminFormInput key={input.label + input.value} {...input} />
              );
            })}
          </AdminFormPartWrapper>
        </div>
        <Button
          text="Pokračovat"
          type="button"
          bgColor="secondaryPrimary"
          size="xl"
          textColor="white"
          rounding="full"
          onClick={() => {
            changeStepHandler("listingSpecification");
          }}
        />
      </AdminFormWrapper>
    </AdminWrapper>
  );
}
