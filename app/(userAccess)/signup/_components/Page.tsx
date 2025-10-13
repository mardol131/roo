import React from "react";
import Text from "@/app/_global/atoms/Text";
import {
  AdminFormCheckbox,
  AdminFormInput,
} from "@/app/(admin)/admin/new-service/_components/AdminFormInput";
import Button from "@/app/_global/atoms/Button";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="p-15 bg-white rounded-large shadow-2xl flex flex-col items-center h-full">
      <div className="w-full flex flex-col items-center gap-10">
        <Text
          level="h2"
          text="Vytvoř účet"
          color="primary"
          className="font-semibold"
        />
        <div className="w-full flex flex-col gap-2">
          <AdminFormInput
            placeholder="Uživatel"
            label="Uživatelské jméno"
            type="text"
            name="username"
            className="border-2 rounded-md border-borderLight w-full"
          />
          <AdminFormInput
            placeholder="*****"
            label="Heslo"
            type="password"
            name="passwrod"
            className="border-2 rounded-md border-borderLight w-full"
          />
          <AdminFormInput
            placeholder="*****"
            label="Heslo znovu"
            type="password"
            name="passwordAgain"
            className="border-2 rounded-md border-borderLight w-full"
          />
          <Text
            text="Minimálně 8 znaků"
            level="label4"
            color="black"
            className="text-textPlaceholder"
          />
        </div>
        <div>
          <AdminFormCheckbox
            text="Souhlasím s obchodními podmínkami a Zpracováním osobních údajů"
            name="terms"
            level="label4"
          />
          <AdminFormCheckbox
            text="Chci dostávat personalizovaná marketingová sdělení "
            name="marketing"
            level="label4"
          />
        </div>
        <Button
          text="Pokračovat"
          size="2xl"
          bgColor="primarySecondary"
          textColor="white"
          rounding="full"
        />
        <div className="flex gap-2">
          <Text level="label4" color="black" text="Už máš účet?" />
          <Text
            level="label4"
            color="primary"
            text="Přihlaš se"
            className="font-bold"
          />
        </div>
      </div>
    </div>
  );
}
