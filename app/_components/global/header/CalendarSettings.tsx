"use client";

import React, { Dispatch, useContext, useEffect, useState } from "react";
import HeaderSettingsWrapper from "../../wrappers/HeaderSettingsWrapper";
import * as qs from "qs";

import { format, isAfter, isBefore, isEqual } from "date-fns";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTriangleExclamation,
  FaXmark,
} from "react-icons/fa6";
import { useAppDispatch } from "@/app/_redux/hooks";
import { lowerHeaderStep } from "@/app/_redux/slices/lowerHeaderStepsSlice";

type Props = {
  setToggle: Dispatch<boolean>;
};

//Toggling the datepicker component for chosing daterange
export default function CalendarSettings() {
  const dispatch = useAppDispatch();

  //Fixed and initial values
  const currentDate = new Date();
  const daysOfWeek = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
  const monthsOfYear = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Řijen",
    "Listopad",
    "Prosinec",
  ];

  //Picking date
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [daysCurrentMonth, setDaysCurrentMonth] = useState<Date[]>([]);
  const [daysLastMonth, setDaysLastMonth] = useState<Date[]>([]);

  //Properties for dates picking
  const [fieldPick, setFieldPick] = useState(1);
  const [fieldColors, setFieldColors] = useState(["white", "#f4f4f5"]);

  //Properties for timepicking
  const [timesDelivery, setTimesDelivery] = useState<Date[]>([]);
  const [timesPickup, setTimesPickup] = useState<Date[]>([]);

  const [rangeIsValid, setRangeIsValid] = useState(false);

  type DaterangeType = {
    startDate: Date;
    endDate: Date;
    startIsValid: boolean;
    endIsValid: boolean;
  };

  const daterange = {
    startDate: new Date(),
    endDate: new Date(),
    startIsValid: true,
    endIsValid: true,
  };

  function setDaterange({
    startDate,
    endDate,
    startIsValid,
    endIsValid,
  }: DaterangeType) {}

  const numberOfDays = 10;

  //changing focus
  useEffect(() => {
    setFieldColors([fieldColors[1], fieldColors[0]]);
  }, [fieldPick]);

  //first populate
  useEffect(() => {
    SetDaysInMonth();
  }, []);

  //setting days in month on month change
  useEffect(() => {
    SetDaysInMonth();
  }, [currentMonth]);

  function SetDaysInMonth() {
    //Number of days in current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    //Last weeekday of last month
    let lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDay();
    if (lastDayOfLastMonth == 0) {
      lastDayOfLastMonth = 7;
    }

    const daysArray: Date[] = [];
    const lastDaysArray: Date[] = [];

    for (let i = 1; i < daysInMonth + 1; i++) {
      daysArray.push(new Date(currentYear, currentMonth, i));
    }

    for (
      let n = daysInLastMonth - lastDayOfLastMonth;
      n < daysInLastMonth;
      n++
    ) {
      lastDaysArray.push(new Date(currentYear, currentMonth, n));
    }

    setDaysLastMonth(lastDaysArray);
    setDaysCurrentMonth(daysArray);
  }

  useEffect(() => {
    localStorage.setItem("daterange", JSON.stringify({ ...daterange }));
  }, [daterange]);

  //Pick a date when clicking on date
  function pickDate(index: any) {
    const newDate = new Date(currentYear, currentMonth, index + 1);
    const endDate = new Date(daterange.endDate);
    const startDate = new Date(daterange.startDate);

    //First date rules
    if (fieldPick == 1) {
      if (newDate > endDate) {
        setDaterange({
          startDate: newDate,
          endDate: newDate,
          startIsValid: false,
          endIsValid: false,
        });

        setFieldPick(2);
      } else if (newDate <= endDate) {
        setDaterange({
          startDate: newDate,
          endDate: daterange.endDate,
          startIsValid: false,
          endIsValid: daterange.endIsValid,
        });

        setFieldPick(2);
      }
    }

    //Second date rules
    if (fieldPick == 2) {
      if (daterange.startDate == null) {
        setFieldPick(1);
      }

      if (daterange.startDate !== null) {
        if (newDate >= startDate) {
          setDaterange({
            startDate: daterange.startDate,
            endDate: newDate,
            startIsValid: daterange.startIsValid,
            endIsValid: false,
          });

          setFieldPick(1);
        } else if (newDate < startDate) {
          setDaterange({
            startDate: newDate,
            endDate: new Date(),
            startIsValid: false,
            endIsValid: false,
          });

          setFieldPick(2);
        }
      }
    }
  }

  function changeMonth(direction: string) {
    if (direction == "plus") {
      if (currentMonth == 11) {
        setCurrentYear(currentYear + 1);
        setCurrentMonth(0);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }

    if (direction == "minus") {
      if (currentMonth == 0) {
        setCurrentYear(currentYear - 1);

        setCurrentMonth(11);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  }

  function dateIsActive(date: Date) {
    const startDate = new Date(daterange.startDate);
    const endDate = new Date(daterange.endDate);

    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const day = startDate.getDate();

    const secondYear = endDate.getFullYear();
    const secondMonth = endDate.getMonth();
    const secondDay = endDate.getDate();

    if (
      isAfter(date, daterange.startDate) &&
      isBefore(date, daterange.endDate)
    ) {
      return true;
    }

    if (isEqual(date, new Date(year, month, day))) {
      return true;
    }

    if (isEqual(date, new Date(secondYear, secondMonth, secondDay))) {
      return true;
    }
  }

  function GenerateDay(day: Date, index: number) {
    const monthDay = day.getDate();
    let weekDay = day.getDay();
    if (weekDay == 0) {
      weekDay = 7;
    }

    if (isBefore(new Date(), day)) {
      if (dateIsActive(day)) {
        return (
          <p
            onClick={() => {
              pickDate(index);
            }}
            key={"dayOfTheMonth" + monthDay}
            className=" h-10 flex items-center justify-center hover:bg-primary/40 rounded-md cursor-pointer"
          >
            {monthDay}
          </p>
        );
      } else if (!dateIsActive(day)) {
        return (
          <p
            onClick={() => {
              pickDate(index);
            }}
            key={"dayOfTheMonth" + monthDay}
            className=" h-10 flex items-center justify-center hover:bg-primary/40 rounded-md cursor-pointer"
          >
            {monthDay}
          </p>
        );
      }
    } else if (isBefore(day, new Date())) {
      return (
        <p
          key={"dayOfTheMonth" + monthDay}
          className=" text-zinc-300  h-10 flex items-center justify-center  rounded-md cursor-pointer"
        >
          {monthDay}
        </p>
      );
    }
  }

  function GenerateLastMonthDay(day: Date) {
    let weekDay = day.getDay();
    const monthDay = day.getDate();
    if (weekDay == 0) {
      weekDay = 7;
    }

    return (
      <p
        key={"dayOfTheLastMonth" + day}
        className=" text-zinc-200 h-10 flex items-center justify-center rounded-md"
      ></p>
    );
  }

  function GenerateMonth() {
    return (
      <div className=" p-5">
        <div className="flex justify-between items-center py-5 text-primary">
          <FaChevronLeft
            className="cursor-pointer"
            onClick={() => {
              changeMonth("minus");
            }}
          />
          <p className="font-semibold text-primary">
            {monthsOfYear[currentMonth]} {currentYear}
          </p>
          <FaChevronRight
            className="cursor-pointer"
            onClick={() => {
              changeMonth("plus");
            }}
          />
        </div>
        <div className="grid grid-cols-7 justify-items-stretch gap-2 mb-2 text-primary">
          {daysOfWeek.map((item) => {
            return (
              <p
                key={"days" + item}
                className="font-semibold pb-2 border-b border-b-primary/20 border-borderGray text-center"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="grid grid-cols-7 justify-items-stretch text-center gap-2 font-semibold text-">
          {daysLastMonth.map((day) => {
            return GenerateLastMonthDay(day);
          })}
          {daysCurrentMonth.map((day, index) => {
            return GenerateDay(day, index);
          })}
        </div>
      </div>
    );
  }

  //Times of the delivery and pickup
  //   useEffect(() => {
  //     fetchTimeslots();
  //     async function fetchTimeslots() {
  //       const today = new Date();
  //       const finalYear = format(today, "yyyy");
  //       const finalYearNumber = Number(finalYear) + 1;
  //       const firstDayOfMonth = new Date();
  //       const lastDayOfMonth = new Date(finalYearNumber, 1, 1);

  //       const query = await {
  //         filters: {
  //           delivery: {
  //             $between: [
  //               firstDayOfMonth.toISOString(),
  //               lastDayOfMonth.toISOString(),
  //             ],
  //           },
  //         },
  //       };

  //       const response = await fetch(
  //         process.env.STRAPI +
  //           `/api/timeslots?${qs.stringify(query, {
  //             encodeValuesOnly: true,
  //           })}`,
  //         {
  //           method: "GET",
  //           mode: "cors",
  //           next: {
  //             revalidate: 20,
  //           },
  //         }
  //       );

  //       const json = await response.json();
  //       const data: any[] = json.data;

  //       const deliveryTimesArray: Date[] = [];
  //       const pickupTimesArray: Date[] = [];

  //       const { startDate, endDate } = daterange;

  //       if (startDate != null) {
  //         const startYearNew = new Date(startDate);
  //         for (let i = 8; i < 21; i++) {
  //           const date = new Date(
  //             startYearNew.getFullYear(),
  //             startYearNew.getMonth(),
  //             startYearNew.getDate(),
  //             i
  //           );
  //           const timeslotMatchArray: any[] = data.filter((slot: any) => {
  //             if (isEqual(slot.delivery, date)) {
  //               return true;
  //             }
  //           });

  //           if (timeslotMatchArray.length == 0) {
  //             deliveryTimesArray.push(date);
  //           }
  //         }
  //       }

  //       if (endDate != null) {
  //         const endDateNew = new Date(endDate);
  //         for (let i = 8; i < 21; i++) {
  //           const date = new Date(
  //             endDateNew.getFullYear(),
  //             endDateNew.getMonth(),
  //             endDateNew.getDate(),
  //             i
  //           );
  //           const timeslotMatchArray: any[] = data.filter((slot: any) => {
  //             if (isEqual(slot.pickup, date)) {
  //               return true;
  //             }
  //           });

  //           if (timeslotMatchArray.length == 0) {
  //             pickupTimesArray.push(date);
  //           }
  //         }
  //         setTimesDelivery(deliveryTimesArray);
  //         setTimesPickup(pickupTimesArray);
  //       }
  //     }
  //   }, [daterange]);

  //   function PickDeliveryTime(time: Date) {
  //     const startDate = new Date(daterange.startDate);

  //     const year = startDate.getFullYear();
  //     const month = startDate.getMonth();
  //     const day = startDate.getDate();

  //     if (
  //       isAfter(time, new Date(year, month, day, 7)) &&
  //       isBefore(time, new Date(year, month, day, 21))
  //     ) {
  //       setDaterange({
  //         startDate: time,
  //         endDate: daterange.endDate,
  //         startIsValid: true,
  //         endIsValid: daterange.endIsValid,
  //       });
  //     } else {
  //       setDaterange({
  //         startDate: time,
  //         endDate: daterange.endDate,
  //         startIsValid: false,
  //         endIsValid: daterange.endIsValid,
  //       });
  //     }
  //   }

  //   function GenerateDeliveryTimes(time: Date) {
  //     if (isEqual(time, daterange.startDate)) {
  //       return (
  //         <button
  //           key={"deliveryTime" + time}
  //           onClick={() => {
  //             PickDeliveryTime(time);
  //           }}
  //           className="p-3  border bg-primary/40 rounded-md border-borderGray hover:bg-primary/40 cursor-pointer"
  //         >
  //           {format(time, "H:mm")}
  //         </button>
  //       );
  //     } else {
  //       return (
  //         <button
  //           key={"deliveryTime" + time}
  //           onClick={() => {
  //             PickDeliveryTime(time);
  //           }}
  //           className="p-3  border rounded-md border-borderGray hover:bg-primary/40 cursor-pointer"
  //         >
  //           {format(time, "H:mm")}
  //         </button>
  //       );
  //     }
  //   }

  //   function PickPickupTime(time: Date) {
  //     const endDate = new Date(daterange.endDate);

  //     const year = endDate.getFullYear();
  //     const month = endDate.getMonth();
  //     const day = endDate.getDate();

  //     if (
  //       isAfter(time, new Date(year, month, day, 7)) &&
  //       isBefore(time, new Date(year, month, day, 21))
  //     ) {
  //       setDaterange({
  //         startDate: daterange.startDate,
  //         endDate: time,
  //         startIsValid: daterange.startIsValid,
  //         endIsValid: true,
  //       });
  //     } else {
  //       setDaterange({
  //         startDate: daterange.startDate,
  //         endDate: time,
  //         startIsValid: daterange.startIsValid,
  //         endIsValid: false,
  //       });
  //     }
  //   }

  //   function GeneratePickupTimes(time: Date) {
  //     if (isEqual(time, daterange.endDate)) {
  //       return (
  //         <button
  //           key={"startTime" + time}
  //           onClick={() => {
  //             PickPickupTime(time);
  //           }}
  //           className="p-3  border bg-primary/40 rounded-md border-borderGray hover:bg-primary/40 cursor-pointer"
  //         >
  //           {format(time, "H:mm")}
  //         </button>
  //       );
  //     } else {
  //       return (
  //         <button
  //           key={"startTime" + time}
  //           onClick={() => {
  //             PickPickupTime(time);
  //           }}
  //           className="p-3  border rounded-md border-borderGray hover:bg-primary/40 cursor-pointer"
  //         >
  //           {format(time, "H:mm")}
  //         </button>
  //       );
  //     }
  //   }

  return (
    <>
      <HeaderSettingsWrapper>
        <div
          className="w-full max-w-lowerHeader absolute max-h-[500px] md:max-h-screen bg-white shadow-lg border border-borderLight md:rounded-large md:overflow-auto overflow-scroll p-5"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onMouseLeave={() => {
            dispatch(lowerHeaderStep.actions.changeStep(null));
          }}
        >
          <div className="">
            <div className="p-5 text-textNormal text-center flex md:gap-4 justify-center md:flex-row flex-col items-center gap-3">
              {daterange.endIsValid && daterange.startIsValid && (
                <>
                  <p>
                    Datum od{" "}
                    <span className="font-semibold">
                      {format(daterange.startDate, "dd.MM.yyyy")}
                    </span>{" "}
                    od{" "}
                    <span className="font-semibold">
                      {format(daterange.endDate, "dd.MM.yyyy")}
                    </span>
                  </p>
                  <p className="p-2 text-textLight font-semibold rounded-lg bg-primary">
                    Počet dní: {numberOfDays}
                  </p>
                </>
              )}
              {!daterange.startIsValid && (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <FaTriangleExclamation className="text-amber-500" />

                    <p className=" font-semibold">Doplňte čas doručení</p>
                  </div>
                </>
              )}
              {!daterange.endIsValid && (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <FaTriangleExclamation className="text-amber-500" />

                    <p className="font-semibold">Doplňte čas odvozu</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className=" grid md:grid-cols-2   rounded-b-md">
            <GenerateMonth />
            <GenerateMonth />

            {/* <div className=" col-span-2 py-2 px-5 md:mt-0 mt-5">
            <div
              style={{ scrollbarGutter: "stable" }}
              className="overflow-auto pr-2
                 grid grid-cols-2 justify-items-stretch gap-5 py-5 text-center"
            >
              <div>
                <p className="mb-2 font-semibold">Čas doručení</p>
                <p
                  className="p-2 border border-zinc-300 text-textPrimary rounded-md cursor-pointer"
                  onClick={() => {
                    setFieldPick(1);
                  }}
                >
                  {daterange.startIsValid
                    ? format(daterange.startDate, "HH:mm")
                    : "Nezvoleno"}
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold">Čas odvozu</p>
                <p
                  className="p-2 border border-zinc-300 text-textPrimary  rounded-md cursor-pointer"
                  onClick={() => {
                    setFieldPick(2);
                  }}
                >
                  {daterange.endIsValid
                    ? format(daterange.endDate, "HH:mm")
                    : "Nezvoleno"}
                </p>
              </div>
            </div>
            <div className="pr-2 max-h-[350px] overflow-y-scroll gap-5 grid grid-cols-2 justify-items-stretch text-center">
              <div className=" flex flex-col items-stretch gap-3">
                {timesDelivery != null &&
                  timesDelivery.map((time) => {
                    return GenerateDeliveryTimes(time);
                  })}
              </div>
              <div className=" flex flex-col items-stretch gap-3">
                {timesPickup != null &&
                  timesPickup.map((time) => {
                    return GeneratePickupTimes(time);
                  })}
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </HeaderSettingsWrapper>
    </>
  );
}
