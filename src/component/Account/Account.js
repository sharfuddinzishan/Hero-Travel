import { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Reset from './../Reset/Reset';


function Account() {
    // By Default Tooggle means Registration form appear when user click on Account menu 
    const [toggle, setToggle] = useState(false);
    // To Get Reset Form of email 
    const [reset, setReset] = useState(false);

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="col-12 mx-auto pb-0 mb-0">
                            {
                                reset ? <Reset></Reset> :
                                    toggle ?
                                        <Login></Login>
                                        :
                                        <Register></Register>
                            }
                        </div>
                        <div className="col-12 mb-3 ps-5 pt-0 mt-0 mx-auto">
                            {
                                reset ? '' :
                                    toggle ?
                                        <>
                                            <div className="form-check">
                                                <input key={Math.random()} onChange={() => setToggle(!toggle)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Want To Create New Account?
                                                </label>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="form-check">
                                                <input key={Math.random()} onChange={() => setToggle(!toggle)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    Have Account Already?
                                                </label>
                                            </div>
                                        </>
                            }
                            <div className="form-check">
                                <input onChange={() => setReset(!reset)} className="form-check-input" type="checkbox" value="" id="flexCheckReset" />
                                <label className="form-check-label" for="flexCheckReset">
                                    Reset?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid pt-5" src="https://i.ibb.co/8Xmh7cd/image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
