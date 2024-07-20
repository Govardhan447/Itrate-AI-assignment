
import TwoLines from "../reusableItems/usableCodes"
import {FaArrowLeftLong} from 'react-icons/fa6'

import "./index.css"

const Booking =() =>{
    return(
        <div className="booking-bg-container">
            <div className="book-backward-container">
                <FaArrowLeftLong/>
                <p className="back-heading">Enter Details for your puja</p>
            </div>
            <div className="booking-details-container">
                <div>
                <TwoLines heading={"Your WhatsApp Number"} paragraph={"Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number."}/>
                </div>
            </div>
        </div>
    )
}

export default Booking