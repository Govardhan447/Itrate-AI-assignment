import {GiByzantinTemple} from 'react-icons/gi'
import {FcCalendar} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import PujaButton from './PujaButton'

import './index.css'

const NewPujas = props => {
  const {godImage, sepcialEvent, eventName, templeDetails, timeDetails} = props

  return (
    <div className="newpujas-container">
      <img className="god-image" src={godImage} alt="godImg" />
      <p className="specail-event">{sepcialEvent}</p>
      <h1 className="event-heading">{eventName}</h1>
      <div className="description-container">
        <GiByzantinTemple className="icon" />
        <p>{templeDetails}</p>
      </div>
      <div className="description-container">
        <FcCalendar className="icon" />
        <p>{timeDetails}</p>
      </div>
      <Link className="link-container" to="/pujapackage">
        <PujaButton className="button" buttonName={'PARTICIPATE'} />
      </Link>
    </div>
  )
}

export default NewPujas
