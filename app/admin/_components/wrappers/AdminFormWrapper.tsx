import Text from "@/app/_global/atoms/Text";
import React, { ReactNode } from "react";

type Props = {
  heading: string;
  subheading?: string;
  children: ReactNode;
};

export default function AdminFormWrapper({
  heading,
  subheading,
  children,
}: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-10">
      <div className="flex flex-col items-center text-center gap-5">
        <Text level="h4" text={heading} className="mt-5" />
        {subheading && <Text level="paragraph3" text={subheading} />}
      </div>
      {children}
    </div>
  );
}
