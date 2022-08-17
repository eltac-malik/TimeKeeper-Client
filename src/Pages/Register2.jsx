import React, { useState } from "react";
import 'assets/css/Register2.css'
import { Formik, Form, Field } from "formik";
import reg2val from 'validation/reg2Validation'
import {useSelector,useDispatch} from 'react-redux'
import {setRegData} from 'redux/registerSlice'
import {useNavigate} from 'react-router-dom'

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
                
                
            }}
            >
                <Form className='reg2-form'>
                    <div className="reg2-field">
                        <label className='reg-lbl' htmlFor="reg-usr">Username</label>
                        <Field name='reg-username' name='regusr' className='reg-datas' id='reg-usr'/>
                    </div>
                    <div className="reg2-field">
                        <label className='reg-lbl' htmlFor="reg-usr">E-mail</label>
                        <Field name='reg-username' name='regmail' className='reg-datas' id='reg-usr'/>
                    </div>
                    <div className="reg2-field">
                        <label className='reg-lbl' htmlFor="reg-usr">Phone</label>
                        <Field name='reg-username' name='regphone' className='reg-datas' id='reg-usr'/>
                    </div>
                    <div className="reg2-field">
                        <label className='reg-lbl' htmlFor="reg-usr">Password</label>
                        <Field name='reg-username' name='regpsw' className='reg-datas' id='reg-usr'/>
                    </div>
                    <div className="reg2-field">
                        <label className='reg-lbl' htmlFor="reg-usr">Confirm Password</label>
                        <Field name='reg-username' name='regcpsw' className='reg-datas' id='reg-usr'/>
                    </div>
                    <input className='reg-sub' type="submit"/>
                    <div className="lg-div">
                    <p onClick={()=> navigate("/register")} className='ch-psw'>Go back</p>
                    </div>
                </Form>
            </Formik>

        </div>
    )
}

export default Register2
