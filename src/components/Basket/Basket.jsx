import React,{useEffect,useState} from 'react'
import './Basket.css'
import {useSelector,useDispatch} from 'react-redux'
import {setBasket} from 'redux/basketSlice'

function Basket({bs}) {

    const [bsdata,setBsData] = useState([])
    const dispatch = useDispatch()
    const x = useSelector(state => state.basket.basket)
    console.log(x);
    
    useEffect(()=>
    {
        setBsData(JSON.parse(localStorage.getItem("basket")))
    },[])

    let sum = 0;

    bsdata.forEach(e=>{
        sum = sum+Number(e.discountPrice)
    })
    

    return (
        <div className={`bskt ${bs}`}>
                            {
                    x&&x.map((e)=>
                    {
                        return(
                            <div className='bs-item'>
                            <p className='item-name'>{e.name}</p>
                                <p className='item-name'>{e.discountPrice} AZN</p>
                                <div className="change">
                                <i className="fa-solid fa-plus fd"></i>
                                <p>0</p>
                                <i className="fa-solid fa-minus fd"></i>
                                </div>
                                <i onClick={()=>
                                {
                                    let newFilter = x.filter(z=> z.id != e.id)
                                    dispatch(setBasket(newFilter))
                                    localStorage.setItem("basket",newFilter.length !==0?newFilter:[])
                                }} class="fa-solid fa-trash-can"></i>
                            </div>
                        )
                    })
                }

            <div className="totalsum">
            TOTAL
                <h1 className='price'>{sum===0?0:sum}<p className='val'>AZN</p></h1>
            </div>
        </div>
    )
}

export default Basket
