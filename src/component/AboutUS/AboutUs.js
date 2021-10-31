import React from 'react';

const AboutUs = () => {
    return (
        <>
            <section>
                <div className="container p-5">
                    <h3 className="section-title text-center">About <b>Us</b></h3>
                    <p>
                        HeroTravel Tours is an award winning local tour operator in Bangladesh.
                        We specialize in organizing inbound tours and holidays for foreigners, specially the western tourists,
                        with good quality in reasonable price.
                        Providing an authentic Bangladesh experience to the foreign tourists in always our first priority.
                    </p>

                    <div className="row">
                        <div className="col-lg-6">
                            <img src="https://i.ibb.co/0CmqtYL/inani-beach.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Our Strength</h3>
                            <p className="fst-italic">
                                We started our business as an adventure tour company and today it has a name to reckon with in this field. With each succeeding year, we have also maintained quality service in adventure as well as other fields of tourism. Our treks are
                                easy and enjoyable for beginners and equally good for experienced trekkers.
                            </p>
                            <ul className="list-unstyled">
                                <li className="text-decoration-none"><i className="bx bx-right-arrow-circle bx-flip-horizontal"></i>Adventure Travel Trade Association</li>
                                <li className="text-decoration-none"><i className="bx bx-right-arrow-circle bx-flip-horizontal"></i>International Air Transport Association</li>
                                <li className="text-decoration-none"><i className="bx bx-right-arrow-circle bx-flip-horizontal"></i>Pacific Asia Travel Association</li>
                            </ul>
                            <p>
                                We are a professional company belonging to most of the standard organisations,
                                both nationally and internationally. This ensures that you are dealing with a
                                recognized organisation and can expect
                                international standards of compliance with all rules pertaining to the travel trade.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutUs;