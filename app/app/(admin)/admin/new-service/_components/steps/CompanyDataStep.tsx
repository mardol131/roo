"use client";

import React, { useState } from "react";

import successBg from "../../../_images/successBg.jpg";
import Button from "@/app/_components/atoms/Button";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";

import { AdminFormCheckbox, AdminFormInput } from "../AdminFormInput";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import AdminFormPartWrapper from "../../../_components/wrappers/AdminFormPartWrapper";
import AdminFormWrapper from "../../../_components/wrappers/AdminFormWrapper";
import AdminWrapper from "../../../_components/wrappers/AdminWrapper";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";

type Props = {};

export default function ServiceInitialDataStep({}: Props) {
  const [success, setSuccess] = useState(false);

  const { changeStepHandler } = useNewListingSteps();

  if (success) {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        <Image
          src={successBg}
          width={2000}
          height={2000}
          alt="success"
          className="w-full opacity-60 h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="bg-white rounded-medium z-10 max-w-200 w-full p-10 py-18 flex flex-col items-center gap-10">
          <Text tag="h2" size="headingLg" text="Gratulujeme!" color="primary" />
          <Text
            tag="p"
            text="Už jsi o krok blíž k úspěšnému profilu! Pojďme teď nastavit tvůj první inzerát."
            color="black"
            className="text-center"
            size="bodyXl"
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
    );
  }
  return (
    <AdminWrapper>
      <AdminFormWrapper heading="Registrace dodavatele">
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 items-start gap-5">
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
              />
              <FormTextInput
                label="IČO"
                type="text"
                name="ico"
                placeholder="123456789"
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
              />{" "}
              <FormTextInput
                label="Město"
                type="text"
                name="city"
                placeholder="Praha"
              />
              <FormTextInput
                label="PSČ"
                type="text"
                name="cityCode"
                placeholder="140 00"
              />
              <FormTextInput
                label="Země"
                type="text"
                name="country"
                placeholder="Česká republika"
              />
            </AdminFormPartWrapper>
            <AdminFormPartWrapper>
              <Text
                text="Hlavní kontaktní osoba"
                tag="h4"
                color="black"
                className="font-semibold text-center py-2 col-span-2"
                size="headingSm"
              />
              <FormTextInput
                label="Jméno"
                type="text"
                name="name"
                placeholder="Karel"
              />
              <FormTextInput
                label="Příjmení"
                type="text"
                name="surname"
                placeholder="Novák"
              />
              <FormTextInput
                label="Telefonní číslo"
                type="phone"
                name="phone"
                placeholder="+420 777 123 456"
                spanTwo
              />
              <FormTextInput
                label="Email"
                type="email"
                name="email"
                placeholder="karel.novak@email.cz"
                spanTwo
              />
            </AdminFormPartWrapper>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FormCheckboxInput
              label={[
                {
                  text: "Souhlasím s obchodními podmínkami a Zpracováním osobních údajů",
                  tag: "p",
                },
              ]}
              value="true"
              name="gdpr"
            />
            <FormCheckboxInput
              label={[
                {
                  text: "Chci dostávat personalizovaná marketingová sdělení",
                  tag: "p",
                },
              ]}
              name="marketing"
              value="true"
            />
          </div>
          <div className="flex justify-center">
            <div
              onClick={() => {
                setSuccess(true);
              }}
            >
              <Button
                type="submit"
                text="Pokračovat"
                size="2xl"
                bgColor="tertiaryPrimarySecondary"
                rounding="full"
                textColor="white"
              />
            </div>
          </div>
        </form>
      </AdminFormWrapper>
    </AdminWrapper>
  );
}
