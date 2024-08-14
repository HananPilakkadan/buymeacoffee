import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import BlurredBg from "../BlurredBg";
import Header from "../Header";
import Loader from "../Loader";
import Style from "./Spotlight.module.scss";
import PhoneScreen from "../PhoneScreen";

const Spotlight = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: async (values, { setErrors, setFieldValue }) => {
      if (values?.phone?.length == 0) {
        toast.error("Please enter mobile number");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let validation = /^[6-9]\d{9}$/;

      if (validation.test(values?.phone)) {
        toast.success("We will contact you soon!");
        setFieldValue("phone", "");
      } else {
        toast.error("Invalid mobile number");
      }
    },
  });
  return (
    <>
      <Header />
      <main className={Style.Home}>
        <div className="wrapper">
          <h4 className="title">
            Stay close to your <br /> <span>favorite people.</span>
          </h4>

          <div className={Style.inputBox}>
            <form onSubmit={formik?.handleSubmit}>
              <input
                id="phone"
                name="phone"
                type="number"
                pattern="[0-9]*"
                placeholder="Enter your phone number"
                title="Enter numbers only"
                onChange={formik.handleChange}
                value={formik.values.phone}
                min={0}
              />
              <button type="submit" onClick={formik.handleChange}>
                {formik.isSubmitting ? <Loader /> : "Get started"}
              </button>
            </form>
          </div>
        </div>

        <PhoneScreen />
      </main>
      <BlurredBg />
    </>
  );
};

export default Spotlight;
