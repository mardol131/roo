"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import React, { useState } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import { AdminFormInput } from "../AdminFormInput";
import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import Text from "@/app/_components/atoms/Text";

type Props = {};

export default function ServiceNameStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();

  return (
    <AdminWrapper>
      <AdminFormWrapper heading={"Název místa"}>
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
            name="servicename"
            spanTwo
          />
        </AdminFormPartWrapper>
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
