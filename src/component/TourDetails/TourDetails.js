import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TourDetails.css'

const TourDetails = () => {
    const { TourBookingID } = useParams();
    const [Tour, setTour] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:4000/user/tour?bookingid=${TourBookingID}`)
            .then(result => {
                setTour(result.data);
            })
            .catch(e => { })
    }, [TourBookingID]);
    const {
        title,
        bookingDate,
        journeyDate,
        places,
        duration,
        adults,
        children,
        price
    } = Tour || {}
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels1.jpg" class="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels.jpg" class="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.shikhar.com/images/gallery/tours/462/Andaman%20Shikhar%20Travels2.jpg" class="d-block w-100 img-fluid" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <table class="table table-sm table-responsive">
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