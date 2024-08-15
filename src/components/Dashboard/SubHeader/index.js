import React, { useState } from "react";
import Style from "./SubHeader.module.scss";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import StatusModal from "../../Modal";
import { useExploreCreators } from "../../../Pages/ExploreCreators/useExploreCreators";

const SubHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    handleChange,
    options,
    selectedOption,
    creators,
    maleCount,
    femaleCount,
    genderData,
    chatAvailability,
  } = useExploreCreators();
  return (
    <div className={Style.subHead}>
      <h4>Manage creators</h4>
      <div className={Style.buttonGroup}>
        <button className={Style.status_btn} onClick={() => handleShow(true)}>
          <MdOutlineInsertChartOutlined />
          View Stats
        </button>
        <button className={Style.add_btn}>
          <GoPlus />
          Add a new creator
        </button>
      </div>
      <StatusModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        handleChange={handleChange}
        options={options}
        selectedOption={selectedOption}
        creators={creators}
        femaleCount={femaleCount}
        maleCount={maleCount}
        genderData={genderData}
        chatAvailability={chatAvailability}
      />
    </div>
  );
};

export default SubHeader;
