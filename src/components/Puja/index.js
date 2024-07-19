//import DarkVariantExample from '../reusableItems/DarkVariantExample'

import NewPujas from '../reusableItems/NewPujas'

import './index.css'
const Puja = () => {
  return (
    <div className="puja-bg-container">
      <h1 className="heading">
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India
        with Sri Mandir
      </h1>
      <div className="select-puja-container">
        <NewPujas
          godImage={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394089/Screenshot_2024-07-19_174428_lx5ywh.png'
          }
          sepcialEvent={'SHANTI SIGNAPURAM SPECIAL'}
          eventName={
            'Shani Saade Santi peeda Shanti Mahapuja Til Tel Abhishekam'
          }
          templeDetails={'Shree Shani Deva Temple, Maharastra state'}
          timeDetails={'20 July Sunday Ashada Shukula Chavithi'}
        />
        <NewPujas
          godImage={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394089/Screenshot_2024-07-19_174502_qe3vm3.png'
          }
          sepcialEvent={'SHANTI SIGNAPURAM SPECIAL'}
          eventName={
            'Shani Saade Santi peeda Shanti Mahapuja Til Tel Abhishekam'
          }
          templeDetails={'Shree Shani Deva Temple, Maharastra state'}
          timeDetails={'20 July Sunday Ashada Shukula Chavithi'}
        />
        <NewPujas
          godImage={
            'https://res.cloudinary.com/ds1piowcn/image/upload/v1721394088/Screenshot_2024-07-19_174544_lfkjag.png'
          }
          sepcialEvent={'SHANTI SIGNAPURAM SPECIAL'}
          eventName={
            'Shani Saade Santi peeda Shanti Mahapuja Til Tel Abhishekam'
          }
          templeDetails={'Shree Shani Deva Temple, Maharastra state'}
          timeDetails={'20 July Sunday Ashada Shukula Chavithi'}
        />
      </div>
    </div>
  )
}

export default Puja
