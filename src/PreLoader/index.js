import React from "react";
import Style from "./Loader.module.scss";
import Loader from "../components/Loader";

const PreLoader = () => {
  return (
    <div className={Style.Loader}>
      <Loader />
    </div>
  );
};

export default PreLoader;
