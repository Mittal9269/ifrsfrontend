import React from "react";
import GoogleLogin from "react-google-login";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { NotificationObject , axiosHeader , CookieStoreObject } from "../style/Notification";
import { NavLink } from "react-router-dom";

export default function Normal() {
    let Token;
    const [cookies, setCookie] = useCookies(['user']);

    const responseSuccessGoogle = (response) => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND}/api/googlelogin`,
            data: JSON.stringify({ tokenId: response.tokenId }),
            headers: axiosHeader
        })
            .then(res => {

                if (res.data.message === "Other mail") {
                    toast.warning('Please Login with IITDh Email', NotificationObject);
                } 
                
                else {

                    Token = res.data.jsonToken;
                    if (Token !== undefined && Token !== null) {

                        setCookie('jwttoken', Token, CookieStoreObject);
                        setCookie('ADMIN', res.data.user.isAdmin, CookieStoreObject);
                        setCookie('ID', res.data.user._id, CookieStoreObject);

                        toast.success('Successfully login', NotificationObject);
                        window.location.reload();
                    }
                    else {
                        toast.error('Something went Wrong', NotificationObject);
                    }
                }

            })
            .catch(err => console.log(err))

    }
    const responseErrorGoogle = (response) => {
        toast.error('Error from the Google Site', NotificationObject);
    }


    return (
        <>
            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact to="/static">Statistics</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/mess">Mess Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/review">Feedback / Review
                        </NavLink></li>
                </ul>
            </div>

            <div className="button">
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENTID}
                    buttonText="Login"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}