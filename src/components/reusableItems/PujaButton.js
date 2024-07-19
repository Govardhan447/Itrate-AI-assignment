import './index.css'

import {FaArrowRightLong} from 'react-icons/fa6'
import './index.css'
const PujaButton = props => {
  const {buttonName} = props
  const arrowRight = <FaArrowRightLong />
  return (
    <button className="participate-btn" type="button">
      {buttonName}
      <span className="right-arrow">{arrowRight}</span>
    </button>
  )
}

export default PujaButton
