"use client";

import { ListingSectionWrapper } from "@/app/inzerat/[slug]/page";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type Props = {};

export function ListingLongDescription() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ListingSectionWrapper>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="text-center flex flex-col gap-4 font-semibold text-primary">
          <h2 className="font-bold">DJ Natsuki</h2>
          <p className="text-xl">Profesionální DJka světového formátu</p>
        </div>
        <div
          className={`${isOpen ? "" : "h-70"} overflow-hidden gap-3 relative`}
        >
          <h5 className="font-semibold mt-5">O mně</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ratione nobis, ex quisquam rem nam dolores maxime odit, optio magni
            fugit atque explicabo a reiciendis labore ab temporibus deserunt
            minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ratione nobis, ex quisquam rem nam dolores maxime odit, optio magni
            fugit atque explicabo a reiciendis labore ab temporibus deserunt
            minus.
          </p>
          <h5 className="font-semibold mt-5">O mně</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ratione nobis, ex quisquam rem nam dolores maxime odit, optio magni
            fugit atque explicabo a reiciendis labore ab temporibus deserunt
            minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ratione nobis, ex quisquam rem nam dolores maxime odit, optio magni
            fugit atque explicabo a reiciendis labore ab temporibus deserunt
            minus.
          </p>
          <h5 className="font-semibold mt-5">O mně</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ratione nobis, ex quisquam rem nam dolores maxime odit, optio magni
            fugit atque explicabo a reiciendis labore ab temporibus deserunt
            minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ratione nobis, ex quisquam rem nam dolores maxime odit, optio magni
            fugit atque explicabo a reiciendis labore ab temporibus deserunt
            minus.
          </p>
          {!isOpen ? (
            <div className="absolute bottom-0 w-full h-40 bg-linear-0 from-white from-70% to-transparent flex justify-center items-center pb-5 gap-3">
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="group flex items-center justify-center gap-3 cursor-pointer p-3"
              >
                <button className=" font-semibold animate group-hover:text-primary cursor-pointer">
                  Zobrazit více
                </button>
                <FaChevronDown className="group-hover:text-primary animate" />
              </div>
            </div>
          ) : (
            <div className=" text-center pt-5 flex items-center justify-center">
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="group cursor-pointer flex items-center justify-center gap-3"
              >
                <button className="font-semibold animate group-hover:text-primary cursor-pointer">
                  Zavřít
                </button>
                <FaChevronUp className="group-hover:text-primary animate" />
              </div>
            </div>
          )}
        </div>
      </div>
    </ListingSectionWrapper>
  );
}
