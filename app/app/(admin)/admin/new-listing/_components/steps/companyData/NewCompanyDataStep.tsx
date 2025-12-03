"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";

import Button from "@/app/_components/atoms/button/Button";
import Text from "@/app/_components/atoms/text/Text";

import { FormCheckboxInput } from "@/app/_components/molecules/inputs/FormCheckboxInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import {
  Category,
  newListing,
} from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import { useTranslations } from "next-intl";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import AdminNewListingFormWrapper from "../../wrappers/AdminNewListingFormWrapper";
import ContactPersonFormPart from "./ContactPersonFormPart";
import { getAllCountries, getAllMunicipalities } from "@/app/_api/cms";
import debounce from "@roo/shared/src/functions/debounce";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormSelectInput } from "@/app/_components/molecules/inputs/FormSelectInput";
import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import { set } from "date-fns";

type Props = {};

export default function NewCompanyDataStep({}: Props) {
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.newListing.companyData);

  const [countryOptions, setCountryOptions] = useState<Category[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Category | undefined>(
    state.country || undefined
  );
  const [municipalityOptions, setMunicipalityOptions] = useState<Category[]>(
    []
  );
  const [selectedMunicipality, setSelectedMunicipality] = useState<
    Category | undefined
  >(state.municipality || undefined);

  const onCountrySearchChangeDebounce = useMemo(() => {
    const onCountrySearchChange = async (searchQuery: string) => {
      try {
        const response = await getAllCountries({ limit: 10, searchQuery });
        setCountryOptions(
          response.docs.map((country) => ({
            label: country.name,
            slug: country.slug,
            id: country.id,
          }))
        );
        console.log(response);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    return debounce(onCountrySearchChange, 500);
  }, []);

  const onMunicipalitySearchChangeDebounced = useMemo(() => {
    const onMunicipalitySearchChange = async (searchQuery: string) => {
      try {
        const response = await getAllMunicipalities({ limit: 10, searchQuery });
        setMunicipalityOptions(
          response.docs.map((municipality) => ({
            label: municipality.name,
            slug: municipality.slug,
            id: municipality.id,
          }))
        );
        console.log(response);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    return debounce(onMunicipalitySearchChange, 500);
  }, []);

  const t = useTranslations("admin.company.newListing.steps.companyData");

  const { changeStepHandler } = useNewListingSteps();

  const onSubmitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = formDataToObject(new FormData(e.currentTarget));
      setSuccess(true);
      dispatch(
        newListing.actions.saveCompanyData({
          companyName: data.companyName,
          ico: data.ico,
          dic: data.dic,
          street: data.street,
          municipality: selectedMunicipality,
          municipalityCode: data.municipalityCode,
          country: selectedCountry,
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
    },
    [dispatch]
  );

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
        <AdminFormPartWrapper title={t("leftPart.title")}>
          <FormTextInput
            defaultValue={state.companyName}
            label={t("leftPart.inputs.companyName.label")}
            type="text"
            name="companyName"
            placeholder={t("leftPart.inputs.companyName.placeholder")}
            spanTwo
            required
          />
          <FormTextInput
            defaultValue={state.ico}
            label={t("leftPart.inputs.ico.label")}
            type="number"
            name="ico"
            placeholder={t("leftPart.inputs.ico.placeholder")}
            required
            max={8}
          />
          <FormTextInput
            defaultValue={state.dic}
            label={t("leftPart.inputs.dic.label")}
            type="text"
            name="dic"
            placeholder={t("leftPart.inputs.dic.placeholder")}
            max={12}
          />
          <FormTextInput
            defaultValue={state.street}
            label={t("leftPart.inputs.street.label")}
            type="text"
            name="street"
            placeholder={t("leftPart.inputs.street.placeholder")}
            required
          />
          <FormSelectInput
            label={t("leftPart.inputs.municipality.label")}
            name="municipality"
            options={municipalityOptions}
            placeholder={t("leftPart.inputs.municipality.placeholder")}
            onChangeAction={setSelectedMunicipality}
            onSearchChangeAction={onMunicipalitySearchChangeDebounced}
            onSearchModalCloseAction={() => {
              setMunicipalityOptions(
                selectedMunicipality ? [selectedMunicipality] : []
              );
            }}
            required
            defaultValue={selectedMunicipality}
          />
          <FormTextInput
            label={t("leftPart.inputs.municipalityCode.label")}
            type="number"
            name="municipalityCode"
            placeholder={t("leftPart.inputs.municipalityCode.placeholder")}
            max={5}
            required
            defaultValue={state.municipalityCode}
          />
          <FormSelectInput
            blockType="formselectinput"
            label={t("leftPart.inputs.country.label")}
            placeholder={t("leftPart.inputs.country.placeholder")}
            name="country"
            options={countryOptions}
            onChangeAction={setSelectedCountry}
            onSearchChangeAction={onCountrySearchChangeDebounce}
            onSearchModalCloseAction={() => {
              setCountryOptions(selectedCountry ? [selectedCountry] : []);
            }}
            required
            defaultValue={selectedCountry}
          />
        </AdminFormPartWrapper>
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
          defaultChecked={state?.legal?.gdpr}
        />
        <FormCheckboxInput
          label={{
            text: t("marketing"),
            tag: "p",
          }}
          name="marketing"
          value="true"
          defaultChecked={state?.legal?.marketing}
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
