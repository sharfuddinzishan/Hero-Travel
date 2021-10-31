import axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect, } from 'react';
import { useHistory, useParams } from 'react-router';

const BookingUpdate = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { TourBookingID } = useParams();
    const [loader, setLoader] = useState(false);
    const [Tour, setTour] = useState({});
    const history = useHistory();
    useEffect(() => {
        setLoader(true);
        axios.get(`https://spooky-grave-06095.herokuapp.com/user/tour?bookingid=${TourBookingID}`)
            .then(result => {
                setTour(result.data);
                setLoader(false);
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [TourBookingID]);

    // const {
    //     // title,
    //     // _id: bookingID,
    //     // userCountry,
    //     // fullName,
    //     // email,
    //     // bookingStatus,
    //     // finalPrice,
    //     // journeyDate,
    //     // adults,
    //     // children,
    //     // contactNo
    // } = Tour || {}

    const today = moment().format('YYYY-MM-DD');
    // const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    const deadline = moment().add(6, 'months').format('YYYY-MM-DD');

    const handleInput = (e) => {
        let expr = e.target.name;
        switch (expr) {
            case 'journeyDate':
                setTour({
                    journeyDate: e.target.value,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'adults':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: e.target.value,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'children':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: e.target.value,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'contactNo':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: e.target.value,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'userCountry':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: e.target.value,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'fullName':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: e.target.value,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'email':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: e.target.value,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'bookingStatus':
                console.log(e.target.value)
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: e.target.value,
                    finalPrice: Tour.finalPrice
                });
                break;
            case 'finalPrice':
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: e.target.value
                });
                break;
            default:
                setTour({
                    journeyDate: Tour.journeyDate,
                    adults: Tour.adults,
                    children: Tour.children,
                    contactNo: Tour.contactNo,
                    userCountry: Tour.userCountry,
                    fullName: Tour.fullName,
                    email: Tour.email,
                    bookingStatus: Tour.bookingStatus,
                    finalPrice: Tour.finalPrice
                });
        }
    }

    const handleUpdateForm = (e) => {
        e.preventDefault();
        axios.put(`https://spooky-grave-06095.herokuapp.com/user/tour/update/${TourBookingID}?role=admin`, Tour)
            .then(result => {
                alert('Order Successfully Updated')
                history.push(`/admin/tours`);
            })
            .catch(e => { alert('Updated Error') })
    };

    // function handleSelect(e) {
    //     alert('Selected ',)
    //     console.log(e.target.value)
    //     console.log(e.target.name)
    // }

    // const onSubmit = (data) => {
    //     axios.put(`https://spooky-grave-06095.herokuapp.com/user/tour/update/${TourBookingID}`, data)
    //         .then(result => {
    //             alert('Updated Order')
    //         })
    //         .catch(e => { alert('Inserted Error') })
    // };


    return (
        <div className="booking-section container p-5">
            <h3 className="section-title text-center">Update User <i className="fw-bold fs-1">{Tour.fullName || ''}</i> Booking</h3>
            <h6 className="text-center pb-3"><b>Hero Travel</b> is your one stop destination for the best budget holiday tours.</h6>
            {
                loader ? <span>Please Wait, Data loading in processing</span>
                    :
                    <form className="d-flex flex-column gap-2" onSubmit={handleUpdateForm}>
                        <table className="table table-sm table-responsive">
                            <tbody className="package-update-info">
                                <tr>
                                    <th className="w-25" scope="row">Package Name</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            value={Tour.title}
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Booking Status</th>
                                    <td>
                                        <select onChange={handleInput} value={Tour.bookingStatus} name="bookingStatus" className="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option value="cancel">Cancel</option>
                                            <option value="confirm">Confirm</option>
                                        </select>

                                        {/* <input
                                    className="w-100 d-block"
                                    onChange={handleInput}
                                    value={Tour.bookingStatus}
                                    name="bookingStatus"
                                    placeholder="Booking Status"
                                /> */}
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
                                            onChange={handleInput}
                                            name="email"
                                            className="w-100 d-block"
                                            value={Tour.email}
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
                                    <th scope="row">Country</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            value={Tour.userCountry}
                                            name="country"
                                            placeholder="User Country Name"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">User Full Name</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            value={Tour.fullName}
                                            name="fullName"
                                            placeholder="User Full Name"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Final Price</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            value={Tour.finalPrice}
                                            name="finalPrice"
                                            placeholder="Booking Status"
                                        />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <input className="btn btn-primary d-block mx-auto" type="submit" />
                    </form>
            }
        </div>
    );
};
export default BookingUpdate;