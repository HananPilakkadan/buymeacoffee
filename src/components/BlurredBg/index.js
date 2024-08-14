import React from "react";
import Style from "./BlurredBg.module.scss";

const BlurredBg = () => {
  return (
    <div className={Style.blurredbg}>
      <span className={Style.bg_one}></span>
      <span className={Style.bg_two}></span>
      <span className={Style.bg_three}></span>
    </div>
  );
};

export default BlurredBg;
