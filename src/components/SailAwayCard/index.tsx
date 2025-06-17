"use client"
import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface SailAwayCardProps {
  onClose: () => void;
}

const SailAwayCard: React.FC<SailAwayCardProps> = ({ onClose }) => {

  return (
    <div className="relative w-full">
      <Image src="/images/Auth/sailaway.svg" alt="img" width={0} height={917} className="w-full" />
      <IoClose className="text-[#1C274C] text-[24px] cursor-pointer absolute right-5 top-1" onClick={onClose}  />
    </div>
  );
};

export default SailAwayCard;
