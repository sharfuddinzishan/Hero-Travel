import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './MyTours.css'

const MyTours = () => {
    const { user } = useAuth();
    const [getSingleUserTours, setSingleUserTours] = useState([]);
    const [loader, setLoader] = useState(false);
    const [getResult, setResult] = useState(true);

    useEffect(() => {
        setLoader(true);
        axios.get(`https://spooky-grave-06095.herokuapp.com/user/bookingshistory?q=${user?.email}`)
            .then(result => {
                if (result.status === 200) {
                    setSingleUserTours(result.data);
                    setLoader(false);
                }
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [getResult, user?.email]);

    const handleCancel = bookingID => {
        const prompt = window.confirm('Want To Cancel  Booking?');
        if (prompt === true) {
            setResult(false);
            axios.put(`https://spooky-grave-06095.herokuapp.com/user/tour/${bookingID}`)
                .then(result => {
                    setResult(true)
                })
                .finally(() => {
                    setResult(false);
                })
        }
    }

    const handleDelete = bookingID => {
        const prompt = window.confirm('Want To Delete?');
        if (prompt === true) {
            console.log('hello')
            setResult(false);
            axios.delete(`https://spooky-grave-06095.herokuapp.com/user/tour/${bookingID}`)
                .then(result => {
                    console.log(result)
                    setResult(true)
                })
                .finally(() => {
                    setResult(false);
                })
        }
    }

    return (
        <div className="container-fluid p-5">
            <h1 className="text-center section-title pb-3">My Booked Tour Packages</h1>
            <div className="row">
                <div className="col-12 table-responsive">
                    {
                        loader ? <span>Please Wait, Data loading in processing</span>
                            :
                            <table className="my-tours-table table table-striped table-hover table-sm align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Booking No</th>
                                        <th scope="col">title</th>
                                        <th scope="col">Booking Date</th>
                                        <th scope="col">Journey Date</th>
                                        <th scope="col">Total Members</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Offered Price</th>
                                        <th scope="col">Final Price</th>
                                        <th scope="col">Booking Status</th>
                                        <th scope="col">Cancel Booking</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getSingleUserTours.map((singleTour, index) => {
                                            const {
                                                _id: bookingID,
                                                journeyDate,
                                                adults,
                                                children,
                                                contactNo,
                                                packageID,
                                                title,
                                                price,
                                                bookingDate,
                                                bookingStatus,
                                                finalPrice,
                                                // duration,
                                                // userCountry,
                                                // fullName,
                                                // email: emailID,
                                                // message,
                                                // places
                                            } = singleTour || {};
                                            const totalMember = parseInt(adults) + (parseInt(children) || 0);
                                            return <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <Link to={`/user/tours/${bookingID}`} className="btn btn-sm btn-primary w-100">
                                                        <span className="bookingID">{bookingID}</span></Link>
                                                </td>
                                                <td><Link to={`/packages/${packageID}?page=packagedetails`}>{title}</Link></td>
                                                <td>{bookingDate}</td>
                                                <td>{journeyDate}</td>
                                                <td>{totalMember}</td>
                                                <td>{contactNo}</td>
                                                <td>{price}</td>
                                                <td>{finalPrice}</td>
                                                <td>{bookingStatus}</td>
                                                {
                                                    bookingStatus === 'pending' &&
                                                    (
                                                        <td>
                                                            <button onClick={() => handleCancel(bookingID)}
                                                                className="btn btn-sm btn-warning text-danger fw-bold">
                                                                X</button>
                                                        </td>
                                                    )
                                                }
                                                {
                                                    bookingStatus !== 'pending' &&
                                                    (
                                                        <td>
                                                            <button disabled
                                                                className="btn btn-sm btn-warning text-muted fw-bold">
                                                                X</button>
                                                        </td>
                                                    )
                                                }
                                                {
                                                    bookingStatus === 'pending' && bookingStatus !== 'confirm' &&
                                                    (
                                                        <td>
                                                            <Link to={`/user/tours/update/${bookingID}`}
                                                                className="btn btn-sm btn-primary w-100">
                                                                Update</Link>
                                                        </td>
                                                    )
                                                }
                                                {
                                                    (bookingStatus === 'cancel' || bookingStatus === 'confirm') && (
                                                        <td>
                                                            <Link
                                                                to='#'
                                                                disabled
                                                                className="btn btn-sm btn-secondary text-light w-100">
                                                                Update</Link>
                                                        </td>
                                                    )
                                                }
                                                {
                                                    bookingStatus !== 'confirm' &&
                                                    (
                                                        <td>
                                                            <button onClick={() => handleDelete(bookingID)}
                                                                className="btn btn-sm btn-warning text-danger fw-bold">
                                                                DELETE</button>
                                                        </td>
                                                    )
                                                }
                                                {
                                                    bookingStatus === 'confirm' &&
                                                    (
                                                        <td>
                                                            <button disabled
                                                                className="btn btn-sm btn-warning text-muted fw-bold">
                                                                DELETE</button>
                                                        </td>
                                                    )
                                                }
                                            </tr>
                                        })}
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTours;