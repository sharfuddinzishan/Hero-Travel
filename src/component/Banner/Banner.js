import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className="banner-section p-5">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="animated zoomIn img-fluid w-75" alt="" src="https://i.im.ge/2021/10/31/owsZAT.png" />
                    </div>
                    <div className="col-md-6">
                        <div className="overflow-hidden">
                            <h5 className="section-title lh-1 fs-1 pb-3 fw-normal text-center mt-1">TOP DOMESTIC<br /><b>TOURS</b></h5>
                            <p className="py-1 animated slideInLeft delay-2s">THE BEST EXPERIENTAIL TOUR IN BANGLADESH WITH <b>HERO TRAVEL</b>
                            </p>
                            <Link to="/about">
                                <button className="my-1 me-1 animated zoomIn delay-1s btn btn-lg btn-outline-secondary">Learn
                                    more</button>
                            </Link>
                            <Link to="/contact">
                                <button className="my-1 animated zoomIn delay-0.5s btn btn-lg btn-secondary">Contact us</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;