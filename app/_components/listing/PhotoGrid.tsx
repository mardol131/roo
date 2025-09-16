"use client";

import Image from "next/image";
import image from "@/app/_images/test.jpg";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export function PhotoGrid() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  return (
    <div className="relative grid grid-cols-[3fr_1fr_1fr] grid-rows-2 w-full gap-3 mt-5 mb-15 rounded-medium overflow-hidden">
      {" "}
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full row-span-2 object-cover self-stretch"
      />
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full row-span-1 col-span-2 "
      />{" "}
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full col-start-2 row-span-1 object-cover self-stretch"
      />{" "}
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full col-start-3 row-span-1 object-cover self-stretch"
      />
      <button
        onClick={() => {
          setLightboxIsOpen(true);
        }}
        className="cursor-pointer hover:scale-110 animate absolute bottom-6 right-6 bg-white rounded-lg py-2 px-3 font-semibold"
      >
        Dalších 16 fotek
      </button>
      {lightboxIsOpen && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/70 p-40 flex items-center justify-center gap-5">
          <MdClose
            onClick={() => {
              setLightboxIsOpen(false);
            }}
            className="hover:text-pink hover:scale-110 animate cursor-pointer top-[15%] right-[15%] text-4xl text-white fixed "
          />
          <div className="max-w-[50%] max-h-[50%] flex flex-col items-center justify-center gap-5">
            <Image
              src={image}
              width={1000}
              height={1000}
              alt="image"
              className="row-span-2 object-cover justify-self-center"
            />
            <div className="flex items-center gap-3">
              {" "}
              <FaChevronLeft className="text-white text-3xl" />
              <div className="grid grid-cols-4 w-[90%] gap-5">
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="row-span-2 object-cover self-stretch"
                />
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="row-span-2 object-cover self-stretch"
                />
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="row-span-2 object-cover self-stretch"
                />
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="image"
                  className="row-span-2 object-cover self-stretch"
                />
              </div>
              <FaChevronRight className="text-white text-3xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
