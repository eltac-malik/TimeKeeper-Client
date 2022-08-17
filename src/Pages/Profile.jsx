import React,{useEffect,useState} from 'react'
import 'assets/css/Profile.css'
import {Formik,Form,Field} from 'formik'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useJwt,isExpired,decodeToken } from "react-jwt";

function Profile() {

    const [pd,setPd] = useState(null)

        
    useEffect(()=>
    {
        setPd(JSON.parse(localStorage.getItem("Utoken")))
    },[])

    
    let x = decodeToken(pd)
    console.log(x&&x.email);

    return (
        <div className='profile'>
            <div className="p-div">
                <Formik
                initialValues={{
                    prname:"",
                    prsurname:"",
                    prmail:x&&x.email,
                    prphone:""
                }}
                >
                    <Form className='p-form'>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Name</label>
                        <Field className='p-inp' id='p-name' name='prname'/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Surname</label>
                        <Field className='p-inp' id='p-name' name='prsurname' />
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">E-mail</label>
                        <Field className='p-inp' id='p-name' name='prmail'/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Phone</label>
                        <Field className='p-inp' id='p-name' name='prphone'  />
                        </div>
                        <input type="submit" value='Edit' className='p-sub'/>
                        
                    </Form>
                </Formik>
                        <Link className='ch-psw' to='/reset'>Change Password</Link>
            </div>
        </div>
    )
}

export default Profile
