"use client";

import Button from "@/app/_components/atoms/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormEvent, useCallback, useMemo } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import { SpecTag, specTagMockData } from "./NewListingSpecificationStep";

type Props = {};

export default function NewListingSummary({}: Props) {
  const { changeStepHandler } = useNewListingSteps();

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
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <div className="col-span-2 flex items-center gap-2 justify-center">
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
          />
        </div>
        <TextBlock label="Název:" text="Společnost s ručením omezeným sro" />
        <TextBlock label="IČO:" text="59822965459" />
        <TextBlock label="DIČ:" text="59822965459" />
        <TextBlock label="Ulice:" text="59822965459" />
        <TextBlock label="Město:" text="59822965459" />
        <TextBlock label="PSČ:" text="59822965459" />
        <TextBlock label="Země:" text="59822965459" />
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
          />
        </div>
        <TextBlock label="Jméno:" text="Společnost s ručením omezeným sro" />
        <TextBlock label="Příjmení:" text="59822965459" />
        <TextBlock label="Telefon:" text="59822965459" />
        <TextBlock label="Email:" text="59822965459" />
      </div>
      <div
        className={`bg-white  shadow-lg/5 animate-popup border w-full max-w-200 border-borderLight rounded-medium p-4 gap-3 grid grid-cols-2`}
      >
        <div className="col-span-2 flex items-center gap-2 justify-center">
          <Text
            text="Co nabízíš"
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
          />
        </div>
        <TextBlock label="Jméno služby:" text="Mlýn Davídkov" spanTwo />
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
            {specTagMockData.map((item) => {
              return (
                <SpecTag
                  key={item.name + item.value}
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
          />
        </div>
        <TextBlock label="Ulice:" text="Společnost s ručením omezeným sro" />
        <TextBlock label="Město:" text="59822965459" />
        <TextBlock label="PSČ:" text="59822965459" />
        <TextBlock label="Země:" text="59822965459" />
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
