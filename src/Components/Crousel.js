import React from 'react'
import { Link } from 'react-router-dom'

const Crousel = () => {
    return (
        <div>

            <section >
                <div id="carouselExampleFade" className="carousel slide " data-ride="carousel" >
                    <div className="carousel-inner" style={{ height: "500px", objectFit: "fill" }}>
                        <div className="carousel-item active" >
                            <img src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" className="d-block w-100" alt="..." />
                        </div>
                        {/* <!--https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg--> */}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className="search-sec align-middle">
                <div className="container">
                    <form action="" method="post" novalidate="novalidate">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Food-Items" />
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select className="form-control search-slt" id="foodCategory">
                                            <option >Select Vehicle</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="button" className="btn btn-danger wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>



        </div>
    )
}

export default Crousel