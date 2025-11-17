import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import React from "react";

type Props = {};

export default function ContactPersonFormPart({}: Props) {
  return (
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
        required
      />
      <FormTextInput
        label="Příjmení"
        type="text"
        name="surname"
        placeholder="Novák"
        required
      />
      <FormTextInput
        label="Telefonní číslo"
        type="phone"
        name="phone"
        placeholder="777 123 456"
        spanTwo
        required
      />
      <FormTextInput
        label="Email"
        type="email"
        name="email"
        placeholder="karel.novak@email.cz"
        spanTwo
        required
      />
    </AdminFormPartWrapper>
  );
}
