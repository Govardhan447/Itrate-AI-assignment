import ExploreItem from '../reusableItems/ExploreItem'

import './index.css'

const Home = () => {
  return (
    <div className="home-bg-container">
      <div className="home-top-container">
        <div className="home-img-details-container">
          <img
            className="puja-description-img"
            src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394088/Screenshot_2024-07-19_173451_kr3zvy.png"
            alt="logo"
          />
        </div>
        <div className="home-img-details-container">
          <img
            className="puja-description-img"
            src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394089/Screenshot_2024-07-19_173554_l6vgqe.png"
            alt="logo"
          />
        </div>
      </div>
      <h1 className="heading">Explore Sri Mandir</h1>
      <div className="explore-container">
        <ExploreItem
          image={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394091/Screenshot_2024-07-19_173641_ajwm6s.png'
          }
          paragraph={'Talking with Astrologies'}
        />
        <ExploreItem
          image={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394091/Screenshot_2024-07-19_173700_caxbmz.png'
          }
          paragraph={'Listen to Divine Music'}
        />
        <ExploreItem
          image={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394091/Screenshot_2024-07-19_173825_rn0nwg.png'
          }
          paragraph={'Read The Panchang'}
        />
      </div>
    </div>
  )
}

export default Home
