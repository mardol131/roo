"use client";

import { AdminFormInput } from "@/app/(admin)/admin/new-service/_components/AdminFormInput";
import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import { FormEvent } from "react";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";

type Props = {};

export default function Login({}: Props) {
  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = formDataToObject(new FormData(e.currentTarget));

    if (!data) {
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full flex flex-col items-center gap-10"
    >
      <Text
        level="label4"
        text="Přihlásit se"
        color="primary"
        className="font-semibold"
      />
      <div className="w-full flex flex-col gap-2">
        <AdminFormInput
          placeholder="vasemail@email.com"
          label="Uživatelský email"
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

        <Text
          text="Minimálně 8 znaků"
          level="label7"
          color="black"
          className="text-textPlaceholder"
        />
      </div>

      <Button
        text="Pokračovat"
        size="2xl"
        bgColor="primarySecondary"
        textColor="white"
        rounding="full"
        type="submit"
      />
      <div className="flex gap-2">
        <Text level="paragraph2" color="black" text="Ještě nemáš účet?" />
        <Text
          level="paragraph2"
          color="primary"
          text="Registrovat se"
          link="registrovat-se"
          fontWeight="lg"
        />
      </div>
    </form>
  );
}
