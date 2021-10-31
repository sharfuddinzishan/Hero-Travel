import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingList = () => {
    const [getSingleUserTours, setSingleUserTours] = useState([]);
    const [loader, setLoader] = useState(false);
    const [getResult, setResult] = useState(true);

    // Get All Booking List 
    useEffect(() => {
        setLoader(true);
        axios.get(`https://spooky-grave-06095.herokuapp.com/tours`)
            .then(result => {
                if (result.status === 200) {
                    setSingleUserTours(result.data);
                    setLoader(false);
                }
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [getResult]);

    // Used Query Parameter action, by this API can know is it cancel or confirm action 
    const handleCancel = bookingID => {
        const prompt = window.confirm('Want To Cancel  Booking?');
        if (prompt === true) {
            setResult(false);
            axios.put(`https://spooky-grave-06095.herokuapp.com/user/tour/${bookingID}?action=cancel`)
                .then(result => {
                    setResult(true)
                })
                .finally(() => {
                    setResult(false);
                })
        }
    }

    const handleConfirm = bookingID => {
        const prompt = window.confirm('Want To Confirm Booking?');
        if (prompt === true) {
            setResult(false);
            axios.put(`https://spooky-grave-06095.herokuapp.com/user/tour/${bookingID}?action=confirm`)
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
            setResult(false);
            axios.delete(`https://spooky-grave-06095.herokuapp.com/user/tour/${bookingID}`)
                .then(result => {
                    setResult(true)
                })
                .finally(() => {
                    setResult(false);
                })
        }
    }

    return (
        <div className="container-fluid p-5">
            <h1 className="text-center">All Tour Booking Lists</h1>
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
                                        <th scope="col">Offered Price</th>
                                        <th scope="col">Final Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Cancel</th>
                                        <th scope="col">Confirm</th>
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
                                                packageID,
                                                title,
                                                price,
                                                bookingDate,
                                                bookingStatus,
                                                finalPrice,
                                                // userCountry,
                                                // fullName,
                                                // email: emailID,
                                                // contactNo,
                                                // message,
                                                // duration,
                                                // places,
                                            } = singleTour || {};
                                            const totalMember = parseInt(adults) + (parseInt(children) || 0);
                                            return <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <Link to={`/user/tours/${bookingID}`}
                                                        className="btn btn-sm btn-primary w-100">
                                                        <span className="bookingID">{bookingID}</span></Link>
                                                </td>
                                                <td><Link to={`/packages/${packageID}?page=packagedetails`}>{title}</Link></td>
                                                <td>{bookingDate}</td>
                                                <td>{journeyDate}</td>
                                                <td>{totalMember}</td>
                                                <td>{price}</td>
                                                <td>{finalPrice}</td>
                                                <td>{bookingStatus}</td>
                                                {
                                                    (bookingStatus === 'pending' || bookingStatus === 'confirm') ?
                                                        (
                                                            <td>
                                                                <button onClick={() => handleCancel(bookingID)}
                                                                    className="btn btn-sm btn-warning text-danger fw-bold">
                                                                    CANCEL</button>
                                                            </td>
                                                        )
                                                        :
                                                        (
                                                            <td>
                                                                <button disabled
                                                                    className="btn btn-sm btn-warning text-muted fw-bold">
                                                                    CANCEL</button>
                                                            </td>
                                                        )
                                                }
                                                {/* If Booking is confirm then CONFIRM button will be disabled  */}
                                                {
                                                    bookingStatus !== 'confirm' ?
                                                        (
                                                            <td>
                                                                <button onClick={() => handleConfirm(bookingID)}
                                                                    className="btn btn-sm btn-warning text-danger fw-bold">
                                                                    CONFIRM</button>
                                                            </td>
                                                        )
                                                        :
                                                        (
                                                            <td>
                                                                <button disabled
                                                                    className="btn btn-sm btn-warning text-muted fw-bold">
                                                                    CONFIRM</button>
                                                            </td>
                                                        )
                                                }
                                                <td>
                                                    <Link to={`/admin/tours/update/${bookingID}`}
                                                        className="btn btn-sm btn-primary w-100">
                                                        Update</Link>
                                                </td>



                                                <td>
                                                    <button onClick={() => handleDelete(bookingID)}
                                                        className="btn btn-sm btn-warning text-danger fw-bold">
                                                        DELETE</button>
                                                </td>
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

export default BookingList;