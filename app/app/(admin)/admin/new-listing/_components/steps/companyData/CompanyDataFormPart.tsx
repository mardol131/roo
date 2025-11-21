import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormSelectInput } from "@/app/_components/molecules/inputs/FormSelectInput";
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
        type="number"
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
        type="number"
        name="cityCode"
        placeholder="140 00"
        max={5}
        required
      />
      <FormSelectInput
        blockType="formselectinput"
        label="Země"
        placeholder="Vyberte zemi"
        value="country"
        options={[
          { text: "Česká republika", value: "czech-republic" },
          { text: "Slovenská republika", value: "slovakia" },
        ]}
        required
      />
    </AdminFormPartWrapper>
  );
}
