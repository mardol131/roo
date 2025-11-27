"use client";

import Button from "@/app/_components/atoms/Button";

import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import React, { FormEvent, useCallback, useState } from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import { useTranslations } from "next-intl";
import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormSelectInput } from "@/app/_components/molecules/inputs/FormSelectInput";

type Props = {};

export default function locationStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const [addressIsSameAsInvoicing, setAddressIsSameAsInvoicing] =
    useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.newListing);
  const t = useTranslations(
    state.listingData.type
      ? `admin.company.newListing.steps.location.${state.listingData.type}`
      : "admin.company.newListing.steps.location.place"
  );

  function checkboxOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked);
    setAddressIsSameAsInvoicing(e.target.checked);
  }

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = formDataToObject(new FormData(e.currentTarget));
    console.log(data);

    if (data.sameAddress) {
      dispatch(
        newListing.actions.saveLocation({
          street: state?.companyData?.street,
          city: state?.companyData?.city,
          cityCode: state?.companyData?.cityCode,
          country: state?.companyData?.country,
          adressSameAsCompany: true,
        })
      );
    } else {
      dispatch(
        newListing.actions.saveLocation({
          street: data.street,
          city: data.city,
          cityCode: data.cityCode,
          country: data.country,
          adressSameAsCompany: false,
        })
      );
    }

    changeStepHandler("summary");
  }, []);

  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading={t("title")}
      subheading={t("subtitle")}
    >
      <div className="w-full flex flex-col gap-5 items-center justify-center max-w-150">
        <FormCheckboxInput
          label={{ text: "Adresa je stejná jako fakturační", tag: "span" }}
          name="sameAddress"
          value="true"
          onChange={checkboxOnChangeHandler}
          isChecked={addressIsSameAsInvoicing}
          defaultChecked={state?.listingData?.location?.adressSameAsCompany}
        />
        <AdminFormPartWrapper disabled={addressIsSameAsInvoicing}>
          <FormTextInput
            type="text"
            spanTwo={true}
            name="street"
            label={t("inputs.street.label")}
            placeholder={t("inputs.street.placeholder")}
            disabled={addressIsSameAsInvoicing}
            defaultValue={state?.listingData.location.street}
            required={!addressIsSameAsInvoicing}
          />
          <FormTextInput
            type="text"
            name="city"
            label={t("inputs.city.label")}
            placeholder={t("inputs.city.placeholder")}
            disabled={addressIsSameAsInvoicing}
            defaultValue={state?.listingData.location.city}
            required={!addressIsSameAsInvoicing}
          />
          <FormTextInput
            type="text"
            name="cityCode"
            label={t("inputs.cityCode.label")}
            placeholder={t("inputs.cityCode.placeholder")}
            disabled={addressIsSameAsInvoicing}
            defaultValue={state?.listingData.location.cityCode}
            required={!addressIsSameAsInvoicing}
          />
          <FormSelectInput
            spanTwo={true}
            value="country"
            optionsGroup="country"
            label={t("inputs.country.label")}
            placeholder={t("inputs.country.placeholder")}
            disabled={addressIsSameAsInvoicing}
            defaultValue={state?.listingData.location.country}
            required={!addressIsSameAsInvoicing}
          />
        </AdminFormPartWrapper>
      </div>
      <Button
        text="Pokračovat"
        type="submit"
        bgColor="secondaryPrimary"
        size="xl"
        textColor="white"
        rounding="full"
      />
    </AdminNewListingFormWrapper>
  );
}
