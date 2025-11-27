"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormEvent, useCallback, useMemo } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import { SpecTag, specTagMockData } from "./NewListingSpecificationStep";
import { useAppSelector } from "@/app/_redux/hooks";
import { useTranslations } from "next-intl";
import Tag from "@/app/_components/molecules/Tag";

type Props = {};

export default function NewListingSummary({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const state = useAppSelector((state) => state.newListing);
  const tCountry = useTranslations("countries");

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStepHandler("listingSpecification");
  }, []);

  function TextBlock({
    label,
    text,
    spanTwo,
  }: {
    label: string;
    text?: string;
    spanTwo?: boolean;
  }) {
    return (
      <div
        className={`${spanTwo && "col-span-2"} h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr]  w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
      >
        <Text
          text={label}
          tag="h4"
          color="primary"
          size="bodyMd"
          fontWeight="semibold"
        />
        {text && (
          <Text
            text={text}
            tag="h4"
            color="black"
            size="bodyMd"
            fontWeight="semibold"
          />
        )}
      </div>
    );
  }

  function SectionHeading({
    text,
    onClick,
  }: {
    text: string;
    onClick: () => void;
  }) {
    return (
      <div className="col-span-2 border-b border-borderLight pb-2 w-full flex items-center gap-2 justify-between max-md:justify-start">
        <Text
          text={text}
          tag="h3"
          size="headingSm"
          className=" text-center"
          fontWeight="semibold"
        />
        <Button
          text="Upravit"
          size="sm"
          bgColor="primary"
          rounding="full"
          textColor="white"
          onClick={onClick}
        />
      </div>
    );
  }

  return (
    <AdminNewListingFormWrapper
      onSubmit={onSubmitHandler}
      heading={"Paráda! Základ je hotový!"}
      subheading="Níže najdeš základní sourhn informací, které jsi nám o službě poskytl/a. <br/>Pokud bys chtěl/a ještě něco upravit, u každé sekce klikni na tlačítko upravit, které tě vrátí zpět do formuláře."
    >
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 md:grid flex flex-col grid-cols-2`}
      >
        <SectionHeading
          text="Fakturační údaje"
          onClick={() => changeStepHandler("companyData")}
        />
        <TextBlock label="Název:" text={state.companyData.companyName} />
        <TextBlock label="IČO:" text={state.companyData.ico} />
        <TextBlock label="DIČ:" text={state.companyData.dic || ""} />
        <TextBlock label="Ulice:" text={state.companyData.street} />
        <TextBlock label="Město:" text={state.companyData.city} />
        <TextBlock label="PSČ:" text={state.companyData.cityCode} />
        <TextBlock
          label="Země:"
          text={tCountry(state.listingData.location.country || "cz")}
        />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <SectionHeading
          text="Kontaktní osoba"
          onClick={() => changeStepHandler("companyData")}
        />

        <TextBlock
          label="Jméno:"
          text={state.companyData.contactPerson.firstName}
        />
        <TextBlock
          label="Příjmení:"
          text={state.companyData.contactPerson.lastName}
        />
        <TextBlock
          label="Telefon:"
          text={state.companyData.contactPerson.phone}
        />
        <TextBlock
          label="Email:"
          text={state.companyData.contactPerson.email}
        />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 md:grid flex flex-col grid-cols-2`}
      >
        <SectionHeading
          text="Jméno tvojí služby"
          onClick={() => changeStepHandler("listingName")}
        />
        <TextBlock
          label="Jméno služby:"
          text={state.listingData.name}
          spanTwo
        />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <SectionHeading
          text="Specifikace služby"
          onClick={() => changeStepHandler("listingSpecification")}
        />
        <div
          className={`col-span-2 h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr] w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
        >
          <Text
            text="Specifikace:"
            tag="h4"
            color="primary"
            size="bodyMd"
            fontWeight="semibold"
          />
          <div className="flex gap-2 flex-wrap">
            {state.listingData.specifications.map((item) => {
              console.log(item);
              return (
                <Tag
                  key={item.label + item.id + item.id}
                  text={item.label}
                  color="white"
                  disableIcon
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <SectionHeading
          text="Sídlo tvojí služby"
          onClick={() => changeStepHandler("listingLocation")}
        />
        <TextBlock label="Ulice:" text={state.listingData.location.street} />
        <TextBlock label="Město:" text={state.listingData.location.city} />
        <TextBlock label="PSČ:" text={state.listingData.location.cityCode} />
        <TextBlock
          label="Země:"
          text={tCountry(state.listingData.location.country || "cz")}
        />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <SectionHeading
          text="Obsluhovaná oblast"
          onClick={() => changeStepHandler("listingSpecification")}
        />
        <div
          className={`col-span-2 h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr] w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
        >
          <Text
            text="Země:"
            tag="h4"
            color="primary"
            size="bodyMd"
            fontWeight="semibold"
          />
          <div className="flex gap-2 flex-wrap">
            {state.listingData.location.serviceAreas?.country.map((item) => {
              console.log(item);
              return (
                <Tag
                  key={item.label + item.id + item.id}
                  text={item.label}
                  color="white"
                  disableIcon
                />
              );
            })}
          </div>
        </div>
        <div
          className={`col-span-2 h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr] w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
        >
          <Text
            text="Kraje:"
            tag="h4"
            color="primary"
            size="bodyMd"
            fontWeight="semibold"
          />
          <div className="flex gap-2 flex-wrap">
            {state.listingData.location.serviceAreas?.regions.map((item) => {
              console.log(item);
              return (
                <Tag
                  key={item.label + item.id + item.id}
                  text={item.label}
                  color="white"
                  disableIcon
                />
              );
            })}
          </div>
        </div>
        <div
          className={`col-span-2 h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr] w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
        >
          <Text
            text="Okresy:"
            tag="h4"
            color="primary"
            size="bodyMd"
            fontWeight="semibold"
          />
          <div className="flex gap-2 flex-wrap">
            {state.listingData.location.serviceAreas?.districts.map((item) => {
              console.log(item);
              return (
                <Tag
                  key={item.label + item.id + item.id}
                  text={item.label}
                  color="white"
                  disableIcon
                />
              );
            })}
          </div>
        </div>
        <div
          className={`col-span-2 h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr] w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
        >
          <Text
            text="Města:"
            tag="h4"
            color="primary"
            size="bodyMd"
            fontWeight="semibold"
          />
          <div className="flex gap-2 flex-wrap">
            {state.listingData.location.serviceAreas?.cities.map((item) => {
              console.log(item);
              return (
                <Tag
                  key={item.label + item.id + item.id}
                  text={item.label}
                  color="white"
                  disableIcon
                />
              );
            })}
          </div>
        </div>
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
