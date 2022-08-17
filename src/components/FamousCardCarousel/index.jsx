import React from "react";
import "./FamousCard.css";
import Slider from "react-slick";

function index() {
      

  var cardSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="famous">
      <Slider className='card-slide' {...cardSettings}>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
        <div className='card-fam'>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
}

export default index;
