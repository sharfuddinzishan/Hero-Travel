import React, { useState } from 'react';
import initialization from './../../firebase/firebaseInitialize';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

initialization();
const Register = () => {
    // Get Firebase settings  from custom hook
    const { createUser, setUserFullName, error, setError } = useAuth();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Get Input Values from registration field 
    const handleInput = e => {
        if (e.target.type === 'text')
            setUserName(e.target.value)
        else if (e.target.type === 'email')
            setEmail(e.target.value)
        else
            setPass(e.target.value)
    }

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        createUser(email, pass, userName)
            .then(() => {
                // Update user by providing nrewly registerd person name 
                setUserFullName(userName)
                setError('');
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <>
            <div className="container p-5">
                <h1 className="text-center text-light">Register Here</h1>
                {error?.length ? <p className="h6 text-muted">{error}</p> : ''}
                <form onSubmit={handleRegistrationForm}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onChange={handleInput} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={handleInput} type="email" className="form-control" required />
                        <span id="emailHelp" className="form-text">We'll never share your email with anyone else.</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={handleInput} type="password" className="form-control" required />
                        <span id="passwordHelpInline" className="form-text">Must be 6-20 characters long.</span>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Register;