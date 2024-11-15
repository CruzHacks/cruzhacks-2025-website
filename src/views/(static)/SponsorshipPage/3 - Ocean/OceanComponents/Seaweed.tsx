import React from "react";
import { classNames } from "../../../../../utils/string";
import Seaweeded from "../../../../../assets/ocean/Seaweeded.svg";

const Seaweed = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("absolute", className)}>
      <img src={Seaweeded} alt="" />
    </div>
  );
};

export default Seaweed;
