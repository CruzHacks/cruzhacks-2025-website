import React from "react";
import { classNames } from "../../utils/string";
import SupportSVG from "../../assets/ocean/Support.svg";

const Support = ({ className }: { className?: string }) => {
  return (
  
      <img src={SupportSVG} alt="" style={{ marginTop: "100px", height: "50px", width: "600px",  marginBottom: "0px" }} />
   
  );
};

export default Support;
