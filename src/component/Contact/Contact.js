import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact bg-light py-5">
                <div className="container">
                    <div className="pb-3">
                        <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">How TO <b>Reach</b> Us</h2>
                        <p className="text-muted fs-6 text-center">The best is to send us an email with details.
                            We reply fast. If you want to meet us in the office,
                            make sure to have an appointment in advance
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column flex-start">
                            <div className="text-center">
                                <iframe
                                    title="HHCare"
                                    className="h-100 w-75"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662.5068503303728!2d91.84641014997207!3d22.378788051690464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2799103abc97%3A0x65166b8f85f88de4!2sChandgaon%20Residential%20Area%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1635699884168!5m2!1sen!2sbd"
                                    loading="lazy"></iframe>
                            </div>
                            <div className="info mt-2 d-flex flex-column">
                                <div className="address d-flex align-items-center">
                                    <i className='bx bx-current-location bx-tada bx-lg'></i>
                                    <div className=" d-flex flex-column">
                                        <h4>Location:</h4>
                                        <p>House 6 (Ground Floor), Road 7
                                            Chandgaon R/A
                                            Chittagong 4212
                                            Bangladesh.</p>
                                    </div>
                                </div>
                                <div className="email d-flex align-items-center">
                                    <i className='bx bx-envelope bx-tada bx-lg'></i>
                                    <div className="d-flex flex-column">
                                        <h4>Email:</h4>
                                        <p>info@hero-herotravel.com</p>
                                    </div>
                                </div>

                                <div className="phone d-flex align-items-center">
                                    <i className='bx bx-phone bx-tada bx-lg'></i>
                                    <div className="d-flex flex-column">
                                        <h4>Call:</h4>
                                        <p>(031) 805-0216</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <form action="" className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label col-form-label-sm">Email</label>
                                    <input type="email" className="form-control form-control-sm" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label col-form-label-sm">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="inputPassword4" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label col-form-label-sm">Mobile</label>
                                    <input type="phone" className="form-control form-control-sm" id="inputMobile" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label col-form-label-sm">Address</label>
                                    <input type="text" className="form-control form-control-sm" id="inputAddress"
                                        placeholder="1234 Main St" />
                                </div>
                                <div className="col-md-12">
                                    <textarea className="textarea form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-labelm">
                                            Subscribe To Newsletter
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="my-1 animated zoomIn delay-1s btn btn-lg btn-outline-secondary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;