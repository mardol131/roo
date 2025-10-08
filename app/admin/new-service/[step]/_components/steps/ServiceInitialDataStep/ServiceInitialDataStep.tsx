"use client";

import React, { useState } from "react";

import successBg from "../../../../../_images/successBg.jpg";
import Button from "@/app/_global/atoms/Button";
import Image from "next/image";
import Text from "@/app/_global/atoms/Text";
import AdminWrapper from "@/app/admin/_components/wrappers/AdminWrapper";
import AdminFormWrapper from "@/app/admin/_components/wrappers/AdminFormWrapper";
import { AdminFormCheckbox, AdminFormInput } from "../../AdminFormInput";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";

type Props = {};

export default function ServiceInitialDataStep({}: Props) {
  const [success, setSuccess] = useState(false);
  const { newListingNextStep } = useNewListingSteps();

  if (success) {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        <Image
          src={successBg}
          width={2000}
          height={2000}
          alt="success"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="bg-white rounded-medium z-10 max-w-200 w-full p-10 py-18 flex flex-col items-center gap-10">
          <Text level="h2" text="Gratulujeme!" color="primary" />
          <Text
            level="paragraph1"
            text="Už jsi o krok blíž k úspěšnému profilu! Pojďme teď nastavit tvůj první inzerát."
            color="black"
            className="text-center"
          />
          <Button
            onClick={() => {
              newListingNextStep("typ-dodavatele");
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
            <div className="bg-white border border-borderLight rounded-large p-4 gap-3 flex flex-col">
              <Text
                text="Údaje o společnosti"
                level="paragraph2"
                color="black"
                className="font-semibold text-center py-2"
              />
              <AdminFormInput
                label="Název společnosti"
                type="text"
                name="companyName"
                placeholder="ROO s.r.o."
              />
              <div className="flex gap-5">
                <AdminFormInput
                  label="IČO"
                  type="text"
                  name="ico"
                  placeholder="123456789"
                />
                <AdminFormInput
                  label="DIČ"
                  type="text"
                  name="dic"
                  placeholder="CZ123456789"
                />
              </div>
              <AdminFormInput
                label="Ulice"
                type="text"
                name="street"
                placeholder="Eventová 333/6"
              />{" "}
              <div className="flex gap-5">
                <AdminFormInput
                  label="Město"
                  type="text"
                  name="city"
                  placeholder="Praha"
                />
                <AdminFormInput
                  label="PSČ"
                  type="text"
                  name="cityCode"
                  placeholder="140 00"
                />
              </div>
              <AdminFormInput
                label="Země"
                type="text"
                name="country"
                placeholder="Česká republika"
              />
            </div>
            <div className="bg-white border border-borderLight rounded-large p-3 gap-3 flex flex-col">
              <Text
                text="Hlavní kontaktní osoba"
                level="paragraph2"
                color="black"
                className="font-semibold text-center py-2"
              />
              <AdminFormInput
                label="Jméno"
                type="text"
                name="name"
                placeholder="Karel"
              />
              <AdminFormInput
                label="Příjmení"
                type="text"
                name="surname"
                placeholder="Novák"
              />
              <AdminFormInput
                label="Telefonní číslo"
                type="text"
                name="phone"
                placeholder="+420 777 123 456"
              />
              <AdminFormInput
                label="Email"
                type="email"
                name="email"
                placeholder="karel.novak@email.cz"
              />
            </div>
            {/* <div className="flex flex-col justify-between gap-5">
              <div className="bg-white border border-borderLight rounded-large p-3 gap-3 flex flex-col">
                <AdminFormInput
                  label="Heslo"
                  type="password"
                  name="password"
                  placeholder="***********"
                />
                <AdminFormInput
                  label="Heslo ještě jednou"
                  type="password"
                  name="passwordVerification"
                  placeholder="***********"
                />
              </div>
            </div> */}
          </div>
          <div className="flex flex-col items-center gap-4">
            <AdminFormCheckbox
              text="Souhlasím s obchodními podmínkami a Zpracováním osobních údajů"
              name="gdpr"
            />
            <AdminFormCheckbox
              text="Chci dostávat personalizovaná marketingová sdělení"
              name="marketing"
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
                text="Registrovat se"
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
