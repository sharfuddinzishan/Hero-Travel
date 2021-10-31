import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TourDetails.css'

const TourDetails = () => {
    const { TourBookingID } = useParams();
    // State for specific tour details 
    const [Tour, setTour] = useState({});
    useEffect(() => {
        axios.get(`https://spooky-grave-06095.herokuapp.com/user/tour?bookingid=${TourBookingID}`)
            .then(result => {
                setTour(result.data);
            })
            .catch(e => { })
    }, [TourBookingID]);
    const {
        title,
        places,
        duration,
        adults,
        children,
        price,
        // bookingDate,
        // journeyDate,
    } = Tour || {}
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels1.jpg" className="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://nijhoom.b-cdn.net/wp-content/uploads/images/tour_photos/sylhet-srimangal-tours/srimangal-day-tour/srimangal-day-tour-cover-600x338-o.jpg" className="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://nijhoom.com/bangladesh-tour/dhaka-photography-tour/shipyards-posing-kids-jumping/" className="d-block w-100 img-fluid" alt="..." />
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
                <div className="col-12 col-md-7">
                    <table className="table table-sm table-responsive">
                        <tbody className="package-info">
                            <tr>
                                <th scope="row">Package</th>
                                <td className="fs-3"><strong>{title}</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>{duration}</td>
                            </tr>
                            <tr>
                                <th scope="row">Places</th>
                                <td>{places}</td>
                            </tr>
                            <tr>
                                <th scope="row">Adults</th>
                                <td>{adults}</td>
                            </tr>
                            <tr>
                                <th scope="row">Children</th>
                                <td>{children || 0}</td>
                            </tr>
                            <tr>
                                <th scope="row">Price (Approx.)</th>
                                <td>USD {price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;