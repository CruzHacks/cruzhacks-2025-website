import React from "react";
import { classNames } from "../../../../../utils/string";
import ThanksSVG from "../../../../../assets/ocean/Contributions.svg";

const Contributions = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)}>
      <img src={ThanksSVG} alt="" style={{ marginBottom: "0px", height: "150px", width: "550px" }} />
    </div>
  );
};

export default Contributions;
