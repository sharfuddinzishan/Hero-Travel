import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Booking.css';

const Booking = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const {
        _id: packageID,
        title,
        days,
        nights,
        price,
        places,
    } = props.singlePackage || {}
    const duration = days + ' Days ' + nights + ' Nights';


    const today = moment().format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    const deadline = moment().add(6, 'months').format('YYYY-MM-DD');

    const onSubmit = (data) => {
        data['packageID'] = packageID;
        data['title'] = title;
        data['duration'] = duration;
        data['price'] = price;
        data['finalPrice'] = price;
        data['places'] = places;
        data['bookingDate'] = today;
        data['bookingStatus'] = 'pending';
        axios.post('http://localhost:4000/booking', data)
            .then(result => {
                console.log(result)
                alert('Inserted Order', data?.title)
            })
            .catch(e => { alert('Inserted Error') })
    };


    return (
        <div className="booking-section">
            <h6><b>Hero Travel</b> is your one stop destination for the best budget holiday tours.</h6>
            <form className="d-flex flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                <input
                    defaultValue={title}
                    readOnly
                />
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
                    defaultValue={user?.displayName}
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
    );
};

export default Booking;