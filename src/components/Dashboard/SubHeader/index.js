import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { useExploreCreators } from "../../../Pages/ExploreCreators/useExploreCreators";
import ChartContainer from "../../ChartContainer";
import CommonModal from "../../Modal";
import Style from "./SubHeader.module.scss";
import { useDashboardHeader } from "./useDashboardHeader";
import Loader from "../../Loader";

const SubHeader = () => {
  const {
    status,
    isEdit,
    formik,
    showStats,
    showEditModal,
    handleStatsModal,
    handleEditModal,
    handleSaveEditCreator,
  } = useDashboardHeader();

  const {
    options,
    genderData,
    handleChange,
    selectedOption,
    chatAvailability,
  } = useExploreCreators();
  return (
    <div className={Style.subHead}>
      <h4>Manage creators</h4>
      <div className={Style.buttonGroup}>
        <button className={Style.status_btn} onClick={handleStatsModal}>
          <MdOutlineInsertChartOutlined />
          View Stats
        </button>
        <button className={Style.add_btn} onClick={handleEditModal}>
          <GoPlus />
          Add a new creator
        </button>
      </div>
      <CommonModal
        heading={"Stats"}
        isSelect
        show={showStats}
        handleClose={handleStatsModal}
        handleShow={handleStatsModal}
        handleChange={handleChange}
        options={options}
        body={
          <>
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
          </>
        }
      />
      <CommonModal
        heading={"Add a new creator"}
        handleClose={handleEditModal}
        handleShow={handleEditModal}
        show={showEditModal}
        body={
          <>
            <div className={Style.form_item}>
              <label htmlFor="name">Creator Name</label>
              <div
                className={`${Style.right} ${
                  formik?.errors?.name &&
                  formik?.touched?.name &&
                  Style.form_item_error
                }`}
              >
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  value={formik?.values?.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik?.errors?.name && formik?.touched?.name && (
                  <span className={Style.error}>{formik?.errors?.name}</span>
                )}
              </div>
            </div>
            <div className={Style.form_item}>
              <label htmlFor="email">Email</label>
              <div
                className={`${Style.right} ${
                  formik?.errors?.email &&
                  formik?.touched?.email &&
                  Style.form_item_error
                }`}
              >
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={formik?.values?.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik?.errors?.email && formik?.touched?.email && (
                  <span className={Style.error}>{formik?.errors?.email}</span>
                )}
              </div>
            </div>
            <div className={Style.form_item}>
              <label htmlFor="gender" name="gender" id="gender">
                Gender
              </label>
              <div className={`${Style.right}`}>
                <select
                  name="gender"
                  id="gender"
                  value={formik?.values?.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik?.errors?.gender &&
                    formik?.touched?.gender &&
                    Style.form_item_error
                  }`}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {formik?.errors?.gender && formik?.touched?.gender && (
                  <span className={Style.error}>{formik?.errors?.gender}</span>
                )}
              </div>
            </div>
            <div className={Style.form_item}>
              <span htmlFor="chat" name="chat" id="chat">
                Available for chat
              </span>
              <div className={Style.right}>
                <div className={Style.radio}>
                  <div className={Style.radio_item}>
                    <input
                      type="radio"
                      name="status"
                      id="active"
                      value="active"
                      className={Style.custom_radio}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik?.values?.status === "active"}
                    />
                    <label htmlFor="active" className={Style.custom_label}>
                      Active
                    </label>
                  </div>
                  <div className={Style.radio_item}>
                    <input
                      type="radio"
                      name="status"
                      id="inactive"
                      value="inactive"
                      className={Style.custom_radio}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik?.values?.status === "inactive"}
                    />
                    <label htmlFor="inactive" className={Style.custom_label}>
                      Inactive
                    </label>
                  </div>
                  {formik?.errors?.status && formik?.touched?.status && (
                    <span className={Style.error}>
                      {formik?.errors?.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              disabled={status === "loading"}
              className={Style.add_btn}
              onClick={() => {
                if (isEdit) {
                  handleSaveEditCreator();
                } else {
                  formik?.handleSubmit();
                }
              }}
            >
              {status === "loading" ? (
                <Loader />
              ) : (
                <>
                  <AiOutlinePlus />
                  {isEdit ? "Edit Creator" : "Add creator"}
                </>
              )}
            </button>
          </>
        }
      />
    </div>
  );
};

export default SubHeader;
