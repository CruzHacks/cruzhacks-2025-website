import React from "react";
import { classNames } from "../../../../../utils/string";
import CheckImg from "../../../../../assets/ocean/SponsorCheckList.svg";

const CheckList = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)}>
      <img src={CheckImg} alt="" className="sm:w-screen" />
    </div>
  );
};

export default CheckList;
