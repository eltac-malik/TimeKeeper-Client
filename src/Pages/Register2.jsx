import React, { useState } from "react";
import 'assets/css/Register2.css'
import { Formik, Form, Field } from "formik";
import reg2val from 'validation/reg2Validation'
import {useSelector,useDispatch} from 'react-redux'
import {setRegData} from 'redux/registerSlice'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Register2() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const reg = useSelector(state => state.reg.regdata)
    return (
        <div className='reg2'>
            <Formik
            initialValues={{
                regusr:"",
                regmail:"",
                regphone:"",
                regpsw:"",
                regcpsw:""
            }}
            validationSchema={reg2val}
            onSubmit={(x)=>
            {
                dispatch(setRegData({...reg,username:x.regusr,email:x.regmail,phone:x.regphone,password:x.regpsw}))
                
                let newuser = 
                {
                    username:x.regusr,
                    name:reg.name,
                    surname:reg.surname,
                    email:x.regmail,
                    phoneNumber:x.regphone,
                    password:x.regpsw
                }
                console.log(newuser);
                
                axios.post("http://ejtacmalik-001-site1.btempurl.com/api/Accounts/register",newuser)
                .then(resp=> console.log(resp.data))
                
                
            }}
            >
            {({errors,touched})=>
        (

            <Form className='reg2-form'>
            <div className="reg2-field">
                <label className='reg-lbl' htmlFor="reg-usr">Username</label>
                <Field  name='regusr' className='reg-datas' id='reg-usr'/>
                {errors.regusr&&touched.regusr?<div>salam</div>:null}
            </div>
            <div className="reg2-field">
                <label className='reg-lbl' htmlFor="reg-usr">E-mail</label>
                <Field  name='regmail' className='reg-datas' id='reg-usr'/>
                {errors.regmail&&touched.regmail?<div>salam</div>:null}
            </div>
            <div className="reg2-field">
                <label className='reg-lbl' htmlFor="reg-usr">Phone</label>
                <Field name='regphone' className='reg-datas' id='reg-usr'/>
                {errors.regphone&&touched.regphone?<div>salam</div>:null}
            </div>
            <div className="reg2-field">
                <label className='reg-lbl' htmlFor="reg-usr">Password</label>
                <Field name='regpsw' className='reg-datas' id='reg-usr'/>
                {errors.regpsw&&touched.regpsw?<div>salam</div>:null}
            </div>
            <div className="reg2-field">
                <label className='reg-lbl' htmlFor="reg-usr">Confirm Password</label>
                <Field name='regcpsw' className='reg-datas' id='reg-usr'/>
                {errors.regcpsw&&touched.regcpsw?<div>salam</div>:null}
            </div>
            <input className='reg-sub' type="submit"/>
            <div className="lg-div">
            <p onClick={()=> navigate("/register")} className='ch-psw'>Go back</p>
            </div>
        </Form>



        )}

            </Formik>

        </div>
    )
}

export default Register2
