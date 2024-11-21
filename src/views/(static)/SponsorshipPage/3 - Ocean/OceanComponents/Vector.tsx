import React from "react";
import { classNames } from "../../../../../utils/string";
import VectorSVG from "../../../../../assets/ocean/Vector.svg";

const Vector = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={classNames(className)} style={{ position: "relative", width: "100%", height: '20%', marginTop: "-1px"}}>
      <img src={VectorSVG} alt=""  />
      <div style={{ position: "absolute", top: -1, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
};

export default Vector;
