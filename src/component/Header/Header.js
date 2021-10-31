import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    // Retrieved firebase methos, state from custom hook
    const { user, logOut } = useAuth();
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid h-25 w-25" src="" alt="Hero Travel" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/packages">Tour Packages</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/add/tourpackage">Add Tour Package</Link>
                                </li>
                                {
                                    !user?.email &&
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                to="/account"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                Register
                                            </NavLink>
                                        </li>
                                    </>
                                }
                                {
                                    user?.email ?
                                        <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"
                                                    to="/booking"
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#636"
                                                    }}>
                                                    Booking Tour
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"
                                                    to="/user/tours"
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#636"
                                                    }}>
                                                    My Tours
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link"
                                                    to="/admin/tours"
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#636"
                                                    }}>
                                                    All Tours
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink onClick={logOut} className="nav-link"
                                                    to="/home"
                                                    activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "#636"
                                                    }}>
                                                    LogOut
                                                </NavLink>
                                            </li>
                                            {/* Display User name if provided otherwise show anonymousUser  */}
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">
                                                    {user?.displayName ? user.displayName : 'AnonymousUser'}
                                                </Link>
                                            </li>
                                        </> : ''
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;