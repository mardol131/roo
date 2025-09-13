"use client";
import { getTrackBackground, Range } from "react-range";

import React from "react";
import { colors } from "@/app/_data/colors";

type Props = { min: number; max: number; rtl: boolean; counts: number[] };

export function PriceRangeSlider({ min, max, rtl, counts }: Props) {
  const [values, setValues] = React.useState([min, max]);
  const oneBarRange = max / counts.length;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-end gap-1 h-20">
        {counts.map((count: number, index) => {
          const heighPercent = count / 120;
          let backgroundColor: string = "gray";
          const lowRange = oneBarRange * (index + 1);
          const highRange = oneBarRange * index;

          if (values[0] <= lowRange && values[1] > highRange) {
            backgroundColor = colors.pink;
          }
          return (
            <div
              style={{
                height: `${heighPercent * 100}%`,
                backgroundColor: backgroundColor,
              }}
              key={count + index}
              className="w-full h-[20%]"
            ></div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={values}
          step={1}
          min={min}
          max={max}
          rtl={rtl}
          onChange={(values) => {
            setValues(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="w-full flex"
            >
              <div
                className="h-1 w-full rounded-full bg-pink"
                ref={props.ref}
                style={{
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", colors.pink, "#ccc"],
                    min: min,
                    max: max,
                    rtl,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              className="bg-pink rounded-full w-4 h-4 outline-0"
            ></div>
          )}
        />
        <div id="output" className=" grid grid-cols-2 gap-4 mt-5 text-sm">
          <div className="border border-borderLight rounded-small flex items-center p-2">
            <input
              name="minValue"
              id="minValue"
              onChange={(e) => {
                setValues([Number(e.target.value), values[1]]);
              }}
              type="number"
              className="max-w-[60%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={values[0]}
              min={min}
              max={max}
            />
            <p className="justify-self-end w-[40%] text-end"> Kč</p>
          </div>
          <div className="border border-borderLight rounded-small flex items-center p-2">
            <input
              name="maxValue"
              id="maxValue"
              onChange={(e) => {
                let val = e.target.value;
                if (val.length > 1 && val[0] === "0") {
                  val = val.replace(/^0+/, ""); // smaže počáteční nuly
                }
                setValues([values[0], Number(val)]);
              }}
              type="number"
              className="max-w-[60%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={values[1]}
            />
            <p className="justify-self-end w-[40%] text-end"> Kč</p>
          </div>
        </div>
      </div>
    </div>
  );
}
