"use client";

import React, { FormEvent, useCallback, useState } from "react";

import successBg from "../../../../_images/successBg.jpg";
import Button from "@/app/_components/atoms/Button";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";

import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import AdminFormPartWrapper from "../../../../_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "../../wrappers/AdminNewListingFormWrapper";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import CompanyDataFormPart from "./CompanyDataFormPart";
import ContactPersonFormPart from "./ContactPersonFormPart";

type Props = {};

export default function ServiceInitialDataStep({}: Props) {
  const [success, setSuccess] = useState(false);

  const { changeStepHandler } = useNewListingSteps();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(true);
  }, []);

  if (success) {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="relative overflow-hidden bg-white shadow-xl animate-popup rounded-medium z-10 max-w-200 w-full flex flex-col items-center gap-10">
          <div className="z-10  w-full p-20 backdrop flex flex-col items-center text-center gap-10">
            <Text
              tag="h2"
              size="headingLg"
              text="Gratulujeme!"
              color="primary"
              fontWeight="semibold"
            />
            <Text
              tag="p"
              text="Už jsi o krok blíž k úspěšnému profilu! Pojďme teď nastavit tvůj první inzerát."
              color="black"
              className="text-center"
              size="bodyXl"
              fontWeight="semibold"
            />
            <Button
              onClick={() => {
                changeStepHandler("listingType");
              }}
              text="Pokračovat"
              size="2xl"
              bgColor="secondaryPrimaryTertiary"
              textColor="white"
              rounding="full"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading="Registrace dodavatele"
    >
      <div className="grid grid-cols-2 items-start gap-5">
        <CompanyDataFormPart />
        <ContactPersonFormPart />
      </div>
      <div className="flex flex-col items-center gap-4">
        <FormCheckboxInput
          label={{
            text: "Souhlasím s obchodními podmínkami a Zpracováním osobních údajů",
            tag: "p",
          }}
          value="true"
          name="gdpr"
          required
        />
        <FormCheckboxInput
          label={{
            text: "Chci dostávat personalizovaná marketingová sdělení",
            tag: "p",
          }}
          name="marketing"
          value="true"
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          text="Pokračovat"
          size="2xl"
          bgColor="tertiaryPrimarySecondary"
          rounding="full"
          textColor="white"
        />
      </div>
    </AdminNewListingFormWrapper>
  );
}
