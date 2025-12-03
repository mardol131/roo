import Text from "@/app/_components/atoms/text/Text";
import { FormEvent, ReactNode } from "react";

type Props = {
  heading?: string;
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
        {heading && (
          <Text
            tag="h4"
            size="headingMd"
            text={heading}
            color="black"
            fontWeight="semibold"
            className="mt-8"
          />
        )}
        {subheading && (
          <Text color="black" tag="p" size="bodyXl" text={subheading} />
        )}
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 items-center max-w-250 w-full pb-10"
      >
        {children}
      </form>
    </div>
  );
}
