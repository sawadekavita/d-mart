import React from 'react'
import Footer from './Footer'
const AboutUs = () => {
  return (
    < >
<div className="container p-5 mb-5">
        <div className="row">

        <div className="col">
        <img src="./assets/aboutus.jpg" alt="" style={{float:"left", width:"350px",height:"300px", fontFamily:"cursive"}} />            

        </div>
        <div className="col">

<h4 className=''>Welcome To</h4>
<h2 className='fw-bolder '>D-mart</h2>
<br />
<h3>Get to know about D-mart</h3>
<p style={{fontSize:"20px", color:"gray"}} >D-mart is a new online e-commerce store - a <br /> continuously envolving shopping center online.<br /> Just like in any shopping center, there's always <br /> something fresh and exciting</p>
            </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default AboutUs
