import React, { useState, useEffect } from "react";
import "assets/css/Shop.css";
import { Link } from "react-router-dom";
import ShopCard from 'components/ShopCard/ShopCard'

function Shop() {
  const [inp,setInp] = useState("") 
  const [vendor, setVendor] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);


  

  const handleVendor = (e) => {
    vendor.includes(e)
      ? setVendor(vendor.filter((x) => x != e && x != undefined))
      : setVendor([...vendor, e]);
  };
  let z = vendor.filter((e) => e != undefined);

  const handleColor = (e) => {
    color.includes(e)
      ? setColor(color.filter((x) => x != e && x != undefined))
      : setColor([...color, e]);
  };
  const handleSize = (e) => {
    size.includes(e)
      ? setSize(size.filter((x) => x != e && x != undefined))
      : setSize([...size, e]);
  };

  return (
    <div className="shop">
      <div className="route">
        <p className="route-path">
          <Link className="link-b" to="/">
            Home
          </Link>{" "}
          <i className="fa-solid fa-angle-right btw"></i>{" "}
          <Link className="link-b crnt" to="/shop">
            Shop
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
            <h3 className="search-title">Categories</h3>
            <div className="search-data">
              <p className="search-param">salam</p>
              <p className="search-param">salam</p>
              <p className="search-param">salam</p>
            </div>
          </div>
          <div className="search-part adv">
            <h3 className="search-title">Vendors</h3>
            <div className="search-data">
              <label
                onClick={(e) => handleVendor(e.target.value)}
                htmlFor="1"
                className="search-param"
              >
                <input className="chck" value="vusal" id="1" type="checkbox" />
                vusal
              </label>
              <label
                onClick={(e) => handleVendor(e.target.value)}
                htmlFor="2"
                className="search-param"
              >
                <input className="chck" value="eltac" id="2" type="checkbox" />
                eltac
              </label>
              <label
                onClick={(e) => handleVendor(e.target.value)}
                htmlFor="3"
                className="search-param"
              >
                <input className="chck" value="isaq" id="3" type="checkbox" />
                isaq
              </label>
              <label
                onClick={(e) => handleVendor(e.target.value)}
                htmlFor="4"
                className="search-param"
              >
                <input className="chck" value="cina" id="4" type="checkbox" />
                cina
              </label>
            </div>
          </div>

          <div className="search-part adv">
            <h3 className="search-title">Color</h3>
            <div className="search-data flex-data">
              <label
                onClick={(e) => handleColor(e.target.value)}
                htmlFor="5"
                className="search-param flex-lab"
              >
                <input className="chck" value="vusal" id="5" type="checkbox" />
                vusal
              </label>
              <label
                onClick={(e) => handleColor(e.target.value)}
                htmlFor="6"
                className="search-param flex-lab"
              >
                <input className="chck" value="eltac" id="6" type="checkbox" />
                eltac
              </label>
              <label
                onClick={(e) => handleColor(e.target.value)}
                htmlFor="7"
                className="search-param flex-lab"
              >
                <input className="chck" value="isaq" id="7" type="checkbox" />
                isaq
              </label>
              <label
                onClick={(e) => handleColor(e.target.value)}
                htmlFor="8"
                className="search-param flex-lab"
              >
                <input className="chck" value="cina" id="8" type="checkbox" />
                cina
              </label>
            </div>
          </div>


          <div className="search-part adv">
            <h3 className="search-title">Size</h3>
            <div className="search-data flex-data">
              <label
                onClick={(e) => handleSize(e.target.value)}
                htmlFor="9"
                className="search-param flex-lab"
              >
                <input className="chck" value="vusal" id="9" type="checkbox" />
                vusal
              </label>
              <label
                onClick={(e) => handleSize(e.target.value)}
                htmlFor="10"
                className="search-param flex-lab"
              >
                <input className="chck" value="eltac" id="10" type="checkbox" />
                eltac
              </label>
              <label
                onClick={(e) => handleSize(e.target.value)}
                htmlFor="11"
                className="search-param flex-lab"
              >
                <input className="chck" value="isaq" id="11" type="checkbox" />
                isaq
              </label>
              <label
                onClick={(e) => handleSize(e.target.value)}
                htmlFor="12"
                className="search-param flex-lab"
              >
                <input className="chck" value="cina" id="12" type="checkbox" />
                cina
              </label>
            </div>
          </div>

       
        </div>
        <ShopCard/>
    
      </div>
  


  
  
    </div>
  );
}

export default Shop;