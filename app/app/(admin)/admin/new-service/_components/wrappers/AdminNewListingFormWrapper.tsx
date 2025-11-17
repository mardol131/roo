import Text from "@/app/_components/atoms/Text";
import { useAppSelector } from "@/app/_redux/hooks";
import { NewListingStepsArray } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { FormEvent, Fragment, ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import { NewListingStepBar } from "../NewListingStepBar";

type Props = {
  heading: string;
  subheading?: string;
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export default function AdminNewListingFormWrapper({
  heading,
  subheading,
  children,
  onSubmit,
}: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-10">
      <div className="flex w-full flex-col items-center text-center gap-3">
        <NewListingStepBar />
        <Text
          tag="h4"
          size="headingMd"
          text={heading}
          color="black"
          className="mt-8 font-semibold"
        />
        {subheading && (
          <Text color="black" tag="p" size="bodyMd" text={subheading} />
        )}
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 items-center w-full"
      >
        {children}
      </form>
    </div>
  );
}
