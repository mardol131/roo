import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import React from "react";

type Props = {};

export default function CompanyDataFormPart({}: Props) {
  return (
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
  );
}
