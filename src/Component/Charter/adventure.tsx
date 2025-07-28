"use client";

import JoinUs from "@/common/joinUs";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

const Adventure = () => {
  const pathname = usePathname();
// selection of the url 
  const BgImage =
    pathname === "/bareboat-charter-thailand"
      ? "/images/boatimg3.png"
      : "/images/homeimg6.png";

  return (
    <Fragment>
      <JoinUs bgImage={BgImage}
        bgColor="#034250"
        overlayOpacity={0.5} />
    </Fragment>
  );
};

export default Adventure;
