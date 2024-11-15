import React from "react";
import { classNames } from "../../../../../utils/string";
import PleaseSVG from "../../../../../assets/ocean/Please.svg";

const Please = ({ className }: { className?: string }) => {
  return (
    
      <img src={PleaseSVG} alt="" style={{ marginTop: "0px", height: "300px", width: "700px" }}/>
  
  );
};

export default Please;
