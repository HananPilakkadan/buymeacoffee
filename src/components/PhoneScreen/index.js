import React from "react";
import Style from "./PhoneScreen.module.scss";
import { assets } from "../../assets/assets";
import UserReply from "../UserReply";

const PhoneScreen = () => {
  return (
    <div className={Style.PhoneScreen}>
      <div className={Style.screen}>
        <img src={assets?.Main_screen} alt="Phone Screen" />
      </div>
      <div className={Style.container}>
        <UserReply />
      </div>
      <div className={Style.containerGift}>
        <UserReply type="gift" />
      </div>
    </div>
  );
};

export default PhoneScreen;
