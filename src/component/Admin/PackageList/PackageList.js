import React from 'react';
import { Link } from 'react-router-dom';
import { usePackages } from '../../../Hooks/usePackages';

const PackageList = () => {
    const [packages] = usePackages();
    return (
        <div className="container-fluid p-5">
            <h1 className="text-center">All Tour Booking Lists</h1>
            <div className="row">
                <div className="col-12 table-responsive">
                    <table className="my-tours-table table table-striped table-hover table-sm align-middle">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Days</th>
                                <th scope="col">Nights</th>
                                <th scope="col">Best Time</th>
                                <th scope="col">Places</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packages?.map((singlePackage, index) => {
                                    const {
                                        _id: packageID,
                                        title,
                                        days,
                                        nights,
                                        price,
                                        besttime,
                                        places,
                                        // attraction,
                                        // theme,
                                        // overview
                                    } = singlePackage || {};
                                    return <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><Link to={`/packages/${packageID}?page=packagedetails`}>{title}</Link></td>
                                        <td>{price}</td>
                                        <td>{days}</td>
                                        <td>{nights}</td>
                                        <td>{besttime}</td>
                                        <td>{places}</td>
                                        <td>
                                            <Link to={`/admin/packages/update/${packageID}`}
                                                className="btn btn-sm btn-primary w-100">
                                                Update</Link>
                                        </td>
                                    </tr>
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PackageList;