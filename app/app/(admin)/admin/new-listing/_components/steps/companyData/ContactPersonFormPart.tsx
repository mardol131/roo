import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { useAppSelector } from "@/app/_redux/hooks";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function ContactPersonFormPart({}: Props) {
  const state = useAppSelector(
    (state) => state.newListing.companyData?.contactPerson
  );

  const t = useTranslations(
    "admin.company.newListing.steps.companyData.rightPart"
  );

  return (
    <AdminFormPartWrapper title={t("title")}>
      <FormTextInput
        label={t("inputs.firstName.label")}
        type="text"
        name="firstName"
        placeholder={t("inputs.firstName.placeholder")}
        required
        defaultValue={state?.firstName}
      />
      <FormTextInput
        label={t("inputs.lastName.label")}
        type="text"
        name="lastName"
        placeholder={t("inputs.lastName.placeholder")}
        required
        defaultValue={state?.lastName}
      />
      <FormTextInput
        label={t("inputs.phone.label")}
        type="phone"
        name="phone"
        placeholder={t("inputs.phone.placeholder")}
        spanTwo
        required
        defaultValue={state?.phone}
      />
      <FormTextInput
        label={t("inputs.email.label")}
        type="email"
        name="email"
        placeholder={t("inputs.email.placeholder")}
        spanTwo
        required
        defaultValue={state?.email}
      />
    </AdminFormPartWrapper>
  );
}
