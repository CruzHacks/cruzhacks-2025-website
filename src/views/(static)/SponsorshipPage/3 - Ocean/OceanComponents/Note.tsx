import React from "react";
import { classNames } from "../../../../../utils/string";
import Note from "../../../../../assets/ocean/NOTE.svg";

const Notes = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)}>
      <img src={Note} alt="" style={{ marginTop: "0px", height: "150px", width: "750px" }} />
    </div>
  );
};

export default Notes;
