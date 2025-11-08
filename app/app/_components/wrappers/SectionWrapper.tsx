import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classnameOne?: string;
  classnameTwo?: string;
};

export default function SectionWrapper(props: Props) {
  return (
    <div
      className={`${props.classnameOne} w-full flex justify-center px-20 min-h-full`}
    >
      <div
        className={`${props.classnameTwo} max-w-contentWrapper w-full flex justify-center items-center`}
      >
        {props.children}
      </div>
    </div>
  );
}
