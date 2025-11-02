"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import React, { useState } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import { AdminFormInput } from "../AdminFormInput";
import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";

type Props = {};

export default function ServiceNameStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();

  return (
    <AdminWrapper>
      <AdminFormWrapper
        heading={"Napiš název svého místa"}
        subheading={"Jak se tvoje místo jmenuje?"}
      >
        <AdminFormPartWrapper>
          <AdminFormInput
            label="Jméno tvého místa"
            type="text"
            placeholder="např. Statek Ondřejov"
            name="servicename"
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
