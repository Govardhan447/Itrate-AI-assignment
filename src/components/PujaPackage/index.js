import PujaButton from '../reusableItems/PujaButton'
import {Link} from 'react-router-dom'
import './index.css'

const PujaPackage = () => {
  return (
    <div className="package-container">
      <div className="god-image-container">
        <img
          className="image-details"
          src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394089/Screenshot_2024-07-19_174656_jfqfot.png"
          alt="god img"
        />
      </div>
      <div className="package-details">
        <img
          className="image-details"
          src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721419269/Screenshot_2024-07-20_013038_bgdz1i.png"
          alt="details"
        />
        <Link to="/selectPujaPackage">
          <PujaButton buttonName={'Select Puja Package'} />
        </Link>
      </div>
    </div>
  )
}

export default PujaPackage
