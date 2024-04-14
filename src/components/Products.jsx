import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
                        //https://fake-store-api.mock.beeceptor.com

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;

            };
        };
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
               
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList)

    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex-justfy-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>men's clothings </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>women's clothings</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>electronics</button>

              </div>

                {
                    filter.map((product) => {
                        return (
                            <>

                                <div className="col-md-3 mb-4 ">
                                    <div className="card h-100 text-center p-4 " key={product.id} style={{ width: "18rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0 ">{product.title.substring(0, 16)}...</h5>
                                            <p className="card-text fw-bold">₹ {product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )

    }


    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center p-3' style={{background:"#fff3cd"}}>Latest Products</h1>
                        {/* <hr /> */}
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}


                </div>
            </div>
            <Footer />

        </>
    )
}

export default Products