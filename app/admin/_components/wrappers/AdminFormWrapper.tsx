import Text from "@/app/_global/atoms/Text";
import { useAppSelector } from "@/app/_redux/hooks";
import { NewListingStepsArray } from "@/app/_redux/slices/newListingSlice";
import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

type Props = {
  heading: string;
  subheading?: string;
  children: ReactNode;
};

function GenerateStepNumbers() {
  const { currentStep } = useAppSelector((state) => state.newListing);

  const stepsPassed = NewListingStepsArray.findIndex(
    (step) => step === currentStep
  );

  return NewListingStepsArray.map((step, i) => {
    function Divider() {
      if (i > 0) {
        if (i > stepsPassed) {
          return <div key={i} className="bg-zinc-300 h-[2px] grow-[1]"></div>;
        } else {
          return <div key={i} className="bg-primary h-[2px] grow-[1]"></div>;
        }
      }
    }

    return (
      <>
        {Divider()}
        {i < stepsPassed ? (
          <>
            {i < stepsPassed && (
              <>
                <div
                  key={i}
                  className="border-2 text-white bg-primary font-bold border-primary w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaCheck className="text-2xl" />
                </div>
              </>
            )}
          </>
        ) : step === currentStep ? (
          <div
            key={i}
            className="border-2 text-primary font-bold border-primary w-10 h-10 rounded-full flex items-center justify-center"
          >
            {i + 1}
          </div>
        ) : (
          <div
            key={i}
            className="border-2 text-zinc-300 font-bold border-zinc-300 w-10 h-10 rounded-full flex items-center justify-center"
          >
            {i + 1}
          </div>
        )}
      </>
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
        <div className="w-full text-lg bg-white flex justify-between items-center rounded-medium shadow-lg p-3">
          {GenerateStepNumbers()}
        </div>
        <Text
          level="h4"
          text={heading}
          color="black"
          className="mt-8 font-semibold"
        />
        {subheading && <Text level="paragraph3" text={subheading} />}
      </div>
      {children}
    </div>
  );
}
