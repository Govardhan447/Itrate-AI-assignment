//import DarkVariantExample from '../reusableItems/DarkVariantExample'

import NewPujas from '../reusableItems/NewPujas'

import './index.css'
const Puja = () => {
  return (
    <div className='puja-bg-container'>
      <h1 className='heading'>
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India
        with Sri Mandir
      </h1>
      <NewPujas
        godImage={
          'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394089/Screenshot_2024-07-19_174428_lx5ywh.png'
        }
        specialEvent={'SHANTI SIGNAPURAM SPECIAL'}
        eventName={'Shani Saade Santi peeda Shanti Mahapuja Til Tel Abhishekam'}
        templeDetials={'Shree Shani Deva Temple, Maharastra state'}
        timeDetails={'20 July Sunday Ashada Shukula Chavithi'}
      />
    </div>
  )
}

export default Puja
