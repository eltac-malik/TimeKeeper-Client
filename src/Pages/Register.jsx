import React, { useState } from "react";
import "assets/css/Login.css";
import { Formik, Form, Field } from "formik";
import reg1Val from 'validation/regValidation'
import {useNavigate,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {setRegData} from 'redux/registerSlice'

function Login() {
  const [logerrusr,setLogerrUsr] = useState("")
  const [logerrpsw,setLogerrPsw] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const regdata = useSelector(state => state.reg.regdata)

  return (
    <div className="login">
      <div className="logged">
        <div className="ent-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b_150x.png?v=1559116234"
            alt=""
          />
        </div>
        <Formik
        validationSchema={reg1Val}
          initialValues={{
            name: "",
            surname: "",
          }}
          onSubmit={(val)=>
          {
            
            dispatch(setRegData({...regdata,name:val.name,surname:val.surname}))
            navigate("/registers2")
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-log">
              <div className="form-div">
                <label className="log-usr" htmlFor="log-usr">
                  Name
                </label>
                <Field
                  name="name"
                  id="log-usr"
                  className={`form-input ${logerrusr}`}
                  placeholder="Enter your username"
                />
                {errors.name&&touched.name?setLogerrUsr("err-log"):setLogerrUsr("")}
              </div>
              <div className="form-div  psw-log">
                <label className="log-usr" htmlFor="log-psw">
                  Surname
                </label>
                <Field
                  name="surname"
                  type={`text`}
                  id="log-psw"
                  className={`form-input ${logerrpsw}`}
                  placeholder="Enter your password"
                />
                {errors.surname&&touched.surname?setLogerrPsw("err-log"):setLogerrPsw("")}
              </div>
              <input className="form-sub" type="submit" value={`NEXT`} />
              <Link to='/login' className='link-b reg'>Do you have a account? <br/> Go to Login</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
