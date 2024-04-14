import React from 'react'
import Products from './Products'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
        <div className="card bg-dark text-white border-0">
  <img src="./assets/home-background.jpg" className="card-img " height="650px" alt="..." />
  <div className="card-img-overlay d-flex flex-column justify-content-center ">
    <div className="container">
    <h5 className="card-title display-4 fw-bolder mb-0" >NEW SEASON ARRIVELS</h5>
    <p className="card-text lead fs-2" >CHECKOUT ALL NEW PRODUCTS</p>
    </div>
   
  </div>
</div>
<Products />
    </div>
  )
}

export default Home