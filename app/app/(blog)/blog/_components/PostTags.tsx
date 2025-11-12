import Text from "@/app/_components/atoms/Text";
import React from "react";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@roo/shared/src/design/colors";

export type PostTagProps = {
  id: string;
  title: string;
  bgColor?: ColorsAndGradientsType;
};

export default function PostTags({
  tags,
  isAbsolute = true,
}: {
  tags: PostTagProps[];
  isAbsolute?: boolean;
}) {
  return (
    <div
      className={`${isAbsolute && "absolute"} top-5 left-5 flex items-center gap-3`}
    >
      {tags.map((tag) => {
        const bgColor = tag.bgColor
          ? colorsAndGradients[tag.bgColor]
          : "bg-white";

        return (
          <div
            key={tag.title}
            className={`${bgColor} border border-borderLight shadow-lg rounded-md py-1 px-2`}
          >
            <Text
              text={tag.title}
              size="bodyMd"
              tag="p"
              fontWeight="semibold"
            />
          </div>
        );
      })}
    </div>
  );
}
