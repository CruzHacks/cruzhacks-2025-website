import React from "react";
import { classNames } from "../../../../../utils/string";
import Seaweeded from "../../../../../assets/ocean/Seaweeded.svg";

const Seaweed = ({ className }: { className?: string }) => {
  return (
      <img src={Seaweeded} alt="" width={"1920px"} height={"1080px"} className={classNames("absolute", className)}/>
  );
};

export default Seaweed;
