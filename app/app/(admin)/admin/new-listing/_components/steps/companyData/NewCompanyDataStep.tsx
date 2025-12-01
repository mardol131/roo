"use client";

import { FormEvent, useCallback, useState } from "react";

import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";

import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import AdminNewListingFormWrapper from "../../wrappers/AdminNewListingFormWrapper";
import CompanyDataFormPart from "./CompanyDataFormPart";
import ContactPersonFormPart from "./ContactPersonFormPart";
import { set } from "date-fns";
import { useTranslations } from "next-intl";

type Props = {};

export default function NewCompanyDataStep({}: Props) {
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.newListing.companyData?.legal);

  const t = useTranslations("admin.company.newListing.steps.companyData");

  const { changeStepHandler } = useNewListingSteps();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = formDataToObject(new FormData(e.currentTarget));
    setSuccess(true);
    dispatch(
      newListing.actions.saveCompanyData({
        companyName: data.companyName,
        ico: data.ico,
        dic: data.dic,
        street: data.street,
        city: data.city,
        cityCode: data.cityCode,
        country: data.country,
        contactPerson: {
          firstName: data.firstName,
          lastName: data.lastName,
          countryCode: data.countryCode,
          phone: data.phone,
          email: data.email,
        },
        legal: {
          gdpr: data.gdpr === "true",
          marketing: data.marketing === "true",
        },
      })
    );
  }, []);

  if (success) {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="relative overflow-hidden bg-white shadow-xl animate-popup rounded-medium z-10 max-w-200 w-full flex flex-col items-center gap-10">
          <div className="z-10  w-full p-20 backdrop flex flex-col items-center text-center gap-10">
            <Text
              tag="h2"
              size="headingLg"
              text="Gratulujeme!"
              color="primary"
              fontWeight="semibold"
            />
            <Text
              tag="p"
              text="Už jsi o krok blíž k úspěšnému profilu! Pojďme teď nastavit tvůj první inzerát."
              color="black"
              className="text-center"
              size="bodyXl"
              fontWeight="semibold"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  changeStepHandler("listingType");
                }}
                text="Pokračovat"
                size="2xl"
                bgColor="secondaryPrimaryTertiary"
                textColor="white"
                rounding="full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <AdminNewListingFormWrapper onSubmit={onSubmitHandler} heading={t("title")}>
      <div className="md:grid flex flex-col grid-cols-2 w-full items-start gap-5">
        <CompanyDataFormPart />
        <ContactPersonFormPart />
      </div>
      <div className="flex flex-col items-center gap-2">
        <FormCheckboxInput
          label={{
            text: t("legal"),
            tag: "p",
          }}
          value="true"
          name="gdpr"
          required
          defaultChecked={state?.gdpr}
        />
        <FormCheckboxInput
          label={{
            text: t("marketing"),
            tag: "p",
          }}
          name="marketing"
          value="true"
          defaultChecked={state?.marketing}
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          text={t("button")}
          size="2xl"
          bgColor="tertiaryPrimarySecondary"
          rounding="full"
          textColor="white"
        />
      </div>
    </AdminNewListingFormWrapper>
  );
}
