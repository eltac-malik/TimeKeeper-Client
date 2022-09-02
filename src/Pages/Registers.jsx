import React,{useState} from 'react'
import 'assets/css/Registers.css'
import {Formik,Form,Field} from 'formik'
import {useNavigate} from 'react-router-dom'
import regsVal from 'validation/regsValidation'
import axios from 'axios'
import Load from 'components/Loader/Loader'

function Registers() {
    const navigate = useNavigate()
    const [load,setLoad] = useState(false)

    return (
        <div className='reg-form'>
                   {load&& <Load/>}
                <Formik
                initialValues={
                    {
                        name:'',
                        surname:"",
                        username:"",
                        phone:"",
                        email:"",
                        password:"",
                        confirm:""
                    }
                }
                validationSchema={regsVal}
                onSubmit={(x)=>
                {
                    let newuser = 
                    {
                        username:x.username,
                        name:x.name,
                        surname:x.surname,
                        email:x.email,
                        phoneNumber:x.phone,
                        password:x.password
                    }
                    setLoad(true)
                    let url = "http://ejtacmalik-001-site1.btempurl.com/api/Accounts/register"
                    fetch(url,{
                        method:'post',
                        headers:
                        {
                            "Content-Type": "application/json",
                        },
                        body:JSON.stringify(newuser)
                    }).then(resp=> 
                        {
                        })

                    setTimeout(() => {
                        setLoad(false) 
                    }, 4000);

                }}
                >
                    {({errors,touched})=>
                    (

                    <Form className="reg-part">

                    <div className="naming">
                        <div className="rg-field">
                            <label className='rg-lbl' htmlFor="name">Name</label>
                            <Field className='rg-inp' id='name' placeholder="Enter your name" name='name'/>
                            {errors.name&&touched.name?<div>{errors.name}</div>:null}
                        </div>
                        <div className="rg-field">
                            <label className='rg-lbl' htmlFor="surname">Surname</label>
                            <Field className='rg-inp' id='surname' placeholder="Enter your surname" name='surname'/>
                            {errors.surname&&touched.surname?<div>{errors.surname}</div>:null}
                        </div>
                        <div className="rg-field">
                            <label className='rg-lbl' htmlFor="username">Username</label>
                            <Field className='rg-inp' id='username'  placeholder="Enter your Username" name='username'/>
                            {errors.username&&touched.username?<div>{errors.username}</div>:null}
                        </div>
                        <div className="rg-field">
                            <label className='rg-lbl' htmlFor="phone">Phone Number</label>
                            <Field className='rg-inp' id='phone' placeholder="Enter your name" name='phone'/>
                            {errors.phone&&touched.phone?<div>{errors.phone}</div>:null}
                        </div>
                    </div>

                    <div className="numing">
                    <div className="rg-field">
                            <label className='rg-lbl' htmlFor="name">E-mail</label>
                            <Field className='rg-inp' id='email' placeholder="Enter your name" name='email'/>
                            {errors.email&&touched.email?<div>{errors.email}</div>:null}
                        </div>
                        <div className="rg-field">
                            <label className='rg-lbl' htmlFor="password">Password</label>
                            <Field className='rg-inp' id='password' placeholder="Enter your surname" name='password'/>
                            {errors.password&&touched.password?<div>{errors.password}</div>:null}
                        </div>
                        <div className="rg-field">
                            <label className='rg-lbl' htmlFor="confirm">Confirm Password</label>
                            <Field className='rg-inp' id='confirm'  placeholder="Enter your Username" name='confirm'/>
                            {errors.confirm&&touched.confirm?<div>{errors.confirm}</div>:null}
                        </div>
                        <div className="rg-field">
                            <input className='rg-sub-inp' type="submit"/>
                            <p className='rg-sub-inp inpp' onClick={()=> navigate("/login")}>Do you have Account?</p>
                        </div>
                    </div>

                    </Form>
              
                    )}
                </Formik>
            
        
        </div>
    )
}

export default Registers
