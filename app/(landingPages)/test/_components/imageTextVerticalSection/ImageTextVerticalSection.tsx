import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import { TextProps } from "@/app/_global/atoms/Text";
import { ImageType } from "@/app/_types/objects";
import React from "react";

type Props = {
  image: ImageType;
  texts: TextProps[];
};

export default function ImageTextVerticalSection(props: Props) {
  return (
    <LandingSectionWrapper>
      <div>
        <div></div>
        <div></div>
      </div>
    </LandingSectionWrapper>
  );
}

function ImageTextCard() {
  return <div></div>;
}
