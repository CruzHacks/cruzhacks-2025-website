import React from "react";
import { classNames } from "../../../../../utils/string";
import Seaweeded from "../../../../../assets/ocean/Seaweeded.svg";

const Seaweed = ({ className }: { className?: string }) => {
  return (
      <img src={Seaweeded} alt="" className="-mt-40"/>
  );
};

export default Seaweed;
