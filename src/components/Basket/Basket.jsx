import React from 'react'
import './Basket.css'

function Basket({bs}) {
    return (
        <div className={`bskt ${bs}`}>
            

            <div className="totalsum">
                <h2>Total Price</h2>
                <h1 className='price'>555 <p className='val'>AZN</p></h1>
            </div>
        </div>
    )
}

export default Basket
