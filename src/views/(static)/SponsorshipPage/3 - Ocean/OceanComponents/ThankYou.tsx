import React from "react";
import { classNames } from "../../../../../utils/string";
import ThanksSVG from "../../../../../assets/ocean/THANKYOU.svg";

const ThankYou = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)}>
      <img src={ThanksSVG} alt="" style={{ height: "200px", width: "600px",  marginTop: "100px" }} />
    </div>
  );
};

export default ThankYou;
