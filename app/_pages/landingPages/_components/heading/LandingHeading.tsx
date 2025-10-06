import { textColor, TextColorType } from "@/app/_design/colors";
import { textAlign, TextAlignType } from "@/app/_design/orientation";
import { landingHeading, LandingHeadingType } from "@/app/_design/text";
import { HeadingLevel } from "@/app/_types/heading";
import React from "react";

export type LandingHeadingProps = {
  headingOne: string;
  headingTwo?: string;
  size?: LandingHeadingType;
  color?: TextColorType;
  align?: TextAlignType;
  level?: HeadingLevel;
  weight?: string;
};

export default function LandingHeading(props: LandingHeadingProps) {
  const headingSize = props.size ? landingHeading[props.size] : "text-4xl";
  if (props.level === "h1") {
    return (
      <div
        className={`${headingSize} ${props.weight && props.weight} ${
          props.color && textColor[props.color]
        } ${
          props.align && textAlign[props.align]
        } w-full max-w-landingWrapper text-center flex flex-col items-center font-bold`}
      >
        <h1 className="w-full">
          {props.headingOne}
          {props.headingTwo && (
            <>
              <br />
              {props.headingTwo}
            </>
          )}
        </h1>
      </div>
    );
  }

  if (props.level === "h3") {
    return (
      <div
        className={`${props.size ? landingHeading[props.size] : "text-4xl"} ${
          props.weight && props.weight
        } ${props.color && textColor[props.color]} ${
          props.align && textAlign[props.align]
        } max-w-landingWrapper text-center flex flex-col items-center font-bold`}
      >
        <h3>
          {props.headingOne}
          {props.headingTwo && (
            <>
              <br />
              {props.headingTwo}
            </>
          )}
        </h3>
      </div>
    );
  }

  return (
    <h2
      className={`${props.size ? landingHeading[props.size] : "text-4xl"} ${
        props.weight && props.weight
      } ${props.color && textColor[props.color]} ${
        props.align && textAlign[props.align]
      } max-w-landingWrapper text-center flex flex-col items-center`}
    >
      {props.headingOne}
      {props.headingTwo && (
        <>
          <br />
          {props.headingTwo}
        </>
      )}
    </h2>
  );
}
