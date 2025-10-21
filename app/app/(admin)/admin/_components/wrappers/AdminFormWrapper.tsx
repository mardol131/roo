import { useAppSelector } from "@/app/_redux/hooks";
import { NewListingStepsArray } from "@/app/_redux/slices/newListingSlice";
import React, { Fragment, ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNewListingSteps } from "../../new-service/_hooks/useNewListingSteps";
import Text from "@/app/_global/atoms/Text";

type Props = {
  heading: string;
  subheading?: string;
  children: ReactNode;
};

function GenerateStepNumbers() {
  const { step: currentStep } = useAppSelector((state) => state.newListing);
  const { changeStepHandler } = useNewListingSteps();

  const stepsPassed = NewListingStepsArray.findIndex(
    (step) => step === currentStep
  );

  function Divider(i: number) {
    if (i > 0) {
      if (i > stepsPassed) {
        return (
          <div key={i / 1563} className="bg-zinc-300 h-[2px] grow-[1]"></div>
        );
      } else {
        return (
          <div key={i / 84956} className="bg-primary h-[2px] grow-[1]"></div>
        );
      }
    }
  }

  return NewListingStepsArray.map((step, i) => {
    return (
      <Fragment key={i / 48929}>
        {Divider(i)}
        <div>
          {i < stepsPassed ? (
            <>
              {i < stepsPassed && (
                <>
                  <button
                    onClick={() => {
                      changeStepHandler(step);
                    }}
                    className="border-2 cursor-pointer text-white bg-primary font-bold border-primary w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <FaCheck className="text-2xl" />
                  </button>
                </>
              )}
            </>
          ) : step === currentStep ? (
            <button className="border-2 text-primary font-bold border-primary w-10 h-10 rounded-full flex items-center justify-center">
              {i + 1}
            </button>
          ) : (
            <button className="border-2 text-zinc-300 font-bold border-zinc-300 w-10 h-10 rounded-full flex items-center justify-center">
              {i + 1}
            </button>
          )}
        </div>
      </Fragment>
    );
  });
}

export default function AdminFormWrapper({
  heading,
  subheading,
  children,
}: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-10">
      <div className="flex w-full flex-col items-center text-center gap-3">
        <div className="w-full text-lg bg-white flex justify-between items-center rounded-medium shadow-lg shadow-black/5 p-3">
          {GenerateStepNumbers()}
        </div>
        <Text
          level="h4"
          text={heading}
          color="black"
          className="mt-8 font-semibold"
        />
        {subheading && (
          <Text color="black" level="paragraph3" text={subheading} />
        )}
      </div>
      {children}
    </div>
  );
}
