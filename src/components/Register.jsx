import React from 'react';
import * as formik from "formik";
import * as yup from "yup";
import { useState } from 'react';
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import  Button  from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const {Formik} =formik;
    const schema = yup.object().shape({
        fullname:yup.string().required(),
        email:yup.string().required(),
        terms:yup.bool().required().oneOf([true],"Terms must be accepted")
    })
  return (
    <>
<Formik
validationSchema={schema}
onSubmit={console.log}
initialValues={{
    fullname:"",
    email:"",
    terms:false,
}}
>
{({handleSubmit,handleChange,values,touched,errors})=>(
    <Form 
    noValidation
    onSubmit={handleSubmit}
    className="col-md-7 col-sm-9 col-lg-4 mt-3 p-4 pt-5 pb-5"
    id="register-form"
    style={{margin:"auto", width:"30%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
<FloatingLabel
controlId="formik-fullname"
className="mb-3"
label="Full Name"
>
    <Form.Control 
    type='text'
    placeholder='Full Name'
    value={values.fullname}
    onChange={handleChange}
    name='fullname'
    isInvalid={!!errors.fullname}
    />
</FloatingLabel>


<FloatingLabel
lable="Email"
className="mb-3"
label="Email"
>
<Form.Control
text="email"
placeholder='Email'
value={values.email}
name='email'
onChange={handleChange}
isInvalid={!!errors.email}
/>

</FloatingLabel>

<Form.Group id='terms'className='mb-3'>
<Form.Check 
required
name='terms'
label={<><span>I agree to D-mart's </span> <a href="#">Terms and Services</a>, <a href="#" >Privacy Policies</a> </>}
onChange={handleChange}
isInvalid={!!errors.terms}
feedback={errors.terms}
feedbackType='invalid'
id="validation-terms"
/>

</Form.Group>

<Button
className='col-12 p-2 fs-4'
type="submit"
variant="outline-primary"
id="register-btn"

>Register</Button>
<br />
<br />
<h4>Already have an account? <NavLink to="/Login">Log in</NavLink></h4>
    </Form>
)}
</Formik>
    </>
  )
}

export default Register