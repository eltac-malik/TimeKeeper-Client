import React, { useState, useEffect } from "react";
import "assets/css/Shop.css";
import { Link } from "react-router-dom";
import ShopCard from 'components/ShopCard/ShopCard'

function Shop() {
  const [inp,setInp] = useState("") 
  const [vendor, setVendor] = useState([]);


  const handleTag = (e) => {
    vendor.includes(e)
      ? setVendor(vendor.filter((x) => x != e && x != undefined))
      : setVendor([...vendor, e]);
  };


  return (
    <div className="shop">
      <div className="route">
        <p className="route-path">
          <Link className="link-b" to="/">
            Home
          </Link>{" "}
          <i className="fa-solid fa-angle-right btw"></i>{" "}
          <Link className="link-b crnt" to="/blog">
            Blog
          </Link>
        </p>
      </div>

      <div className="shop-content">
        <div className="search-bar">
          <div className="search-part">
            <h3 className="search-title">Search</h3>
            <input onChange={(e)=> setInp(e.target.value)} className="inp-search" type="text" />
          </div>

          <div className="search-part adv">
            <h3 className="search-title">Custom Menu</h3>
            <div className="search-data">
              <p className="search-param">salam</p>
              <p className="search-param">salam</p>
              <p className="search-param">salam</p>
            </div>
          </div>
          <div className="search-part adv">
            <h3 className="search-title">Tags</h3>
            <div className="search-data">
              <label
                onClick={(e) => handleTag(e.target.value)}
                htmlFor="1"
                className="search-param"
              >
                <input className="chck" value="vusal" id="1" type="checkbox" />
                vusal
              </label>
              <label
                onClick={(e) => handleTag(e.target.value)}
                htmlFor="2"
                className="search-param"
              >
                <input className="chck" value="eltac" id="2" type="checkbox" />
                eltac
              </label>
              <label
                onClick={(e) => handleTag(e.target.value)}
                htmlFor="3"
                className="search-param"
              >
                <input className="chck" value="isaq" id="3" type="checkbox" />
                isaq
              </label>
              <label
                onClick={(e) => handleTag(e.target.value)}
                htmlFor="4"
                className="search-param"
              >
                <input className="chck" value="cina" id="4" type="checkbox" />
                cina
              </label>
            </div>
          </div>

       
        </div>

      </div>
  


  
  
    </div>
  );
}

export default Shop;
