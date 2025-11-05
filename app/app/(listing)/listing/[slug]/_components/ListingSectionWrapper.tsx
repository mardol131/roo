import { ReactNode } from "react";

export type ListingSectionWrapperType = {
  children: ReactNode;
  heading?: string;
};

export function ListingSectionWrapper(props: ListingSectionWrapperType) {
  return (
    <div className="pt-12 mt-12 border-borderLight flex flex-col gap-7">
      {props.heading && (
        <>
          <h2 className="font-bold border-b-2 border-primary self-start pb-5">
            {props.heading}
          </h2>
        </>
      )}
      {props.children}
    </div>
  );
}
