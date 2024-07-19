import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme='dark'>
      <CarouselItem>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/ds1piowcn/image/upload/v1721394091/Screenshot_2024-07-19_174214_xpmgxl.png'
          alt='First slide'
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/ds1piowcn/image/upload/v1721394093/Screenshot_2024-07-19_174118_wfyhpa.png'
          alt='Second slide'
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className='d-block w-100'
          src='https://res.cloudinary.com/ds1piowcn/image/upload/v1721394090/Screenshot_2024-07-19_174146_mwgqqn.png'
          alt='Third slide'
        />
      </CarouselItem>
    </Carousel>
  )
}

export default DarkVariantExample
