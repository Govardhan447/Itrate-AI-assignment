import {FaArrowLeftLong} from 'react-icons/fa6'
import {IoLogoWhatsapp} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'
import PujaButton from './PujaButton'

const SelectPujaItem = props => {
  const {pujaType} = props
  const onsubmitForm = event => {
    event.preventDefault()
  }

  return (
    <div className="select-puja-prize-container">
      <img src={pujaType} alt="select puja" />
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button className="trigger-button" type="button">
              <PujaButton buttonName={'PARTICIPATE'} />
            </button>
          }
        >
          <form className="trigger-popup-container" onSubmit={onsubmitForm}>
            <p className="popup-paragraph-line">
              <FaArrowLeftLong /> fill your Details for Puja
            </p>
            <h1 className="popup-heading">Enter Your whatsapp Mobile number</h1>
            <p className="popup-paragraph">
              Your Puja booking updates like Puja Photos, Videos and other
              details will be sent on WhatsApp on below number.
            </p>
            <div className="input-container">
              <IoLogoWhatsapp className="icon-app" />
              <p className="nine-one">+91</p>
              <input className="input" type="text" placeholder="Your Mobile Number" />
            </div>
            <h1 className="popup-heading">Enter Your Name</h1>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Your full name"
              />
            </div>
            <Link className="link-container" to="/reviewBooking">
              <button type="submit" className="next-btn">
                Next
              </button>
            </Link>
          </form>
        </Popup>
      </div>
    </div>
  )
}

export default SelectPujaItem
