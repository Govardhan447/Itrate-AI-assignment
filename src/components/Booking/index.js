import TwoLines from "../reusableItems/usableCodes";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import "./index.css";

const Booking = () => {
  return (
    <div className="booking-bg-container">
      <p className="back-heading">
        <span className="left-arrow">
          <FaArrowLeftLong className="left-arrow" />
        </span>
        Enter Details for your puja
      </p>
      <div className="booking-container">
        <div className="booking-details-container">
          <TwoLines
            heading={"Your WhatsApp Number"}
            paragraph={
              "Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number."
            }
          />
          <div className="mobile-Number-container">
            <IoLogoWhatsapp className="icon-app" />
            <p>Mobile Number</p>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <label>I have a different number for calling</label>
          </div>
        </div>
        <div className="booking-details-container">
          <TwoLines
            heading={"Name of members participating in Puja"}
            paragraph={
              "Panditji will take this name along with gotra during the puja."
            }
          />
          <div className="input-item-container">
            <input
              type="text"
              className="input1"
              placeholder="First Member Name"
            />
            <input
              type="text"
              className="input1"
              placeholder="Second Member Name"
            />
          </div>
        </div>
        <div className="booking-details-container">
          <TwoLines
            heading={"Fill participant’s gotra"}
            paragraph={"Gotra will be recited during the puja."}
          />

          <input type="text" className="input2" />

          <div className="checkbox-container">
            <input type="checkbox" />
            <label>I have a different number for calling</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
