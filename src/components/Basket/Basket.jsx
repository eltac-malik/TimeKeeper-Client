import React,{useEffect,useState} from 'react'
import './Basket.css'
import {useSelector} from 'react-redux'

function Basket({bs}) {

    const [bsdata,setBsData] = useState([])

    useEffect(()=>
    {
        setBsData(JSON.parse(localStorage.getItem("basket")))
    },[])

    console.log(bsdata);
    

    return (
        <div className={`bskt ${bs}`}>
                            {
                    bsdata&&bsdata.map((e)=>
                    {
                        return(
                            <p>{e.name}</p>
                        )
                    })
                }

            <div className="totalsum">
                <h1 className='price'>555 <p className='val'>AZN</p></h1>
            </div>
        </div>
    )
}

export default Basket
