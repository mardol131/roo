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

export default function NewListingSummary({}: Props) {
  const { changeStepHandler } = useNewListingSteps();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStepHandler("listingSpecification");
  }, []);

  return (
    <AdminWrapper>
      <AdminNewListingFormWrapper
        onSubmit={onSubmitHandler}
        heading={"Souhrn základních informací"}
      >
        <AdminFormPartWrapper>
          <Text
            text="Fakturační údaje"
            tag="h3"
            size="headingSm"
            className="col-span-2 text-center"
            fontWeight="semibold"
          />
          <FormTextInput
            label="Název společnosti"
            type="text"
            name="companyName"
            placeholder="ROO s.r.o."
            spanTwo
            required
          />
          <FormTextInput
            label="IČO"
            type="text"
            name="ico"
            placeholder="123456789"
            required
          />
          <FormTextInput
            label="DIČ"
            type="text"
            name="dic"
            placeholder="CZ123456789"
          />
          <FormTextInput
            label="Ulice"
            type="text"
            name="street"
            placeholder="Eventová 333/6"
            required
          />{" "}
          <FormTextInput
            label="Město"
            type="text"
            name="city"
            placeholder="Praha"
            required
          />
          <FormTextInput
            label="PSČ"
            type="text"
            name="cityCode"
            placeholder="140 00"
            required
          />
          <FormTextInput
            label="Země"
            type="text"
            name="country"
            placeholder="Česká republika"
            required
          />
        </AdminFormPartWrapper>
        <AdminFormPartWrapper>
          <Text
            text="Údaje o společnosti"
            tag="h4"
            color="black"
            className="font-semibold text-center py-2 col-span-2"
            size="headingSm"
          />
          <FormTextInput
            label="Název společnosti"
            type="text"
            name="companyName"
            placeholder="ROO s.r.o."
            spanTwo
            required
          />
          <FormTextInput
            label="IČO"
            type="text"
            name="ico"
            placeholder="123456789"
            required
          />
          <FormTextInput
            label="DIČ"
            type="text"
            name="dic"
            placeholder="CZ123456789"
          />
          <FormTextInput
            label="Ulice"
            type="text"
            name="street"
            placeholder="Eventová 333/6"
            required
          />{" "}
          <FormTextInput
            label="Město"
            type="text"
            name="city"
            placeholder="Praha"
            required
          />
          <FormTextInput
            label="PSČ"
            type="text"
            name="cityCode"
            placeholder="140 00"
            required
          />
          <FormTextInput
            label="Země"
            type="text"
            name="country"
            placeholder="Česká republika"
            required
          />
        </AdminFormPartWrapper>
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
