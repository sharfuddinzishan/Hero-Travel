import axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './BookingForm.css'

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [packageTitles, setPackageTitles] = useState([]);
    const [singlePackage, setSinglePackage] = useState({});
    useEffect(() => {
        axios.get('http://localhost:4000/titles')
            .then(result => {
                setPackageTitles(result.data);
            })
    }, [])

    const today = moment().format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    const deadline = moment().add(6, 'months').format('YYYY-MM-DD');

    const onSubmit = (data) => {
        const tourPackageID = data.packageID;
        axios.get(`http://localhost:4000/packages/${tourPackageID}`)
            .then(result => {
                setSinglePackage(result.data);
            })

        const {
            title,
            days,
            nights,
            price,
            places,
        } = singlePackage || {}

        const duration = days + ' Days ' + nights + ' Nights';
        data['packageID'] = tourPackageID;
        data['title'] = title;
        data['duration'] = duration;
        data['price'] = price;
        data['finalPrice'] = price;
        data['places'] = places;
        data['bookingDate'] = today;
        data['bookingStatus'] = 'pending';

        if (singlePackage?.title) {
            axios.post('http://localhost:4000/booking', data)
                .then(result => {
                    alert('Inserted Order')
                })
                .catch(e => { alert('Inserted Error') })
        };
    }
    return (
        <div className="booking-section p-5">
            <h3 className="text-center section-title">Booked/Submit Your Query</h3>
            <h6 className="text-center pb-3"><b>Hero Travel</b> is your one stop destination for the best budget holiday tours.</h6>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 mx-auto">
                        <form className="d-flex flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                            <select {...register("packageID")}>
                                {
                                    packageTitles?.map((pd, index) => {
                                        return <option key={index} value={pd?._id}>{pd?.title}</option>
                                    })
                                }
                            </select>
                            <input
                                placeholder="Your Country"
                                {...register("userCountry", { required: true })}
                            />
                            {errors.userCountry && <span className="errorInput text-danger fw-bold">Country name is required</span>}
                            <input
                                type="date"
                                defaultValue={tomorrow}
                                min={today}
                                max={{ deadline }}
                                placeholder="Date Of Journey"
                                {...register("journeyDate",)}
                            />
                            <input
                                type="number"
                                min="1"
                                placeholder="Number Of Adults (Above 12 Years)"
                                {...register("adults", { required: true })}
                            />
                            {errors.adults && <span className="errorInput text-danger fw-bold">Minimum 1 Adults</span>}
                            <input
                                type="number"
                                placeholder="Children (5 to 12 Years)"
                                {...register("children", { min: 0 },)}
                            />
                            <input
                                defaultValue={user?.displayName || ''}
                                placeholder="Full Name"
                                {...register("fullName", { required: true })}
                            />
                            {errors.fullName && <span className="errorInput text-danger fw-bold">Country name is required</span>}

                            <input
                                defaultValue={user?.email}
                                readOnly
                                type="email"
                                {...register("email",)}
                            />
                            <input
                                type="tel"
                                placeholder="Contact Number Must"
                                {...register("contactNo", { required: true })}
                            />
                            {errors.contactNo && <span className="errorInput text-danger fw-bold">Country name is required</span>}

                            <textarea
                                rows="4"
                                placeholder="Message For US *"
                                {...register("message",)}
                            />
                            <input className="btn btn-primary d-block mx-auto" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;