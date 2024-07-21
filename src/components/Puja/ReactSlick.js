import Slider from "react-slick";

import "./index.css";

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,

    dotsClass: "slick-dots",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            className="carosel-img"
            src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394091/Screenshot_2024-07-19_174214_xpmgxl.png"
            alt="First slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394093/Screenshot_2024-07-19_174118_wfyhpa.png"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394090/Screenshot_2024-07-19_174146_mwgqqn.png"
            alt="Third slide"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlick;
