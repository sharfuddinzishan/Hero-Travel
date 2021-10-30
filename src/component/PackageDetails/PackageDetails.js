import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import axios from 'axios';


const PackageDetails = () => {
    const [loader, setLoader] = useState(false);
    // get packageID from path of url route
    const { tourPackageID } = useParams();


    console.log('id ', tourPackageID)
    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        setLoader(true);
        axios.get(`http://localhost:4000/packages/${tourPackageID}`)
            .then(result => {
                setSinglePackage(result.data);
                setLoader(false);
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, []);
    const {
        _id: packageID,
        title,
        days,
        nights,
        price,
        besttime,
        places,
        attraction,
        theme: coverImage,
        overview,
        highlights } = singlePackage || {}
    console.log('Single package: ', singlePackage)
    return (
        <>
            <div className="container-fluid p-5">
                <h1>Hello</h1>
                <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center text-uppercase">{title}</h2>
                {
                    loader ? <span>Please Wait, Data loaded in processing</span>
                        :
                        <div className="row">
                            <div className="col-12 col-sm-5">
                                <table class="table table-sm table-responsive">
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
                        </div>
                }
            </div>
        </>
    );
};

export default PackageDetails;