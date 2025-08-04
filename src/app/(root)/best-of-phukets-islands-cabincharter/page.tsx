"use client";
import { Fragment, useRef } from "react";
import HeroSection from "@/Component/cabinCharter/hero";
import About from "@/Component/cabinCharter/about";
import SeaSide_Sixdays from "@/Component/cabinCharter/seaside_bliss";

const CabinCharter = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <SeaSide_Sixdays />
    </Fragment>
  );
};

export default CabinCharter;
