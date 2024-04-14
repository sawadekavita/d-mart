import React from 'react'
import Footer from './Footer'
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <>
     <div className="card bg-dark text-white border-0">
  <img src="./assets/contactus.avif" className="card-img " height="550px" alt="" />
  <div className="card-img-overlay d-flex flex-column justify-content-center ">
  <div className="container text-black text-center ">
  
   <h1 className='p-3 text-center mb-4 fw-bold mb-5' style={{marginTop:"-60px"}}>CONTACT US</h1>
   <div class="row ">
  <div class="col ">
    <FaLocationDot style={{height:"25px",width:"25px", marginBottom:"20px"}} />
    <h4>ADDRESS</h4>
    <p>block no.-6/15 <br />
    Shivaji Colony,<br />
    CME, Pune,<br />
    pin-665437
     </p>
    
    </div>
  <div class="col">
  <FaPhoneSquareAlt style={{height:"25px",width:"25px", marginBottom:"20px"}} />
<h4>PHONE</h4>
<p>02485-667786</p>
  </div>
  <div class="col">
  <MdEmail  style={{height:"25px",width:"25px", marginBottom:"20px"}}/>
    <h4>EMAIL</h4>
    <p>sawadekavita.1102@gmail.com</p>
  </div>
</div>
  </div>
   
  </div>
</div>

<br />
    <Footer />
    </>
  )
}

export default ContactUs