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
                <nav className="navbar navbar-light navbar-expand-lg" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid h-25 w-50 me-auto" src="https://i.im.ge/2021/10/31/ows5mX.png" alt="Hero Travel" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/packages">Tour Packages</Link>
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
                                            <li className="nav-item dropdown">
                                                <button className="btn btn-sm btn-primary nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Admin
                                                </button>
                                                <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                                                    <li className="dropdown-item">
                                                        <NavLink className="nav-link"
                                                            to="/admin/add/tourpackage"
                                                            activeStyle={{
                                                                fontWeight: "bold",
                                                                color: "#636"
                                                            }}>
                                                            Add Package
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <NavLink className="nav-link"
                                                            to="/admin/packages"
                                                            activeStyle={{
                                                                fontWeight: "bold",
                                                                color: "#636"
                                                            }}>
                                                            All Packages
                                                        </NavLink>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <NavLink className="nav-link"
                                                            to="/admin/tours"
                                                            activeStyle={{
                                                                fontWeight: "bold",
                                                                color: "#636"
                                                            }}>
                                                            All Tours
                                                        </NavLink>
                                                    </li>
                                                </ul>
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
                                                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">
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