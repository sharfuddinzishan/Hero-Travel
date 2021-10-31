import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className="footer-section" style={{ backgroundColor: '#E9ECEF' }}>
                <footer className="">
                    <div className="text-muted p-5">
                        <div className="container">
                            <div className="row">
                                <div className="mb-5 mb-lg-0 col-lg-4">
                                    <div className="font-weight-bold text-uppercase text-dark mb-3">
                                        Directory
                                    </div>
                                    <p className="">Go, Explore With Us.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="http://www.twitter.com/hero-travel" rel="noreferrer" target="_blank" title="twitter" className="bx bx-tada text-muted text-hover-primary">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="http://www.facebook.com/hero-travel" rel="noreferrer" target="_blank" title="facebook" className="bx bx-tada text-muted text-hover-primary">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="http://www.instagram.com/hero-travel" rel="noreferrer" target="_blank" title="instagram" className="bx bx-tada text-muted text-hover-primary">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="http://www.pinterest.com/hero-travel" rel="noreferrer" target="_blank" title="pinterest" className="bx bx-tada text-muted text-hover-primary">
                                                <i className="fab fa-pinterest"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="http://www.vimeo.com/hero-travel" rel="noreferrer" target="_blank" title="vimeo" className="bx bx-tada text-muted text-hover-primary">
                                                <i className="fab fa-vimeo"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5 mb-lg-0 col-md-6 col-lg-2">
                                    <div className="font-weight-bold text-uppercase text-dark mb-3">
                                        Pages
                                    </div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-decoration-none text-muted" to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none text-muted" to="/packages">Our Packages</Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none text-muted" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5 mb-lg-0 col-lg-4 ms-auto">
                                    <div className="font-weight-bold text-uppercase text-dark mb-3">
                                        Subscribed Us &amp; Enjoy Discounts
                                    </div>
                                    <p className="mb-3">
                                        Unlimited Choices. Great Support &amp; Service. Best Prices. Happy Memories.
                                    </p>
                                    <form className="" action="#">
                                        <div className="input-group mb-3">
                                            <input type="email" placeholder="Your Email Address"
                                                aria-label="Your Email Address"
                                                className="border-dark form-control" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn-outline-dark btn">
                                                    <i className='bx bx-md bxs-paper-plane bx-flashing' ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 fw-bold bg-light text-muted">
                        <div className="container">
                            <div className="align-items-center row">
                                <div className="text-center text-md-start col-md-6">
                                    <p className="fs-6">© 2020, Your company. All rights reserved.</p>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-inline mb-0 mt-2 text-center text-md-end">
                                        <li className="list-inline-item">
                                            <img
                                                src="https://i.ibb.co/Qr6GDKt/ow718a.png" alt="Mastercard"
                                                width="32" height="32" title="Mastercard" className="bx bx-tada" />
                                        </li>
                                        <li className="list-inline-item">
                                            <img
                                                src="https://i.ibb.co/JpNv0bh/ow7FrG.png"
                                                width="32" height="32" alt="Visa Card" title="Visa" className="bx bx-tada" />
                                        </li>
                                        <li className="list-inline-item">
                                            <img
                                                src="https://i.ibb.co/Rj31sDF/5a3559b6b1a966-2399139715134458147277.png"
                                                width="32" height="32" alt="Paypal" title="Paypal" className="bx bx-tada" />
                                        </li>
                                        <li className="list-inline-item">
                                            <img
                                                src="https://i.ibb.co/mz5cMyt/BKash-Logo-wine.png"
                                                width="32" height="32" alt="Bkash" title="Bkash" className="bx bx-tada" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default Footer;