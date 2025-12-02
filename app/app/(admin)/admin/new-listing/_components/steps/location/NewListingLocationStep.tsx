"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import {
  getAllCountries,
  getAllDistricts,
  getAllMunicipalities,
  getAllRegions,
} from "@/app/_api/cms";
import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { FormMultiSelectInput } from "@/app/_components/molecules/inputs/FormMultiSelectInput";
import { FormSelectInput } from "@/app/_components/molecules/inputs/FormSelectInput";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  Category,
  newListing,
} from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import debounce from "@roo/shared/src/functions/debounce";
import { useTranslations } from "next-intl";
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";

type Props = {};

export default function NewListingLocationStep({}: Props) {
  const state = useAppSelector((state) => state.newListing);

  const t = useTranslations(
    state.listingData.type
      ? `admin.company.newListing.steps.location.${state.listingData.type}`
      : "admin.company.newListing.steps.location.gastro"
  );
  const [step, setStep] = useState<"oneLocation" | "multipleLocations">(
    "oneLocation"
  );
  const dispatch = useAppDispatch();

  // States and hooks
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
  const [countriesList, setCountriesList] = useState<Category[]>([]);

  const [selectedRegions, setSelectedRegions] = useState<Category[]>(
    state.listingData.location.serviceAreas?.regions || []
  );
  const [regionsList, setRegionsList] = useState<Category[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<Category[]>(
    state.listingData.location.serviceAreas?.districts || []
  );
  const [districtsList, setDistrictsList] = useState<Category[]>([]);

  const [selectedMunicipalities, setSelectedMunicipalities] = useState<
    Category[]
  >(state.listingData.location.serviceAreas?.municipalities || []);
  const [municipalitiesList, setMunicipalitiesList] = useState<Category[]>([]);

  const [selectedMunicipalityOne, setSelectedMunicipalityOne] = useState<
    Category | undefined
  >(state.listingData.location.municipality);

  const [selectedCountryOne, setSelectedCountryOne] = useState<
    Category | undefined
  >(state.listingData.location.country);

  function checkboxOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
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
              municipality: state?.companyData?.municipality,
              municipalityCode: state?.companyData?.municipalityCode,
              country: state?.companyData?.country,
              adressSameAsCompany: true,
              multipleLocations: multipleLocations,
              serviceAreas: state?.listingData.location.serviceAreas,
            })
          );
        } else {
          dispatch(
            newListing.actions.saveLocation({
              street: data.street,
              municipality: selectedMunicipalityOne,
              municipalityCode: data.municipalityCode,
              country: selectedCountryOne,
              adressSameAsCompany: false,
              multipleLocations: multipleLocations,
              serviceAreas: state?.listingData.location.serviceAreas,
            })
          );
        }
      }

      if (step === "multipleLocations") {
        dispatch(
          newListing.actions.saveLocation({
            street: state?.companyData?.street,
            municipality: state?.companyData?.municipality,
            municipalityCode: state?.companyData?.municipalityCode,
            country: state?.companyData?.country,
            adressSameAsCompany:
              state?.listingData?.location?.adressSameAsCompany,
            multipleLocations: state?.listingData?.location?.multipleLocations,
            serviceAreas: multipleLocations
              ? {
                  country: selectedCountries,
                  regions: selectedRegions,
                  districts: selectedDistricts,
                  municipalities: selectedMunicipalities,
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
      selectedMunicipalities,
      state?.companyData,
      dispatch,
      changeStepHandler,
    ]
  );

  const onRegionSearchChangeDebounced = useMemo(() => {
    const onRegionSearchChange = async (searchQuery: string) => {
      try {
        const response = await getAllRegions({ limit: 10, searchQuery });
        setRegionsList(
          response.docs.map((region) => ({
            label: region.name,
            slug: region.slug,
            id: region.id,
          }))
        );
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };
    return debounce(onRegionSearchChange, 500);
  }, []);

  const onCountrySearchChangeDebounce = useMemo(() => {
    const onCountrySearchChange = async (searchQuery: string) => {
      try {
        const response = await getAllCountries({ limit: 10, searchQuery });
        setCountriesList(
          response.docs.map((country) => ({
            label: country.name,
            slug: country.slug,
            id: country.id,
          }))
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    return debounce(onCountrySearchChange, 500);
  }, []);

  const onDistrictSearchChangeDebounced = useMemo(() => {
    const onDistrictSearchChange = async (searchQuery: string) => {
      try {
        const response = await getAllDistricts({ limit: 10, searchQuery });
        setDistrictsList(
          response.docs.map((district) => ({
            label: district.name,
            slug: district.slug,
            id: district.id,
          }))
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    return debounce(onDistrictSearchChange, 500);
  }, []);

  const onMunicipalitySearchChangeDebounced = useMemo(() => {
    const onMunicipalitySearchChange = async (searchQuery: string) => {
      try {
        const response = await getAllMunicipalities({ limit: 10, searchQuery });
        setMunicipalitiesList(
          response.docs.map((municipality) => ({
            label: municipality.name,
            slug: municipality.slug,
            id: municipality.id,
          }))
        );
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    return debounce(onMunicipalitySearchChange, 500);
  }, []);

  const multipleLocationsRequired = useMemo(() => {
    return (
      selectedCountries.length === 0 &&
      selectedRegions.length === 0 &&
      selectedDistricts.length === 0 &&
      selectedMunicipalities.length === 0
    );
  }, [
    selectedCountries,
    selectedRegions,
    selectedDistricts,
    selectedMunicipalities,
  ]);

  useEffect(() => {}, []);

  if (step === "multipleLocations") {
    return (
      <AdminNewListingFormWrapper
        onSubmit={onSubmitHandler}
        heading={t("stepTwo.title")}
        subheading={t("stepTwo.subtitle")}
      >
        <div className="w-full relative flex flex-col gap-5 items-stretch justify-center max-w-150">
          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.country.label")}
            name="serviceCountries"
            placeholder={t("stepTwo.inputs.country.placeholder")}
            options={countriesList}
            defaultValue={selectedCountries}
            onChangeAction={setSelectedCountries}
            onSearchChangeAction={onCountrySearchChangeDebounce}
            onSearchModalCloseAction={() => {
              setCountriesList(selectedCountries);
            }}
            required={multipleLocationsRequired}
          />

          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.region.label")}
            name="serviceRegions"
            placeholder={t("stepTwo.inputs.region.placeholder")}
            options={regionsList}
            defaultValue={selectedRegions}
            onSearchChangeAction={onRegionSearchChangeDebounced}
            onChangeAction={setSelectedRegions}
            onSearchModalCloseAction={() => {
              setRegionsList(selectedRegions);
            }}
            required={multipleLocationsRequired}
          />

          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.district.label")}
            name="serviceDistricts"
            placeholder={t("stepTwo.inputs.district.placeholder")}
            options={districtsList}
            defaultValue={selectedDistricts}
            onSearchChangeAction={onDistrictSearchChangeDebounced}
            onChangeAction={setSelectedDistricts}
            onSearchModalCloseAction={() => {
              setDistrictsList(selectedDistricts);
            }}
            required={multipleLocationsRequired}
          />

          <FormMultiSelectInput
            spanTwo={true}
            label={t("stepTwo.inputs.municipality.label")}
            name="serviceCities"
            placeholder={t("stepTwo.inputs.municipality.placeholder")}
            options={municipalitiesList}
            defaultValue={selectedMunicipalities}
            onChangeAction={setSelectedMunicipalities}
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
              <FormSelectInput
                name="municipality"
                label={t("inputs.municipality.label")}
                placeholder={t("inputs.municipality.placeholder")}
                disabled={addressIsSameAsInvoicing}
                defaultValue={state?.listingData.location.municipality}
                required={!addressIsSameAsInvoicing}
                options={municipalitiesList}
                onChangeAction={setSelectedMunicipalityOne}
                onSearchChangeAction={onMunicipalitySearchChangeDebounced}
                onSearchModalCloseAction={() => {
                  setMunicipalitiesList(
                    selectedMunicipalityOne ? [selectedMunicipalityOne] : []
                  );
                }}
              />
              <FormTextInput
                type="text"
                name="municipalityCode"
                label={t("inputs.municipalityCode.label")}
                placeholder={t("inputs.municipalityCode.placeholder")}
                disabled={addressIsSameAsInvoicing}
                defaultValue={state?.listingData.location.municipalityCode}
                required={!addressIsSameAsInvoicing}
              />
              <FormSelectInput
                spanTwo={true}
                name="country"
                label={t("inputs.country.label")}
                placeholder={t("inputs.country.placeholder")}
                disabled={addressIsSameAsInvoicing}
                defaultValue={state?.listingData.location.country}
                required={!addressIsSameAsInvoicing}
                options={countriesList}
                onChangeAction={setSelectedCountryOne}
                onSearchChangeAction={onCountrySearchChangeDebounce}
                onSearchModalCloseAction={() => {
                  setCountriesList(
                    selectedCountryOne ? [selectedCountryOne] : []
                  );
                }}
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
