import React from "react";
import { classNames } from "../../../utils/string";
import CheckImg from "../../../assets/ocean/BrandAwareness.svg";

const BrandAwareness = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)}>
      <img src={CheckImg} alt="" style={{ height: "90%", width: "90%" }} />
    </div>
  );
};

export default BrandAwareness;
