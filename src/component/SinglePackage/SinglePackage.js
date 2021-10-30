import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {

    // Destructuring
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
        highlights } = props.singlepackage || {}

    // Generate PackageDetails URL 
    const detailsPagePath = `/packages/${packageID}?page=packagebooking`
    return (
        <div className="col-12 col-md-6">
            <div className="card h-100">
                <div className="row g-0 p-0 m-0">
                    <div className="col-12 col-sm-4">
                        <img src={coverImage} className="img-fluid w-100" alt="No Image Found" />
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">{title.toLowerCase()}</h5>
                            {/* <p className="card-text fs-6">
                                {overview.slice(0, 90) + '......'}
                            </p> */}
                            <p><b>Duration:</b> {days} Day / {nights} Nights</p>
                            <p><b>Places Coverd:</b> {places}</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer border-0 bg-white text-end">
                    <Link to={detailsPagePath}>
                        <button className="btn btn-sm btn-outline-info text-secondary rounded-pill">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;