import React from "react";
import { classNames } from "../../../utils/string";
import VectorSVG from "../../../assets/ocean/SponsorshipRect.svg";

const WhiteRect = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={classNames(className)} style={{ position: "relative", width: "65%" }}>
      <img src={VectorSVG} alt="" />
      <div style={{ position: "absolute", top: 0, bottom: 0,  display: "flex", flexDirection: "column", alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
};

export default WhiteRect;
