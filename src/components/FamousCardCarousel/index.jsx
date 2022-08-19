import React,{useEffect,useState} from "react";
import "./FamousCard.css";
import axios from 'axios'
import Slider from "react-slick";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setBasket} from 'redux/basketSlice'

function Index() {

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

  const [fam,setFam] = useState([]);
  
  useEffect(()=>
  {
    axios.get("http://ejtacmalik-001-site1.btempurl.com/api/Products/getall/1")
    .then(resp=> setFam(resp.data.items))
  },[])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBasket = (e)=>
  {
    if(JSON.parse(localStorage.getItem("Utoken"))===null)
    {
      navigate("/login")
    }
    else
    {
        let x = JSON.parse(localStorage.getItem("basket"))
        localStorage.setItem("basket",JSON.stringify([...x,e]))
        dispatch(setBasket(localStorage.getItem("basket")))
    }
  }

  return (
    <div className="famous">
      <Slider className='card-slide' {...cardSettings}>

        {
          fam&&fam.map(e=>
            {
              return(
                <div key={e.id} className='card-fam'>
                <div className="blck">      
                <div className="cards-img">
                <img src={`http://ejtacmalik-001-site1.btempurl.com/downloads/${e.secondImage}`} alt=""/>
                </div>
                </div>
                <h3>{e.name}</h3>
                <div className="add-crd">
                <p onClick={()=> handleBasket(e)}>Add to Cart</p>
                </div>
              </div>
              )
            })
        }
      </Slider>
    </div>
  );
}

export default Index;
