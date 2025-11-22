import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import {
  FormTextInput,
  FormTextInputProps,
} from "@/app/_components/molecules/inputs/FormTextInput";
import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";

type Props = {
  addressIsSameAsInvoicing: boolean;
};

export default function LocationFormPart({ addressIsSameAsInvoicing }: Props) {
  const state = useAppSelector((state) => state.newListing.listingData);

  const inputsData: FormTextInputProps[] = [
    {
      label: "Ulice",
      type: "text",
      placeholder: "Eventova 333",
      name: "street",
      disabled: addressIsSameAsInvoicing,
      defaultValue: state?.newListingLocation?.street,
      required: !addressIsSameAsInvoicing,
    },
    {
      label: "Město",
      type: "text",
      placeholder: "Praha",
      name: "city",
      disabled: addressIsSameAsInvoicing,
      defaultValue: state?.newListingLocation?.city,
      required: !addressIsSameAsInvoicing,
    },
    {
      label: "PSČ",
      type: "text",
      placeholder: "100 00",
      name: "cityCode",
      disabled: addressIsSameAsInvoicing,
      defaultValue: state?.newListingLocation?.cityCode,
      required: !addressIsSameAsInvoicing,
    },
    {
      label: "Země",
      type: "text",
      placeholder: "Česká republika",
      name: "country",
      disabled: addressIsSameAsInvoicing,
      defaultValue: state?.newListingLocation?.country,
      required: !addressIsSameAsInvoicing,
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
