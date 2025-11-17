"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-service/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormEvent, useCallback } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";

type Props = {};

export default function ServiceNameStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStepHandler("listingSpecification");
  }, []);

  return (
    <AdminWrapper>
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
            name="servicename"
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
    </AdminWrapper>
  );
}
