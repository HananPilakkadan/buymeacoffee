import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Style from "./ExpressSection.module.scss";
import { assets } from "../../assets/assets";
import UserReply from "../UserReply";

function ExpressSection({ heading, description, icon, type }) {
  return (
    <div
      className={`${type === "share" && Style.express_section_flip} ${
        Style.express_section
      }`}
    >
      <div className={Style.left_container}>
        <span>{icon}</span>
        <h3 dangerouslySetInnerHTML={{ __html: heading }} />
        <p>{description}</p>
        <button>
          Learn more <FaArrowRightLong />
        </button>
      </div>
      <div className={Style.rightBox}>
        {type === "share" ? (
          <>
            <div className={Style.share_phone}>
              <img src={assets?.share_phone} alt="Share" />
            </div>
          </>
        ) : type === "location" ? (
          <>
            <div
              className={Style.right_container}
              style={{ "--bg": "#faf4ff" }}
            >
              <div className={Style.image_container}>
                <img
                  src={assets?.men_user}
                  alt="User"
                  className={Style.men_user}
                />
              </div>
            </div>
            <div className={Style.map}>
              <img src={assets.map_icon} alt="Emoji" />
            </div>
            <div className={Style.voiceMessage}>
              <UserReply richColor reply={type === "location"} />
            </div>
            <div className={Style.Splash_reverse}>
              <img src={assets.splash_icon} alt="Splash" />
            </div>
          </>
        ) : (
          <>
            <div
              className={Style.right_container}
              style={{ "--bg": "#faf4ff" }}
            >
              <div className={Style.image_container}>
                <img src={assets?.lady_user} alt="User" />
              </div>
            </div>
            <div className={Style.emoji}>
              <img src={assets.emoji_bar} alt="Emoji" />
            </div>
            <div className={Style.voiceMessage}>
              <UserReply richColor />
            </div>
            <div className={Style.Splash}>
              <img src={assets.splash_icon} alt="Splash" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExpressSection;
