import React from "react";
import Bubble from "../bubbles/Bubble";

import { BubbleType } from "@/app/_types/bubbles";
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
  bubbles: BubbleType[];
};

export default function BubblesSection(props: Props) {
  return (
    <div className="flex flex-col gap-15">
      <div className="grid grid-cols-4 gap-5 min-h-100">
        {props.bubbles.map((bubble, index) => {
          let colSpan = 1;
          if (index === 2) {
            colSpan = 2;
          } else if (index === 3) {
            colSpan = 2;
          } else {
            colSpan = 1;
          }

          return (
            <Bubble
              key={bubble.link + index}
              image={{ src: bubble.image.src }}
              text="Praha"
              link="/hello"
              colSpan={colSpan}
            />
          );
        })}
      </div>
      <div className="max-w-[800px] w-full rounded-full bg-linear-30 from-orange via-pink to-violet p-0.5 shadow-lg">
        <div className="bg-white rounded-full p-0.5 flex gap-3">
          <div className="grid grid-cols-4">
            <div className="flex items-stretch gap-6 border-r-2 border-pink px-4">
              <input
                type="text"
                placeholder="Typ akce"
                className="self-center outline-0 focus:border-b-2 border-orange/15"
              />
            </div>
          </div>
          <button className="shrink-0 w-8 h-8 flex items-center justify-center bg-linear-30 from-orange via-pink to-violet rounded-full text-white text-xl justify-self-end">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
}
