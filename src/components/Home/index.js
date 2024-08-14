import React from "react";
import Spotlight from "../Spotlight";
import ExpressSection from "../ExpressSection";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Creators from "../Creators";
import Footer from "../Footer";

const Home = () => {
  const ExpressSections = [
    {
      icon: <FaSmile />,
      heading: "Express yourself <br/> freely",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      type: "",
    },
    {
      icon: <IoRadioButtonOn />,
      heading: "Create and <br/> share",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      type: "share",
    },
    {
      icon: <MdLocationOn />,
      heading: "Share live <br/> location",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      type: "location",
    },
  ];
  return (
    <>
      <Spotlight />
      {ExpressSections?.map(({ heading, icon, description, type }) => (
        <ExpressSection
          icon={icon}
          heading={heading}
          description={description}
          type={type}
        />
      ))}

      <Creators />
      <Footer />
    </>
  );
};

export default Home;
