"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DropdownData } from "@/data/Navbar";
import Calendar from "./Calendar";
import { IoSearch } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { autocomplete } from "@/lib/google";
import { debounce } from "lodash";

interface Item {
  id: number;
  label: string;
  dropdownType?: string;
  placeholder: string;
}

type Prediction = {
  place_id: string;
  description: string;
};

interface SelectedValue {
  display: string;
  fullDisplay?: string;
  placeId: string;
}

const Filter: React.FC = () => {

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<{ [placeId: string]: number }>({});
  const [selectedValues, setSelectedValues] = useState<{ [key: number]: SelectedValue }>({});
  const dropdownRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());
  const [counts, setCounts] = React.useState<{ Adults: number | string; Children: number }>({
    Adults: 0,
    Children: 0,
  });
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{ [key: number]: string[] }>({});
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);



  type GuestType = "Adults" | "Children";

  const handleIncrement = (name: GuestType) => {
    setCounts((prevCounts) => {
      const totalGuests = Number(prevCounts.Adults) + prevCounts.Children;
      if (totalGuests >= 16) return prevCounts;

      if (name === "Children") {
        return {
          ...prevCounts,
          Adults: prevCounts.Adults === 0 ? 1 : prevCounts.Adults,
          Children: Math.min(prevCounts.Children + 1, 15),
        };
      }

      if (name === "Adults") {
        if (prevCounts.Adults === 16) return { ...prevCounts, Adults: "16+" };
        if (prevCounts.Adults === "16+") return prevCounts;
        return { ...prevCounts, Adults: Math.min(Number(prevCounts.Adults) + 1, 16) };
      }

      return prevCounts;
    });
  };

  const handleDecrement = (name: GuestType) => {
    setCounts((prevCounts) => {
      if (name === "Adults") {
        if (prevCounts.Adults === "16+") return { ...prevCounts, Adults: 16 };
        return { ...prevCounts, Adults: Math.max(Number(prevCounts.Adults) - 1, 0) };
      }

      if (name === "Children") {
        if (prevCounts.Children === 0) return prevCounts;
        return { ...prevCounts, Children: prevCounts.Children - 1 };
      }

      return prevCounts;
    });
  };

  const handleCheckboxChange = (itemId: number, name: string) => {
    setSelectedCheckboxes((prev) => {
      const selected = prev[itemId] || [];

      // Toggle selection
      const newSelected = selected.includes(name)
        ? selected.filter((val) => val !== name) // Remove if already selected
        : [...selected, name]; // Add if not selected

      return { ...prev, [itemId]: newSelected };
    });
  };

  const handleSelect = (
    description: string | number,
    placeId: string | number,
    index?: number,
    itemId?: number
  ) => {
    if (typeof description === "number" && typeof placeId === "string") {
      setSelectedValues((prev) => ({
        ...prev,
        [description]: { display: placeId, placeId: "" },
      }));
      return;
    }

    if (
      typeof description === "string" &&
      typeof placeId === "string" &&
      typeof index === "number" &&
      typeof itemId === "number"
    ) {
      const firstWord = description.split(',')[0].trim();
      setSelectedValues((prev) => ({
        ...prev,
        [itemId]: {
          display: firstWord,
          fullDisplay: description,
          placeId
        },
      }));

      setSelectedIndex((prev) => ({
        ...prev,
        [itemId]: index,
      }));
      setActiveDropdown(null);
    }
    console.log(selectedIndex)
  };

  const getButtonLabel = (item: Item) => {
    if (item.label === "Guests") {
      const totalGuests = Number(counts.Adults) + Number(counts.Children);
      return totalGuests > 0 ? `${totalGuests} ${totalGuests === 1 ? "Guest" : "Guests"}` : item.label;
    }
    if (item.dropdownType === "checkboxList") {
      const selectedItems = selectedCheckboxes[item.id] || [];
      const formattedItems = selectedItems.map((name: string) => name.split(" ")[0]);
      return selectedItems.length > 0 ? formattedItems.join(", ") : item.placeholder;
    }
    return selectedValues[item.id]?.display ?? item.placeholder;
  };

  const handleDropdownToggle = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  useEffect(() => {
    if (!searchQuery) {
      setPredictions([]);
      return;
    }

    const fetchPredictions = debounce(async () => {
      setLoading(true);
      try {
        const predictions = await autocomplete(searchQuery);
        const validPredictions = predictions.filter(
          (prediction) => prediction.place_id !== undefined
        );
        setPredictions(validPredictions as Prediction[]);
      } catch (error) {
        console.error("Failed to fetch predictions:", error);
        setPredictions([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    fetchPredictions();

    return () => fetchPredictions.cancel();
  }, [searchQuery]);



  const widthMap: Record<number, string> = {
    1: "w-[340px] py-[16px] px-[12px] left-0",
    2: "w-[815px] py-[16px] px-[24px] left-[-12.6rem]",
    3: "w-[440px] py-[20px] px-[18px] left-[-2rem]",
    4: "w-[250px] py-[16px] px-[12px] left-[1.2rem]",
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      let isClickedInside = false;
      dropdownRefs.current.forEach((ref) => {
        if (ref && ref.contains(event.target as Node)) {
          isClickedInside = true;
        }
      });
      if (!isClickedInside) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const setDropdownRef = (id: number, el: HTMLDivElement | null) => {
    if (el) {
      dropdownRefs.current.set(id, el);
    }
  };

  return (
    <div className={`flex border border-[#D6D6D6] rounded-full ${activeDropdown ? "bg-[#DDDDDD]" : "bg-white"}`}>
      {DropdownData.map((item, index) => (
        <div key={item.id} className="relative">
          <button
            onClick={() => handleDropdownToggle(item.id)}
            className={`cursor-pointer py-[10px] pl-[30px] ${index === DropdownData.length - 1 ? "pr-[10px]" : "pr-[30px]"
              } ${activeDropdown === item.id ? "bg-white shadow-lg rounded-full hover:bg-white" : ""} hover:bg-[#E7E7E7] hover:rounded-full`}
          >
            <div className="flex gap-2">
              <div className="pt-1">
                {item.icon && typeof item.icon === "function" && <item.icon className="text-[16px] text-[#012A50]" />}
                {item.ico && typeof item.ico === "string" && (
                  <Image src={item.ico} alt='img' width={15} height={15} />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-plusjakarta font-extrabold text-[16px] text-start text-[#122B3F]">
                  {item.label}
                </h2>
                <h3 className="font-plusjakarta font-bold text-[13px] text-[#6D6D6D] leading-3">{getButtonLabel(item)}</h3>
              </div>
              {index === DropdownData.length - 1 && (
                <div className="w-[60px] ml-[50px] flex justify-end">
                  <div
                    className={`h-[40px] rounded-full bg-[#C3974C] flex justify-center items-center ${activeDropdown ? "w-[60px]" : "w-[40px]"
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.serchicon && typeof item.serchicon === "function" && <item.serchicon className="text-[16px] text-white" />}
                  </div>
                </div>
              )}
            </div>
          </button>

          {/* Dropdown Content */}
          {activeDropdown === item.id && (
            <div className={`absolute mt-4 bg-white border border-[#D1D1D1] rounded-xl
          ${widthMap[Number(item.id)] || "w-[250px] py-[16px] px-[12px]"}
            `}
              ref={(el) => setDropdownRef(item.id, el)}
            >
              {/* Location Dropdown */}
              {item.dropdownType === "location" && (
                <div>
                  <div className="border border-[#E7E7E7] rounded-lg flex items-center py-[8px] px-[8px] gap-2" style={{ boxShadow: "0px 4px 4px 0px #DEDEDE40" }}>
                    <IoSearch className="text-[#1E1E1E] text-[16px]" />
                    <input
                      type="text"
                      placeholder="Search location"
                      className="placeholder-[#D1D1D1] w-full outline-none border-none text-black font-semibold font-plusjakarta"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-[11px] border-b border-[#D1D1D1] pb-3">
                    <CiLocationArrow1 className="text-[25px] text-[#012A50]" />
                    <div className="flex flex-col">
                      <h2 className="font-plusjakarta font-extrabold text-[16px] text-[#0061B1]">Near by</h2>
                      <h3 className="font-plusjakarta font-normal text-[13px] text-[#888888]">Find yacht near you</h3>
                    </div>
                  </div>
                  <h2 className="mt-[11px] text-[#012A50] font-plusjakarta font-bold text-[13px]">Most popular searches</h2>
                  {searchQuery && (
                    <div className="mt-[11px]">
                      {loading ? (
                        <div className="flex items-center justify-center py-2">
                          <div className="w-5 h-5 border-2 border-t-transparent border-[#012A50] rounded-full animate-spin" />
                        </div>
                      ) : predictions.length === 0 ? (
                        <p className="font-plusjakarta font-semibold text-[13px] text-[#1E1E1E]">
                          No locations found
                        </p>
                      ) : (
                        <ul>
                          {predictions.map((prediction, idx) => (
                            <li
                              key={prediction.place_id}
                              onClick={() => handleSelect(prediction.description, prediction.place_id, idx, item.id)}
                              className={`cursor-pointer font-plusjakarta font-semibold text-[13px] hover:bg-[#012A50] hover:text-white text-[#1E1E1E] mb-1.5 last:mb-0 ${selectedValues[item.id]?.placeId === prediction.place_id
                                ? 'bg-[#012A50] text-white'
                                : ''
                                }`}
                            >
                              {prediction.description}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Calendar Dropdown */}
              {item.dropdownType === "calendar" && (
                <>
                  <p className="text-center font-plusjakarta font-normal text-[16px] text-[#000000]">Select pick-up date - Select drop-off date</p>
                  <Calendar onSelectDate={(value) => handleSelect(item.id, value)} />
                </>
              )}

              {/* Guests Dropdown */}
              {item.dropdownType === "guestCount" && (
                <div>
                  {item.dropdown?.map((guest, index) => {
                    const totalGuests = Number(counts.Adults) + counts.Children;
                    return (
                      <div key={index} className="flex justify-between py-2">
                        <div>
                          <h2 className="text-[#012A50] font-plusjakarta font-bold text-[14px]">
                            {guest.name}
                          </h2>
                          <h3 className="text-[#012A50] font-plusjakarta font-medium text-[12px]">
                            {guest.description}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDecrement(guest.name as GuestType)}
                            value={counts[guest.name as GuestType]}
                            className={`rounded-full border pb-1 flex justify-center items-center text-[20px] w-[30px] h-[30px] ${counts[guest.name as GuestType] === 0
                              ? "border-[#E7E7E7] text-[#E7E7E7] cursor-not-allowed"
                              : "border-[#012A50] text-[#012A50] cursor-pointer"
                              }`}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={counts[guest.name as GuestType]}
                            readOnly
                            className="w-[30px] text-center text-[#1E1E1E] font-bold text-[16px] bg-transparent outline-none"
                          />
                          <button
                            onClick={() => handleIncrement(guest.name as GuestType)}
                            disabled={totalGuests >= 16}
                            className={`rounded-full border pb-1 flex justify-center items-center text-[20px] w-[30px] h-[30px] ${totalGuests >= 16
                              ? "border-[#E7E7E7] text-[#E7E7E7] cursor-not-allowed"
                              : "border-[#012A50] text-[#012A50] cursor-pointer"
                              }`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Yacht Type Checkbox List */}
              {item.dropdownType === "checkboxList" && (
                <div>
                  {item.dropdown?.map((yacht, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <h2 className="text-[#012A50] font-plusjakarta font-normal text-[16px]">{yacht.name}</h2>
                      <input
                        type="checkbox"
                        checked={selectedCheckboxes[item.id]?.includes(yacht.name ?? "") || false}
                        onChange={() => handleCheckboxChange(item.id, yacht.name ?? "")}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))
      }
    </div >
  );
};

export default Filter;