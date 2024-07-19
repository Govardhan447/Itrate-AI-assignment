import {GiByzantinTemple} from 'react-icons/gi'
import {FcCalendar} from 'react-icons/fc'
import {FaArrowRightLong} from 'react-icons/fa6'
import './index.css'

const NewPujas = props => {
  const {godImage, sepcialEvent, eventName, templeDetails, timeDetails} = props
  const onclickParticiapte = () => {}
  return (
    <div className='newpujas-container'>
      <img src={godImage} alt='godImg' />
      <p className='specail-event'>{sepcialEvent}</p>
      <h1>{eventName}</h1>
      <div className='description-container'>
        <GiByzantinTemple />
        <p>{templeDetails}</p>
      </div>
      <div className='description-container'>
        <FcCalendar />
        <p>{timeDetails}</p>
      </div>
      <button
        className='participate-btn'
        type='button'
        onClick={onclickParticiapte}
      >
        PARTICIPATE
        <span>{FaArrowRightLong}</span>
      </button>
    </div>
  )
}

export default NewPujas
