import React,{useEffect,useState} from 'react'
import '../assets/css/ProductDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function ProductDetails() {

    let {id} = useParams();
    const [user,setUser] = useState(undefined)

    useEffect(()=>
    {
        axios.get(`http://ejtacmalik-001-site1.btempurl.com/api/Products/${id}`)
        .then(resp=> setUser(resp.data))
    },[])

    console.log(user);
    

    return (
        <div className='p-details'>
            salam
        </div>
    )
}

export default ProductDetails
