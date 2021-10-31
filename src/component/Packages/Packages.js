import React from 'react';
import './Packages.css';
import { usePackages } from '../../Hooks/usePackages';
import SinglePackage from '../SinglePackage/SinglePackage';

const Packages = () => {
    // Retrived All Packages custom hook usePackages
    const [packages] = usePackages();
    return (
        <>
            <section className="Packages-section p-5">
                <div className="container">
                    <div className="p-5">
                        <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Hero <b>Travel Packages</b></h2>
                        <h1 className="section-title lh-1 fs-2 pb-3 fw-bold text-center text-uppercase">
                            Go, Explore
                        </h1>
                    </div>
                    <div className="row g-4">
                        {
                            packages.map(singlepackage => <SinglePackage key={singlepackage._id} singlepackage={singlepackage}></SinglePackage>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Packages;