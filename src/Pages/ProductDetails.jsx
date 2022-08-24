import React,{useEffect,useState} from 'react'
import '../assets/css/ProductDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import {useNavigate} from 'react-router-dom'

function ProductDetails() {

  const navigate = useNavigate()

  const handleBack = ()=>
  {
    navigate("/shop")
  }

    var aboutSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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


      let {id} = useParams();
      let path = 'http://ejtacmalik-001-site1.btempurl.com/downloads/'
      const [prod,setProd] = useState(undefined)
      const [mainImg,setMainImg] = useState(prod&&prod.mainImage) 

    useEffect(()=>
    {
        axios.get(`http://ejtacmalik-001-site1.btempurl.com/api/Products/${id}`)
        .then(resp=> 
            {
                setProd(resp.data)
                setMainImg(`${path}${resp.data.mainImage}`)
            })
    },[])
    

    return (
        <div className='p-details'>
            
            <div className="item-det">
                <div className="item-slid">
                    <div className="itm-img">
                        <img src={`${mainImg}`} alt=""/>
                    </div>
                 
                    <div className="itm-slds">
                        <Slider className='about-slid' {...aboutSettings}>
                            <div className="prod-img"  onClick={(e)=>{
                                let x = document.getElementById("img1")
                                setMainImg(x.getAttribute("src")) }}>
                        <img id='img1' src={`http://ejtacmalik-001-site1.btempurl.com/downloads/${prod&&prod.mainImage}`} alt=""/>
                            </div>
                            <div className="prod-img"  onClick={(e)=>{
                                let x = document.getElementById("img2")
                                setMainImg(x.getAttribute("src")) }}>
                        <img id='img2' src={`http://ejtacmalik-001-site1.btempurl.com/downloads/${prod&&prod.secondImage}`} alt=""/>
                            </div>
                        </Slider>
                    </div>
                    
                </div>
                                              
                <div className="item-content">
                  <div className="itm-content">
                    <h1 className='prod-title'>{prod&&prod.name}</h1>
                    <div className="prod-price">
                      <p className='item-price'>{prod&&prod.price} AZN</p>
                      <p className='prod-dis'>{prod&&prod.price} AZN</p>
                    </div>
                    <p className='prod-desc'>{prod&&prod.description}</p>
                  <div className="det-btn">
                    <p className='det-add'>Add Cart</p>
                    <p onClick={()=> handleBack()}>⬅ Go Back</p>
                  </div>
                  </div>
                </div>
           
            </div>
            
        </div>
    )
}

export default ProductDetails
