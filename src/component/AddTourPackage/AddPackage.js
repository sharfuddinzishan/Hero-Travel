import axios from 'axios';
import React, { useState } from 'react';
import './AddPackage.css';
import { useForm } from 'react-hook-form';

const AddTourPackage = () => {
    const [loader, setLoader] = useState(false);
    const [insertStatus, setInsertStatus] = useState(true);
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        setLoader(true);
        setInsertStatus(true);
        axios.post('http://localhost:4000/packages', data)
            .then(response => {
                console.log(response)
                if (response.data.acknowledged) {
                    setInsertStatus(true);
                    reset();
                    setLoader(false);
                    console.log('Form Reset')
                }
            })
            .catch(e => { setInsertStatus(false); })
            .finally(() => { setLoader(false) });
    }

    return (
        <div className="add-service-section p-5 container">
            <h1 className="text-center">Add Tour Packages Here</h1>
            {!insertStatus ? <span>Sorry, Insert Operation Failed, try again please</span> : ''}
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    {loader ? <span>Please Wait, Data saved in processing</span>
                        :
                        <form className="package-entry-form gap-1 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                            <label>Package Name</label>
                            <input {...register("title", { required: true })} placeholder="Tour Title" />
                            <div className="row gy-1">
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <label>Days</label>
                                        <input defaultValue="1" {...register("days",)} placeholder="nb of days" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <label>Nights</label>
                                        <input defaultValue="1" {...register("nights",)} placeholder="nb of nights" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <label>Package Cost</label>
                                        <input type="number" {...register("price",)} placeholder="approx. package cost" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <label>Best Time</label>
                                        <input {...register("besttime", { required: true })} placeholder="Best Time To Go" />
                                    </div>
                                </div>
                            </div>
                            <label>Routes</label>
                            <textarea rows="1" {...register("places", { required: true })} placeholder="Places Travel" />
                            <label>Tour Attraction</label>
                            <textarea rows="1" {...register("attraction", { required: true })} placeholder="Place Attraction" />
                            <label>PackageTheme Image</label>
                            <input {...register("theme", { required: true })} placeholder="Theme Image URL for tour" />
                            <label>Overview</label>
                            <textarea {...register("overview",)} placeholder="Tour Overview" />
                            <label>Highlights</label>
                            <textarea {...register("highlights",)} placeholder="Spot Highlights" />
                            <input className="btn btn-primary d-block mx-auto fs-3 fw-bold mt-2" type="submit" value="Submit Tour Package" />
                        </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddTourPackage;