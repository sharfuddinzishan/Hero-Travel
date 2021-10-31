import React, { useEffect, useState } from 'react';
import './PackageBooking.css'
import { useLocation, useParams } from 'react-router';
import axios from 'axios';
import Tabs from 'react-bootstrap/Tabs'
import Booking from '../Booking/Booking';
import { Tab } from 'react-bootstrap';

const PackageBooking = () => {
    // Get Query Parameter 
    let query = new URLSearchParams(useLocation().search);
    let queryParams = query.get('page');
    // Set Loader 
    const [loader, setLoader] = useState(false);
    // get packageID from path of url route
    const { tourPackageID } = useParams();
    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        setLoader(true);
        axios.get(`https://spooky-grave-06095.herokuapp.com/packages/${tourPackageID}`)
            .then(result => {
                setSinglePackage(result.data);
                setLoader(false);
            })
            .catch(e => { setLoader(false) })
            .finally(() => { setLoader(false) });
    }, [tourPackageID]);
    const {
        // _id: packageID,
        title,
        days,
        nights,
        price,
        besttime,
        places,
        attraction,
        // theme: coverImage,
        overview,
        highlights } = singlePackage || {}

    return (
        <>
            <div className="container-fluid p-5">
                <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center text-uppercase">{title}</h2>
                {
                    loader ? <span>Please Wait, Data loaded in processing</span>
                        :
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <table className="table table-sm table-responsive">
                                    <tbody className="package-info">
                                        <tr>
                                            <th scope="row">Duration</th>
                                            <td>{days} <b>Days</b> {nights} <b>Nights</b> </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Attractions</th>
                                            <td>{attraction}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Best Time</th>
                                            <td>{besttime}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Routes</th>
                                            <td>{places}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Price (Approx.)</th>
                                            <td>USD {price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {
                                queryParams !== 'packagedetails'
                                    ?
                                    (
                                        <div className="col-12 col-md-7">
                                            <h1 className="text-center">Booking Form</h1>
                                            <Booking singlePackage={singlePackage}></Booking>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="col-12 col-md-5">
                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels1.jpg" className="d-block w-100 img-fluid" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels.jpg" className="d-block w-100 img-fluid" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels2.jpg" className="d-block w-100 img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    )
                            }
                            {queryParams === 'packagedetails' &&
                                <div className="col-12 mt-3">
                                    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="overview" title="Overview">
                                            <p className="h6 lh-lg">{overview}</p>
                                        </Tab>
                                        <Tab eventKey="description" title="Highlights">
                                            <p className="h6 lh-lg">{highlights}</p>
                                        </Tab>
                                    </Tabs>
                                </div>
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default PackageBooking;