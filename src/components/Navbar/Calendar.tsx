"use client";

import React, { useState } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
  getDay,
  subDays,
  addDays
} from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setDateRange } from "@/lib/features/data/dateRangeSlice";

const Calendar: React.FC<{ onSelectDate: (value: string) => void }> = ({ onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null
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
  const dispatch = useDispatch();

  const handleDateClick = (date: Date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
    } else if (selectedRange.start && !selectedRange.end) {
      if (date < selectedRange.start) {
        const newRange = { start: date, end: selectedRange.start };
        setSelectedRange(newRange);
        dispatch(setDateRange(newRange));
        const formattedRange = `${format(newRange.start, "dd MMM")} - ${format(newRange.end, "dd MMM")}`;
        onSelectDate(formattedRange);
      } else {
        const newRange = { start: selectedRange.start, end: date };
        setSelectedRange(newRange);
        dispatch(setDateRange(newRange));
        const formattedRange = `${format(newRange.start, "dd MMM")} - ${format(newRange.end, "dd MMM")}`;
        onSelectDate(formattedRange);
      }
    }
  };

  const renderCalendar = (monthOffset: number) => {
    const firstDay = startOfMonth(addMonths(currentMonth, monthOffset));
    const lastDay = endOfMonth(firstDay);
    const days = eachDayOfInterval({ start: firstDay, end: lastDay });

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
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#D1D1D1] z-20 relative">
        {/* Month Header */}
        <div className="flex relative items-center px-2 py-2">
          {monthOffset === 0 && (
            <button onClick={handlePrevMonth} disabled={isPrevDisabled} className={`p-2 gradient-text ${isPrevDisabled
              ? "text-[#D1D1D1] cursor-not-allowed"
              : "text-[#B0B0B0] hover:text-[#1E1E1E] cursor-pointer "
              }`}>
              <IoIosArrowBack size={20} />
            </button>
          )}
          <h2 className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2 gradient-text">
            {format(firstDay, "MMMM yyyy")}
          </h2>
          {monthOffset === 1 && (
            <button onClick={handleNextMonth} className="p-2 gradient-text cursor-pointer hover:bg-[#EEF8FF] ml-auto hover:text-[#1E1E1E]">
              <IoIosArrowForward size={20} />
            </button>
          )}
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-2 gradient-text font-medium text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={`${day}-${index}`} className="p-2">{day}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">

          {/* Actual calendar days */}
          {totalDays.map((day) => {
            const isCurrentMonth = day.getMonth() === firstDay.getMonth();
            const isStart = selectedRange.start ? isSameDay(day, selectedRange.start) : false;
            const isEnd = selectedRange.end ? isSameDay(day, selectedRange.end) : false;
            const isInRange = selectedRange.start && selectedRange.end &&
              isWithinInterval(day, { start: selectedRange.start, end: selectedRange.end });

            return (
              <button
                key={day.toString()}
                className={`p-3 rounded-full text-center text-[#888888] transition-all ${isCurrentMonth
                    ? isStart || isEnd
                      ? "bg-[#012A50] text-white font-bold"
                      : isInRange
                        ? "bg-blue-200"
                        : "" 
                    : "cursor-not-allowed text-[#E7E7E7]"
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
    <div className="flex justify-between items-center mt-6 z-10 relative">
      {renderCalendar(0)}
      {renderCalendar(1)}
    </div>
  );
};

export default Calendar;