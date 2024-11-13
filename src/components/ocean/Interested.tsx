import React from "react";
import { classNames } from "../../utils/string";
import InterestSVG from "../../assets/ocean/interested.svg";

const Interested = ({ className }: { className?: string }) => {
  return (
   <img src={InterestSVG} alt="" style={{ marginTop: "0px", height: "160px", width: "700px" }}/>

  );
};

export default Interested;
