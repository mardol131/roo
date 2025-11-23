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

type Props = {};

export default function NewListingSummary({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const state = useAppSelector((state) => state.newListing);

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
    text: string;
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
        <Text
          text={text}
          tag="h4"
          color="black"
          size="bodyMd"
          fontWeight="semibold"
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
        <div className="col-span-2 flex items-center gap-2 justify-center max-md:justify-start">
          <Text
            text="Fakturační údaje"
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
            onClick={() => {
              changeStepHandler("companyData");
            }}
          />
        </div>
        <TextBlock label="Název:" text={state.companyData.companyName} />
        <TextBlock label="IČO:" text={state.companyData.ico} />
        <TextBlock label="DIČ:" text={state.companyData.dic || ""} />
        <TextBlock label="Ulice:" text={state.companyData.street} />
        <TextBlock label="Město:" text={state.companyData.city} />
        <TextBlock label="PSČ:" text={state.companyData.cityCode} />
        <TextBlock label="Země:" text={state.companyData.country} />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <div className="col-span-2 flex items-center gap-2 justify-center">
          <Text
            text="Kontaktní osoba"
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
            onClick={() => {
              changeStepHandler("companyData");
            }}
          />
        </div>
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
        <div className=" w-full col-span-2 flex items-center gap-2 md:justify-center justify-start">
          <Text
            text="Jméno tvojí služby"
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
            onClick={() => {
              changeStepHandler("listingName");
            }}
          />
        </div>
        <TextBlock
          label="Jméno služby:"
          text={state.listingData.listingName}
          spanTwo
        />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <div className="col-span-2 flex items-center gap-2 justify-center max-md:justify-start">
          <Text
            text="Specifikace služby"
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
            onClick={() => {
              changeStepHandler("listingSpecification");
            }}
          />
        </div>
        <div
          className={`col-span-2 h-full border-b border-borderLight p-2 grid grid-cols-[1fr_2fr] w-full w-full self-center justify-self-center gap-5 text-start justify-items-start items-center`}
        >
          <Text
            text="Specifikace:"
            tag="h4"
            color="primary"
            size="bodyMd"
            fontWeight="semibold"
          />
          <div className="flex gap-2 flex-wrap">
            {state.listingData.listingSpecification.map((item) => {
              return (
                <SpecTag
                  key={item.label + item.value + item.id}
                  data={item}
                  onClick={() => {}}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <div className="col-span-2 flex items-center gap-2 justify-center">
          <Text
            text="Kde sídlíš"
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
            onClick={() => {
              changeStepHandler("listingLocation");
            }}
          />
        </div>
        <TextBlock
          label="Ulice:"
          text={state.listingData.newListingLocation.street}
        />
        <TextBlock
          label="Město:"
          text={state.listingData.newListingLocation.city}
        />
        <TextBlock
          label="PSČ:"
          text={state.listingData.newListingLocation.cityCode}
        />
        <TextBlock
          label="Země:"
          text={state.listingData.newListingLocation.country}
        />
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
