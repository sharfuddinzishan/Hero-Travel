import axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect, } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const TourUpdates = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { TourBookingID } = useParams();
    const [Tour, setTour] = useState({});
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost:4000/user/tour?bookingid=${TourBookingID}`)
            .then(result => {
                setTour(result.data);
                setTour(result.data);
            })
            .catch(e => { })
    }, [TourBookingID]);

    const {
        journeyDate,
        adults,
        email: emailID,
        children,
        contactNo,
        message,
        title
    } = Tour || {}

    const today = moment().format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    const deadline = moment().add(6, 'months').format('YYYY-MM-DD');

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'journeyDate':
                setTour({
                    journeyDate: e.target.value,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    message: Tour.message
                });
                break;
            case 'adults':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: e.target.value,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    message: Tour.message
                });
                break;
            case 'children':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: e.target.value,
                    contactNo: Tour.contactNo,
                    message: Tour.message
                });
                break;
            case 'contactNo':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: e.target.value,
                    message: Tour.message
                });
                break;
            case 'message':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: e.target.value,
                    message: Tour.message
                });
                break;
        }
    }

    const handleUpdateForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/user/tour/update/${TourBookingID}`, Tour)
            .then(result => {
                alert('Updated Order')
                history.push(`/user/tours/${TourBookingID}`);
            })
            .catch(e => { alert('Inserted Error') })
    };

    // const onSubmit = (data) => {
    //     axios.put(`http://localhost:4000/user/tour/update/${TourBookingID}`, data)
    //         .then(result => {
    //             alert('Updated Order')
    //         })
    //         .catch(e => { alert('Inserted Error') })
    // };


    return (
        <div className="booking-section container p-5">
            <h6><b>Hero Travel</b> is your one stop destination for the best budget holiday tours.</h6>
            <form className="d-flex flex-column gap-2" onSubmit={handleUpdateForm}>

                <table class="table table-sm table-responsive">
                    <tbody className="package-update-info">
                        <tr>
                            <th className="w-25" scope="row">Package Name</th>
                            <td>
                                <input
                                    className="w-100 d-block"
                                    value={title}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Journet Date</th>
                            <td>
                                <input
                                    className="w-100 d-block"
                                    name="journeyDate"
                                    onChange={handleInput}
                                    type="date"
                                    value={Tour.journeyDate}
                                    min={today}
                                    max={{ deadline }}
                                    placeholder="Date Of Journey"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Adults</th>
                            <td>
                                <input
                                    className="w-100 d-block"
                                    onChange={handleInput}
                                    type="number"
                                    name="adults"
                                    value={Tour.adults}
                                    min="1"
                                    placeholder="Number Of Adults (Above 12 Years)"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Children</th>
                            <td>
                                <input
                                    className="w-100 d-block"
                                    onChange={handleInput}
                                    type="number"
                                    name="children"
                                    value={Tour.children}
                                    placeholder="Children (5 to 12 Years)"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>
                                <input
                                    className="w-100 d-block"
                                    value={emailID}
                                    readOnly
                                    type="email"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Contact</th>
                            <td>
                                <input
                                    className="w-100 d-block"
                                    onChange={handleInput}
                                    value={Tour.contactNo}
                                    type="tel"
                                    name="contactNo"
                                    placeholder="Contact Number Must"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Additional Information</th>
                            <td>
                                <textarea
                                    className="w-100 d-block"
                                    onChange={handleInput}
                                    name="message"
                                    value={Tour.message}
                                    rows="4"
                                    placeholder="Message For US *"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input className="btn btn-primary d-block mx-auto" type="submit" />
            </form>
        </div>
    );
};
export default TourUpdates;