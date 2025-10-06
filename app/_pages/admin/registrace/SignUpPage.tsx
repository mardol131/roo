"use client";

import Heading from "@/app/_global/atoms/Heading";
import React, { useState } from "react";
import {
  AdminFormCheckbox,
  AdminFormInput,
} from "./_components/AdminFormInput";
import Button from "@/app/_global/atoms/Button";
import AdminWrapper from "../_components/AdminWrapper";

type Props = {};

export default function SignUpPage({}: Props) {
  const [success, setSuccess] = useState(false);

  return (
    <AdminWrapper>
      <div className="h-full flex flex-col justify-start items-center gap-10">
        <Heading level="h4" text={"Registrace dodavatele"} />
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-5">
            {" "}
            <div>
              <div className="bg-white border border-borderLight rounded-large p-3 gap-3 flex flex-col">
                <AdminFormInput
                  label="Název společnosti"
                  type="text"
                  name="companyName"
                  placeholder="ROO s.r.o."
                />
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
                <AdminFormInput
                  label="Ulice"
                  type="text"
                  name="street"
                  placeholder="Eventová 333/6"
                />
                <AdminFormInput
                  label="PSČ"
                  type="text"
                  name="cityCode"
                  placeholder="140 00"
                />
                <AdminFormInput
                  label="Město"
                  type="text"
                  name="city"
                  placeholder="Praha"
                />
                <AdminFormInput
                  label="Země"
                  type="text"
                  name="country"
                  placeholder="Česká republika"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
              <div className="bg-white border border-borderLight rounded-large p-3 gap-3 flex flex-col">
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
            </div>
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
            <Button
              type="submit"
              text="Registrovat se"
              size="2xl"
              bgColor="tertiaryPrimarySecondary"
              rounding="full"
              textColor="white"
            />
          </div>
        </form>
      </div>
    </AdminWrapper>
  );
}
