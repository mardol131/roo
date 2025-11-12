import Text from "@/app/_components/atoms/Text";
import React from "react";

export type PostTagProps = { id: string; title: string };

export default function PostTags({ tags }: { tags: PostTagProps[] }) {
  return (
    <div className="absolute top-5 left-5 flex items-center gap-3">
      {tags.map((tag) => {
        return (
          <div className="bg-white border border-borderLight shadow-lg rounded-md py-1 px-2">
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
