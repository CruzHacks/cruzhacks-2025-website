import React from "react";
import { classNames } from "../../utils/string";
import packages from "../../assets/ocean/SPONSORSHIPPACKAGES.png";

const Package = ({ className }: { className?: string }) => {
  return (
   
      <img src={packages} alt="" style={{ marginTop: '170px', marginBottom: "20px", width: '50%' }} />

  );
};

export default Package;
