"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { FormMultiSelectInput } from "@/app/_components/molecules/inputs/FormMultiSelectInput";
import { FormSelectInput } from "@/app/_components/molecules/inputs/FormSelectInput";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import {
  cityOptions,
  countryOptions,
  districtOptions,
  regionOptions,
} from "@/app/_components/molecules/inputs/locationData";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  Category,
  newListing,
} from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import { useTranslations } from "next-intl";
import React, { FormEvent, useCallback, useMemo, useState } from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";

type Props = {};

export default function NewListingLocationStep({}: Props) {
  const state = useAppSelector((state) => state.newListing);
  const { changeStepHandler } = useNewListingSteps();
  const [addressIsSameAsInvoicing, setAddressIsSameAsInvoicing] = useState(
    state.listingData.location.adressSameAsCompany
  );
  const [multipleLocations, setMultipleLocations] = useState(
    state.listingData.location.multipleLocations
  );
  const [selectedCountries, setSelectedCountries] = useState<Category[]>(
    state.listingData.location.serviceAreas?.country || []
  );
  const [selectedRegions, setSelectedRegions] = useState<Category[]>(
    state.listingData.location.serviceAreas?.regions || []
  );
  const [selectedDistricts, setSelectedDistricts] = useState<Category[]>(
    state.listingData.location.serviceAreas?.districts || []
  );
  const [selectedCities, setSelectedCities] = useState<Category[]>(
    state.listingData.location.serviceAreas?.cities || []
  );
  const [step, setStep] = useState<"oneLocation" | "multipleLocations">(
    "oneLocation"
  );
  const dispatch = useAppDispatch();
  const t = useTranslations(
    state.listingData.type
      ? `admin.company.newListing.steps.location.${state.listingData.type}`
      : "admin.company.newListing.steps.location.place"
  );

  function checkboxOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked);
    setAddressIsSameAsInvoicing(e.target.checked);
  }

  const onSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (step === "oneLocation") {
        const data = formDataToObject(new FormData(e.currentTarget));
        if (data.sameAddress) {
          dispatch(
            newListing.actions.saveLocation({
              street: state?.companyData?.street,
              city: state?.companyData?.city,
              cityCode: state?.companyData?.cityCode,
              country: state?.companyData?.country,
              adressSameAsCompany: true,
              multipleLocations: multipleLocations,
              serviceAreas: undefined,
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
              multipleLocations: multipleLocations,
              serviceAreas: undefined,
            })
          );
        }
      }

      if (step === "multipleLocations") {
        dispatch(
          newListing.actions.saveLocation({
            street: state?.companyData?.street,
            city: state?.companyData?.city,
            cityCode: state?.companyData?.cityCode,
            country: state?.companyData?.country,
            adressSameAsCompany:
              state?.listingData?.location?.adressSameAsCompany,
            multipleLocations: state?.listingData?.location?.multipleLocations,
            serviceAreas: multipleLocations
              ? {
                  country: selectedCountries,
                  regions: selectedRegions,
                  districts: selectedDistricts,
                  cities: selectedCities,
                }
              : undefined,
          })
        );
      }

      if (multipleLocations && step === "oneLocation") {
        setStep("multipleLocations");
        return;
      }

      changeStepHandler("summary");
    },
    [
      multipleLocations,
      selectedCountries,
      selectedRegions,
      selectedDistricts,
      selectedCities,
      state?.companyData,
      dispatch,
      changeStepHandler,
    ]
  );

  const multipleLocationsRequired = useMemo(() => {
    return (
      selectedCountries.length === 0 &&
      selectedRegions.length === 0 &&
      selectedDistricts.length === 0 &&
      selectedCities.length === 0
    );
  }, [selectedCountries, selectedRegions, selectedDistricts, selectedCities]);

  if (step === "multipleLocations") {
    return (
      <AdminNewListingFormWrapper
        onSubmit={onSubmitHandler}
        heading={t("stepTwo.title")}
        subheading={t("stepTwo.subtitle")}
      >
        <div className="w-full flex flex-col gap-5 items-stretch justify-center max-w-150">
          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.country.label")}
            name="serviceCountries"
            placeholder={t("stepTwo.inputs.country.placeholder")}
            options={countryOptions}
            defaultValue={selectedCountries}
            onChangeAction={setSelectedCountries}
            required={multipleLocationsRequired}
          />

          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.region.label")}
            name="serviceRegions"
            placeholder={t("stepTwo.inputs.region.placeholder")}
            options={regionOptions}
            defaultValue={selectedRegions}
            onChangeAction={setSelectedRegions}
            required={multipleLocationsRequired}
          />

          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.district.label")}
            name="serviceDistricts"
            placeholder={t("stepTwo.inputs.district.placeholder")}
            options={districtOptions}
            defaultValue={selectedDistricts}
            onChangeAction={setSelectedDistricts}
            required={multipleLocationsRequired}
          />

          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.city.label")}
            name="serviceCities"
            placeholder={t("stepTwo.inputs.city.placeholder")}
            options={cityOptions}
            defaultValue={selectedCities}
            onChangeAction={setSelectedCities}
            required={multipleLocationsRequired}
          />
        </div>
        <div className="flex gap-5">
          <Button
            text="Zpět"
            type="button"
            onClick={() => {
              setStep("oneLocation");
            }}
            bgColor="secondaryPrimary"
            size="xl"
            textColor="white"
            rounding="full"
          />
          <Button
            text="Pokračovat"
            type="submit"
            bgColor="secondaryPrimary"
            size="xl"
            textColor="white"
            rounding="full"
          />
        </div>
      </AdminNewListingFormWrapper>
    );
  } else {
    return (
      <AdminNewListingFormWrapper
        onSubmit={onSubmitHandler}
        heading={t("stepOne.title")}
        subheading={t("stepOne.subtitle")}
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center max-w-150">
          <>
            <FormCheckboxInput
              label={{ text: t("inputs.sameAsInvoicing"), tag: "span" }}
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
            {state.listingData.type !== "place" && (
              <FormCheckboxInput
                label={{
                  text: t("inputs.serviceArea"),
                  tag: "span",
                }}
                name="multipleLocations"
                value="true"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setMultipleLocations(e.target.checked);
                }}
                isChecked={multipleLocations}
                defaultChecked={state?.listingData?.location?.multipleLocations}
                className="py-5"
              />
            )}
          </>

          {/* Sekce pro výběr více lokalit */}
        </div>
        <div className="flex gap-5">
          <Button
            text={t("buttonBack")}
            type="button"
            onClick={() => {
              changeStepHandler("listingSpecification");
            }}
            bgColor="secondaryPrimary"
            size="xl"
            textColor="white"
            rounding="full"
          />
          <Button
            text={t("buttonContinue")}
            type="submit"
            bgColor="secondaryPrimary"
            size="xl"
            textColor="white"
            rounding="full"
          />
        </div>
      </AdminNewListingFormWrapper>
    );
  }
}
