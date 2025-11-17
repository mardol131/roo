"use client";

import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import React, { FormEvent, useCallback, useState } from "react";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";

type Props = {};

export default function SignupForm({}: Props) {
  const [error, setError] = useState<string | null>();

  const onSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      setError(null);
      e.preventDefault();
      const { password, passwordCheck, email, gdpr, marketing, isCompany } =
        formDataToObject(new FormData(e.currentTarget));

      if (!password || !passwordCheck) {
        setError("Chybí heslo nebo potvrzení hesla");
      }

      if (password !== passwordCheck) {
        setError("Hesla se neshodují");
      }
    },
    [error]
  );

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-150 w-full flex flex-col items-center gap-6 border-borderLight p-10 rounded-xl"
    >
      <Text
        tag="h2"
        size="headingMd"
        text="Vytvořit účet"
        color="primary"
        fontWeight="semibold"
      />

      <div className="w-full flex flex-col gap-2">
        {/* <FormTextInput
          label="Uživatelské jméno"
          placeholder="Uživatelské jméno"
          type="text"
          name="username"
          className="border-2 rounded-md border-borderLight w-full"
          required
        /> */}
        <FormTextInput
          label="Email"
          placeholder="email@email.com"
          type="email"
          name="email"
          className="border-2 rounded-md border-borderLight w-full"
          required={true}
        />
        <FormTextInput
          label="Heslo"
          placeholder="****"
          type="password"
          name="password"
          className="border-2 rounded-md border-borderLight w-full"
          required={true}
        />
        <FormTextInput
          label="Heslo znovu"
          placeholder="****"
          type="password"
          name="passwordCheck"
          className="border-2 rounded-md border-borderLight w-full"
          required={true}
        />
        <Text tag="p" text="Minimálně 8 znaků" color="placeholder" />
        <div className="mt-4 flex flex-col gap-5">
          <FormCheckboxInput
            value="true"
            name="gdpr"
            label={{
              text: "Souhlasím s obchodními podmínkami a Zpracováním osobních údajů",
              tag: "p",
            }}
            required={true}
            className="px-3"
          />{" "}
          <FormCheckboxInput
            value="true"
            name="gdpr"
            label={{
              text: "Chci dostávat personalizovaná marketingová sdělení ",
              tag: "p",
            }}
            className="px-3"
          />
          <div className="p-3 bg-tertiary/10 rounded-lg border border-borderLight">
            <FormCheckboxInput
              value="true"
              name="isCompany"
              label={{
                text: "Chcete se zaregistrovat i jako dodavatel a začít nabízet své služby?",
                tag: "p",
              }}
            />
          </div>
        </div>
      </div>

      <Button
        text="Zaregistrovat se"
        size="xl"
        bgColor="primarySecondary"
        textColor="white"
        rounding="full"
        type="submit"
      />
      {error && <Text text={error || ""} color="danger" tag="p" />}
    </form>
  );
}
