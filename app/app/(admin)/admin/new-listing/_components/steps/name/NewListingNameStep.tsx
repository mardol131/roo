"use client";

import Button from "@/app/_components/atoms/button/Button";

import AdminFormPartWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormPartWrapper";
import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import Text from "@/app/_components/atoms/Text";
import { FormTextInput } from "@/app/_components/molecules/inputs/FormTextInput";
import { FormEvent, useCallback } from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { formDataToObject } from "@roo/shared/src/functions/data-manipulation/formDataToObject";
import { useTranslations } from "next-intl";

type Props = {};

export default function NewListingNameStep({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.newListing.listingData.type);
  const t = useTranslations(
    state
      ? `admin.company.newListing.steps.listingName.${state}`
      : "admin.company.newListing.steps.listingName.gastro"
  );

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = formDataToObject(new FormData(e.currentTarget));
    dispatch(newListing.actions.saveName(data.listingName));
    changeStepHandler("listingSpecification");
  }, []);

  return (
    <AdminNewListingFormWrapper onSubmit={onSubmitHandler} heading={t("title")}>
      <AdminFormPartWrapper title={t("subtitle")}>
        <FormTextInput
          label={t("input.label")}
          type="text"
          placeholder={t("input.placeholder")}
          name="listingName"
          spanTwo
          required
        />
      </AdminFormPartWrapper>
      <div className="flex gap-5">
        <Button
          text={t("button")}
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
