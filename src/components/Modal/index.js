import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";

import "./modal.scss";
import PieChart from "../PieChart";
import { useExploreCreators } from "../../Pages/ExploreCreators/useExploreCreators";
import ChartContainer from "../ChartContainer";

const StatusModal = ({
  show,
  handleClose,
  selectedOption,
  handleChange,
  options,
  creators,
  maleCount,
  femaleCount,
  genderData,
  chatAvailability,
}) => {
  console.log(selectedOption, "data");
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header>
        <div className="header-left">
          <Modal.Title>Stats</Modal.Title>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            defaultValue={options[0]}
          />
        </div>
        <Button
          variant="link"
          className="custom-close-button"
          onClick={handleClose}
        >
          <IoMdClose />
        </Button>
      </Modal.Header>
      <Modal.Body>
        {selectedOption?.value === "male" ? (
          <ChartContainer
            data={genderData}
            color={["#9bdfc4", "#62b2fd"]}
            heading="Gender Distribution"
          />
        ) : (
          <ChartContainer
            data={chatAvailability}
            color={["#9bdfc4", "#98cb82"]}
            heading="Gender Distribution"
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default StatusModal;
