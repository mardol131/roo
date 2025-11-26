"use client";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormSelectInput } from "@/app/_components/molecules/inputs/FormSelectInput";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { useAppSelector } from "@/app/_redux/hooks";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function CompanyDataFormPart({}: Props) {
  const store = useAppSelector((state) => state.newListing.companyData);
  const t = useTranslations(
    "admin.company.newListing.steps.companyData.leftPart"
  );

  return (
    <AdminFormPartWrapper>
      <Text
        text={t("title")}
        tag="h4"
        color="black"
        className="font-semibold text-center py-2 col-span-2"
        size="headingSm"
      />
      <FormTextInput
        defaultValue={store?.companyName}
        label={t("inputs.companyName.label")}
        type="text"
        name="companyName"
        placeholder={t("inputs.companyName.placeholder")}
        spanTwo
        required
      />
      <FormTextInput
        defaultValue={store?.ico}
        label={t("inputs.ico.label")}
        type="number"
        name="ico"
        placeholder={t("inputs.ico.placeholder")}
        required
        max={8}
      />
      <FormTextInput
        defaultValue={store?.dic}
        label={t("inputs.dic.label")}
        type="text"
        name="dic"
        placeholder={t("inputs.dic.placeholder")}
        max={12}
      />
      <FormTextInput
        defaultValue={store?.street}
        label={t("inputs.street.label")}
        type="text"
        name="street"
        placeholder={t("inputs.street.placeholder")}
        required
      />
      <FormTextInput
        label={t("inputs.city.label")}
        type="text"
        name="city"
        placeholder={t("inputs.city.placeholder")}
        required
        defaultValue={store?.city}
      />
      <FormTextInput
        label={t("inputs.cityCode.label")}
        type="number"
        name="cityCode"
        placeholder={t("inputs.cityCode.placeholder")}
        max={5}
        required
        defaultValue={store?.cityCode}
      />
      <FormSelectInput
        blockType="formselectinput"
        label={t("inputs.country.label")}
        placeholder={t("inputs.country.placeholder")}
        value="country"
        options={[
          { text: "Česká republika", value: "czech-republic" },
          { text: "Slovenská republika", value: "slovakia" },
        ]}
        required
        defaultValue={store?.country}
      />
    </AdminFormPartWrapper>
  );
}
