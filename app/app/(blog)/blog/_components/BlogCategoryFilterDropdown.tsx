"use client";

import Text from "@/app/_components/atoms/Text";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaSortAlphaDown } from "react-icons/fa";
import { PostTagProps } from "./PostTags";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { useRouter } from "next/navigation";

type Props = {
  tags: PostTagProps[];
  currentTag?: string;
};

export default function BlogCategoryFilterDropdown({
  tags,
  currentTag,
}: Props) {
  const [activeTag, setActiveTag] = useState<string | undefined>(currentTag);
  const [categoryDropdownActive, setCategoryDropdownActive] = useState(false);

  const router = useRouter();

  const categoriesRef = useRef(null);

  const closeDropdownHandler = useCallback(() => {
    setCategoryDropdownActive(false);
  }, []);

  const openDropdownHandler = useCallback(() => {
    setCategoryDropdownActive(true);
  }, []);

  const changeCategoryHandler = useCallback((tag: PostTagProps) => {
    setActiveTag(tag.title);
    if (tag.id === "all") {
      router.push(`/blog`);
    } else {
      router.push(`/blog?category=${tag.slug}`);
    }
    setCategoryDropdownActive(false);
  }, []);

  useClickOutside(categoriesRef, closeDropdownHandler);

  return (
    <div ref={categoriesRef} className="w-full flex justify-start">
      <div className="relative border border-borderLight w-50 hover:bg-slate-50 animate rounded-lg shadow-lg">
        <button
          onClick={openDropdownHandler}
          className="flex p-3 cursor-pointer items-center w-full justify-between gap-4"
        >
          <Text
            text={activeTag ? activeTag : "Všechny kategorie"}
            tag="p"
            size="bodyMd"
            fontWeight="semibold"
          />
          <FaSortAlphaDown />
        </button>
        {categoryDropdownActive && (
          <div className="absolute top-[100%] min-w-full z-20 left-0 pt-3">
            <div className="bg-white p-3 flex flex-col rounded-lg border border-borderLight">
              <button
                onClick={() => {
                  changeCategoryHandler({
                    title: "Všechny kategorie",
                    id: "all",
                  });
                }}
                className="cursor-pointer text-start hover:bg-slate-100  p-2 animate rounded-lg"
              >
                <Text
                  text={"Všechny kategorie"}
                  tag="p"
                  size="bodyMd"
                  fontWeight="semibold"
                />
              </button>
              {tags.map((tag) => {
                return (
                  <button
                    onClick={() => {
                      changeCategoryHandler(tag);
                    }}
                    key={tag.title}
                    className="cursor-pointer text-start hover:bg-slate-100  p-2 animate rounded-lg"
                  >
                    <Text
                      text={tag.title}
                      tag="p"
                      size="bodyMd"
                      fontWeight="semibold"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
