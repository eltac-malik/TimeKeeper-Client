import React from "react";
import Slider from "react-slick";
import './Slider.css'

function SliderCarousel() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="slider-item">
            <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Slider-2_f7becb67-5722-4f24-810d-d8ad5fa7483e.jpg?v=1559368812" alt=""/>
        </div>
        <div className="slider-item q2">
            <img src="https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        </div>
        <div className="slider-item q3">
            <img src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        </div>
      </Slider>
    </>
  );
}

export default SliderCarousel;
