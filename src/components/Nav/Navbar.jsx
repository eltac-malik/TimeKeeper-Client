import React, { useState,useEffect } from "react";
import "./Navbar.css";
import axios from 'axios'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import Basket from "components/Basket/Basket";
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = useState("deactive-menu");
  const [cehckUser, setCheckUser] = useState("");
  const [prod,setProd] = useState([])
  const [bs,setBs] = useState("bs-n")

  const cnt = useSelector(state => state.basket.count)
  console.log(cnt);
  useEffect(()=>
  {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(resp=> setProd(resp.data))
  },[])

  useEffect(()=>
  {
    setCheckUser(JSON.parse(localStorage.getItem("Utoken")))
  },[])
  
  const navigate = useNavigate()

  const handleGo = (e)=>
  {
    navigate(e);
    setMenu("deactive-menu")
  }

  
  return (
    <div className="navbar">
      <i
        onClick={() => {
          menu === "deactive-menu" ? setMenu("active-menu") : setMenu("deactive-menu");
        }}
        className={`fa-solid fa-bars `}
      ></i>
      <div className="logo">
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b_150x.png?v=1559116234"
            alt=""
          />
        </Link>
      </div>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-li prod">
          <Link className="link " to="/">
            Brands<i className="fa-solid fa-angle-down"></i>
          </Link>
        <div className="dropdown-prod">
          <ul className='drop-ul'>
            {
              prod.map(e=>
              {
                return(
                  <li key={e.id} className='drop-li'><Link className='drop-link' to='/'>{e.name}</Link></li>
                )
              })
            }
          </ul>
        </div>
        </li>
        <li className="nav-li show">
          <Link className="link" to="/shop">
            Shop
          </Link>
        </li>
        <li className="nav-li">
          <Link className="link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-li">
          <Link  className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="basket">
      {
        cehckUser !== null ? <Link to='/profile' className='lnk'><i className="bi bi-person"></i></Link>:<Link to='/login' className='lnk'><i className="bi bi-person"></i></Link>
      }    
        <i onClick={()=> (bs==="bs-n"? setBs("bs-b"):setBs("bs-n"))} className="bi bi-cart3"></i>
        <Basket bs={bs}/>
        <span>{cnt&&cnt}</span>
      </div>
      <div className={` ${menu}`}>
          <ul className="resp-ul">
              <li className="resp-li">
                  <Link className='resp-link' to='/'>Home</Link>
              </li>
              <li className="resp-li">
                  <Link className='resp-link' to='/'>Brands</Link>
              </li>
              <li className="resp-li">
                  <Link className='resp-link' to='/shop'>Shop</Link>
              </li>
              <li className="resp-li">
                  <Link className='resp-link' to='/blog'>Blog</Link>
              </li>
              <li className="resp-li">
                  <Link className='resp-link' to='/contact'>Contact</Link>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default Navbar;
