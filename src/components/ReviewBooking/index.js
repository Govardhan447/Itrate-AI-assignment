import "./index.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewBooking = () => {
  return (
    <div className="review-booking-bg-container">
      <div className="navigate-bar">
        <FaArrowLeftLong className="left-arrow" />
        <h1 className="navigate-heading">Review Booking</h1>
      </div>
      <div className="amount-details-other-details-container">
        <div className="amount-details-container">
          <div className="amount-show">
            <h1 className="amount-heading">
              Mahavidya Purnima Special Maha bagalamukhi...
            </h1>
            <p className="family">Family + Bhog</p>
            <p className="rupees">Rs.2001 /-</p>
          </div>
          <div className="apply-caption">
            <p className="capiton">Apply Caption</p>
            <FaAngleRight className="right-arrow" />
          </div>
          <h1 className="amount-heading">Bill Details</h1>
          <div className="apply-caption">
            <p className="family">Family + Bhog</p>
            <p className="total-rupees">Rs.2001 /-</p>
          </div>
          <div className="apply-caption">
            <p className="family">Total Amount</p>
            <p className="total-rupees">Rs.2001 /-</p>
          </div>
          <Link to="/booking" className="continue-btn">
            <div>
              <p className="rupees">Rs.2001 /-</p>
              <p className="family-btn">Family + Bhog</p>
            </div>
            <div className="text-container">
              <p className="family-btn">Continue</p>
              <FaArrowRightLong />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;
