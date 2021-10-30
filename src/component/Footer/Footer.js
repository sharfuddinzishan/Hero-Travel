import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className="footer-section" style={{ backgroundColor: '#E9ECEF' }}>
                <footer class="">
                    <div class="text-muted p-5">
                        <div class="container">
                            <div class="row">
                                <div class="mb-5 mb-lg-0 col-lg-4">
                                    <div class="font-weight-bold text-uppercase text-dark mb-3">
                                        Directory
                                    </div>
                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#" target="_blank" title="twitter" class="text-muted text-hover-primary">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" target="_blank" title="facebook" class="text-muted text-hover-primary">
                                                <i class="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" target="_blank" title="instagram" class="text-muted text-hover-primary">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" target="_blank" title="pinterest" class="text-muted text-hover-primary">
                                                <i class="fab fa-pinterest"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#" target="_blank" title="vimeo" class="text-muted text-hover-primary">
                                                <i class="fab fa-vimeo"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mb-5 mb-lg-0 col-md-6 col-lg-2">
                                    <div class="font-weight-bold text-uppercase text-dark mb-3">
                                        Rentals
                                    </div>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a class="text-muted" href="/">Rooms</a>
                                        </li>
                                        <li>
                                            <a class="text-muted" href="/category-rooms">Map on top</a>
                                        </li>
                                        <li>
                                            <a class="text-muted" href="/category-2-rooms">Side map</a>
                                        </li>
                                        <li>
                                            <a class="text-muted" href="/category-3-rooms">No map</a>
                                        </li>
                                        <li>
                                            <a class="text-muted" href="/detail-rooms">Room detail</a>
                                        </li>
                                    </ul></div><div class="mb-5 mb-lg-0 col-md-6 col-lg-2">
                                    <div class="font-weight-bold text-uppercase text-dark mb-3">
                                        Pages
                                    </div>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a class="text-muted" href="/compare">Comparison</a>
                                        </li>
                                        <li>
                                            <a class="text-muted" href="/team">Team</a>
                                        </li>
                                        <li>
                                            <a class="text-muted" href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mb-5 mb-lg-0 col-lg-4">
                                    <div class="font-weight-bold text-uppercase text-dark mb-3">
                                        Daily Offers &amp; Discounts
                                    </div>
                                    <p class="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.
                                    </p>
                                    <form id="newsletter-form" class="">
                                        <div class="input-group mb-3">
                                            <input type="email" placeholder="Your Email Address"
                                                aria-label="Your Email Address"
                                                class="bg-transparent border-dark border-right-0 form-control" />
                                            <div class="input-group-append">
                                                <button type="submit" class="btn-outline-dark border-left-0 btn btn-deoco">
                                                    <i class="fa fa-paper-plane text-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-4 fw-bold bg-dark text-muted">
                        <div class="container">
                            <div class="align-items-center row">
                                <div class="text-center text-md-start col-md-6">
                                    <p class="fs-6">© 2020, Your company. All rights reserved.</p>
                                </div>
                                <div class="col-md-6">
                                    <ul class="list-inline mb-0 mt-2 text-center text-md-end">
                                        <li class="list-inline-item">
                                            <img
                                                src="https://seeklogo.com/images/M/mastercard-logo-38C4789CCA-seeklogo.com.png" alt=""
                                                width="32" height="32" class="" />
                                        </li>
                                        <li class="list-inline-item">
                                            <img
                                                src="https://seeklogo.com/images/M/mastercard-logo-38C4789CCA-seeklogo.com.png"
                                                width="32" height="32" alt="..." class="" />
                                        </li>
                                        <li class="list-inline-item">
                                            <img
                                                src="https://seeklogo.com/images/M/mastercard-logo-38C4789CCA-seeklogo.com.png"
                                                width="32" height="32" alt="..." class="" />
                                        </li>
                                        <li class="list-inline-item">
                                            <img
                                                src="https://seeklogo.com/images/M/mastercard-logo-38C4789CCA-seeklogo.com.png"
                                                width="32" height="32" alt="..." class="" />
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