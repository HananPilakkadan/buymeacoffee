import React from "react";
import Style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={Style.loader}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
