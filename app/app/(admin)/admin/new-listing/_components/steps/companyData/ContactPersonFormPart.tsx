import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";

type Props = {};

export default function ContactPersonFormPart({}: Props) {
  const state = useAppSelector(
    (state) => state.newListing.companyData?.contactPerson
  );
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
        name="firstName"
        placeholder="Karel"
        required
        defaultValue={state?.firstName}
      />
      <FormTextInput
        label="Příjmení"
        type="text"
        name="lastName"
        placeholder="Novák"
        required
        defaultValue={state?.lastName}
      />
      <FormTextInput
        label="Telefonní číslo"
        type="phone"
        name="phone"
        placeholder="777 123 456"
        spanTwo
        required
        defaultValue={state?.phone}
      />
      <FormTextInput
        label="Email"
        type="email"
        name="email"
        placeholder="karel.novak@email.cz"
        spanTwo
        required
        defaultValue={state?.email}
      />
    </AdminFormPartWrapper>
  );
}
