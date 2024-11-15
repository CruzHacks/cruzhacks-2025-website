import React from "react";
import { classNames } from "../../../../../utils/string";
import NextStepsSVG from "../../../../../assets/ocean/NEXTSTEPS.svg";

const NextSteps = ({ className }: { className?: string }) => {
  return (
      <img src={NextStepsSVG} alt="" style={{ marginTop: "0px", height: "250px", width: "350px", marginBottom: "0px" }}/>
  );
};

export default NextSteps;
