import React from 'react';
import AboutUs from '../AboutUS/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Packages></Packages>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </>
    );
};

export default Home;