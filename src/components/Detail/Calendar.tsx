"use client";

import React, { useState } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  getDay,
  subDays,
  addDays,
  isWithinInterval,
  isBefore
} from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const minMonth = startOfMonth(new Date());
  const handlePrevMonth = () => {
    const prevMonth = addMonths(currentMonth, -1);
    if (prevMonth >= minMonth) {
      setCurrentMonth(prevMonth);
    }
  };
  const isPrevDisabled = startOfMonth(currentMonth) <= minMonth;
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (date: Date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
    } else if (selectedRange.start && !selectedRange.end) {
      if (date < selectedRange.start) {
        setSelectedRange({ start: date, end: selectedRange.start });
      } else {
        setSelectedRange({ start: selectedRange.start, end: date });
      }
    }
  };

  const renderCalendar = (monthOffset: number) => {
    const firstDay = startOfMonth(addMonths(currentMonth, monthOffset));
    const lastDay = endOfMonth(firstDay);
    const days = eachDayOfInterval({ start: firstDay, end: lastDay });
    const today = new Date();

    const firstDayIndex = getDay(firstDay);
    const prevMonthDays = Array.from({ length: firstDayIndex }).map((_, index) =>
      subDays(firstDay, firstDayIndex - index)
    );

    const totalDays = [...prevMonthDays, ...days];

    // Fill remaining days to ensure exactly 6 weeks (42 days total)
    while (totalDays.length < 42) {
      totalDays.push(addDays(totalDays[totalDays.length - 1], 1));
    }

    return (
      <div className="bg-white p-4 rounded-lg border border-[#D1D1D1] flex flex-col">
        {/* Month Header */}
        <div className="flex relative items-center px-2 py-2">
          {monthOffset === 0 && (
            <button
              onClick={handlePrevMonth}
              disabled={isPrevDisabled}
              className={`px-[9px] py-[7px] rounded-full bg-[#F6F6F6] flex items-center justify-center ${isPrevDisabled
                ? "text-[#D1D1D1] cursor-not-allowed"
                : "text-[#B0B0B0] hover:text-[#1E1E1E] cursor-pointer "
                }`}
            >
              <IoIosArrowBack size={20} />
            </button>
          )}
          <h2 className="text-lg font-extrabold text-[#012A50] absolute left-1/2 transform -translate-x-1/2">
            {format(firstDay, "MMMM yyyy")}
          </h2>
          {monthOffset === 1 && (
            <button
              onClick={handleNextMonth}
              className="cursor-pointer text-[#B0B0B0] hover:text-[#1E1E1E] px-[9px] py-[7px] rounded-full bg-[#F6F6F6] flex items-center justify-center ml-auto"
            >
              <IoIosArrowForward size={20} />
            </button>
          )}
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-2 text-[#012A50] text-center font-medium">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={index} className="p-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days - Always 6 Weeks */}
        <div className="grid grid-cols-7 gap-1">
          {totalDays.map((day, index) => {
            const isPastDate = isBefore(day, today);
            const isCurrentMonth = day.getMonth() === firstDay.getMonth();
            const isStart = selectedRange.start ? isSameDay(day, selectedRange.start) : false;
            const isEnd = selectedRange.end ? isSameDay(day, selectedRange.end) : false;
            const isInRange =
              selectedRange.start &&
              selectedRange.end &&
              isWithinInterval(day, { start: selectedRange.start, end: selectedRange.end });

            return (
              <button
                key={index}
                className={`p-3 rounded-md text-[#888888] text-center transition-all ${isCurrentMonth
                  ? isStart || isEnd
                    ? "bg-gradient-to-r from-[#022252] to-[#013D70] text-white font-normal"
                    : isInRange
                      ? "bg-gradient-to-r from-[#022252] to-[#013D70] text-white font-normal"
                      : isPastDate
                        ? "bg-[#D1D1D1] text-[#6D6D6D] cursor-not-allowed"
                        : "hover:bg-gray-200"
                  : "text-[#E7E7E7] cursor-not-allowed"
                  }`}
                onClick={() => isCurrentMonth && handleDateClick(day)}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-start gap-2">
      {renderCalendar(0)}
      {renderCalendar(1)}
    </div>
  );
};

export default Calendar;