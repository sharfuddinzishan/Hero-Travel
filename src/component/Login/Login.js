import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../Hooks/useAuth';

const Login = () => {
    // Retrieved firebase methos, state from custom hook
    const { signInGoogle, signInEmailPass, error, setError } = useAuth();
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Get Input Values
    const handleInput = e => {
        if (e.target.type === 'email')
            setMail(e.target.value)
        else
            setPassword(e.target.value)
    }

    // Google POP up login 
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(() => {
                console.log('hello ' + redirect_uri)
                // window.location = '/home';
                setError('');
                console.log('Hi ', redirect_uri)
                history.push(redirect_uri);
            })
    }

    // Handle login form with given password and email 
    const handleLoginForm = (e) => {
        e.preventDefault();
        signInEmailPass(mail, password)
            .then(() => {
                setError('');
                // window.location = '/home';
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <>
            <div className="container p-5">
                <h1 className="text-center text-light">Login Panel</h1>
                {error?.length ? <p className="h6 text-muted">{error}</p> : ''}
                <form onSubmit={handleLoginForm}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onBlur={handleInput} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onBlur={handleInput} type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <button onClick={handleGoogleLogin} className="d-block mx-auto mt-3 btn btn-primary">Google Login</button>
            </div>
        </>
    );
};

export default Login;