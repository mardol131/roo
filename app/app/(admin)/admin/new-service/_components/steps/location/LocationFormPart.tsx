import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import {
  FormTextInput,
  FormTextInputProps,
} from "@/app/_components/molecules/inputs/FormTextInput";
import React from "react";

type Props = {
  addressIsSameAsInvoicing: boolean;
};

export default function LocationFormPart({ addressIsSameAsInvoicing }: Props) {
  const inputsData: FormTextInputProps[] = [
    {
      label: "Ulice",
      type: "text",
      placeholder: "Eventova 333",
      name: "street",
      disabled: addressIsSameAsInvoicing,
    },
    {
      label: "Město",
      type: "text",
      placeholder: "Praha",
      name: "city",
      disabled: addressIsSameAsInvoicing,
    },
    {
      label: "PSČ",
      type: "text",
      placeholder: "100 00",
      name: "cityCode",
      disabled: addressIsSameAsInvoicing,
    },
    {
      label: "Země",
      type: "text",
      placeholder: "Česká republika",
      name: "country",
      disabled: addressIsSameAsInvoicing,
    },
  ];

  return (
    <AdminFormPartWrapper disabled={addressIsSameAsInvoicing}>
      {inputsData.map((input) => {
        return (
          <FormTextInput
            key={input.label + input.value}
            {...input}
            type="text"
            spanTwo={input.name === "street" || input.name === "country"}
            required={!addressIsSameAsInvoicing}
          />
        );
      })}
    </AdminFormPartWrapper>
  );
}
