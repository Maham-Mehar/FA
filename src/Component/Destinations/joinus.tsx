"use clien";
import JoinUs from "@/common/joinUs";
import PngIcons from "@/icons/pngIcon";
import { Fragment } from "react";
const Joinus = () => {
  return (
    <div className="my-14">
      <JoinUs bgImage={PngIcons.adventure}
        bgColor="#034250"
        overlayOpacity={0.5} />
    </div>
  );
};

export default Joinus;
