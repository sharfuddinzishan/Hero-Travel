import axios from 'axios';
import React, { useState, useEffect, } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdatePackage = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { PackageID } = useParams();
    const [loader, setLoader] = useState(false);
    const [PackagesList, setPackagesList] = useState({});
    const history = useHistory();
    useEffect(() => {
        setLoader(true);
        axios.get(`http://localhost:4000/packages/${PackageID}`)
            .then(result => {
                setPackagesList(result.data);
                setLoader(false);
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [PackageID]);

    const handleInput = (e) => {
        let expr = e.target.name;
        switch (expr) {
            case 'title':
                setPackagesList({
                    title: e.target.value,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'days':
                setPackagesList({
                    title: PackagesList.title,
                    days: e.target.value,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'nights':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: e.target.value,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'price':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: e.target.value,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'besttime':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: e.target.value,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'places':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: e.target.value,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'attraction':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: e.target.value,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'theme':
                console.log(e.target.value)
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: e.target.value,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
                break;
            case 'overview':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: e.target.value,
                    highlights: PackagesList.highlights
                });
                break;
            case 'highlights':
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: e.target.value
                });
                break;
            default:
                setPackagesList({
                    title: PackagesList.title,
                    days: PackagesList.days,
                    nights: PackagesList.nights,
                    price: PackagesList.price,
                    besttime: PackagesList.besttime,
                    places: PackagesList.places,
                    attraction: PackagesList.attraction,
                    theme: PackagesList.theme,
                    overview: PackagesList.overview,
                    highlights: PackagesList.highlights
                });
        }
    }

    const handleUpdateForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/admin/package/update/${PackageID}`, PackagesList)
            .then(result => {
                alert('Package Successfully Updated')
                history.push(`/admin/packages`);
            })
            .catch(e => { alert('Updated Error') })
    };


    return (
        <div className="booking-section container p-5">
            <h3 className="section-title text-center">Update Package Information</h3>
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
                                            onChange={handleInput}
                                            value={PackagesList.title}
                                            name="title"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Days</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            name="days"
                                            onChange={handleInput}
                                            type="number"
                                            value={PackagesList.days}
                                            min="1"
                                            max="180"
                                            placeholder="Days Of Journey"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Nights</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            name="nights"
                                            onChange={handleInput}
                                            type="number"
                                            value={PackagesList.nights}
                                            min="1"
                                            max="181"
                                            placeholder="Total Nights Of Journey"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            type="number"
                                            name="price"
                                            value={PackagesList.price}
                                            min="5"
                                            placeholder="Travel Package Cost (Approx)"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Best Time To Go</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            type="text"
                                            name="besttime"
                                            value={PackagesList.besttime}
                                            placeholder="Best Time To Travel That Places"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Package Theme Image</th>
                                    <td>
                                        <input
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            type="text"
                                            name="theme"
                                            value={PackagesList.theme}
                                            placeholder="Image URL"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Attraction of Packages</th>
                                    <td>
                                        <textarea
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            name="attraction"
                                            value={PackagesList.attraction}
                                            placeholder="Attraction To Travel That Places"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Overview</th>
                                    <td>
                                        <textarea
                                            rows="4"
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            name="overview"
                                            value={PackagesList.overview}
                                            placeholder="overview"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Highlights</th>
                                    <td>
                                        <textarea
                                            rows="4"
                                            className="w-100 d-block"
                                            onChange={handleInput}
                                            name="highlights"
                                            value={PackagesList.highlights}
                                            placeholder="highlights"
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
export default UpdatePackage;