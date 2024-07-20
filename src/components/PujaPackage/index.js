import PujaButton from '../reusableItems/PujaButton'
import SelectPujaItem from '../reusableItems/SelectPujaItem'
//import {Link} from 'react-router-dom'

import './index.css'

const PujaPackage = () => {
  return (
    <div className="package-container">
      <div className="puja-package-details-container">
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
          <a href="#packages" className="link-container">
            <PujaButton buttonName={'Select Puja Package'} />
          </a>
        </div>
      </div>
      <h1>Select Puja Package</h1>
      <div className="select-puja-packages-container" id="packages">
        <SelectPujaItem
          pujaType={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721443057/Screenshot_2024-07-20_074715_skgkag.png'
          }
        />
        <SelectPujaItem
          pujaType={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721443057/Screenshot_2024-07-20_074738_yjbomr.png'
          }
        />
        <SelectPujaItem
          pujaType={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721443057/Screenshot_2024-07-20_074804_uvoopm.png'
          }
        />
        <SelectPujaItem
          pujaType={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721443057/Screenshot_2024-07-20_074829_hoejhu.png'
          }
        />
      </div>
    </div>
  )
}

export default PujaPackage
