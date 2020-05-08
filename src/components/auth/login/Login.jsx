import React, { useState } from 'react';
import './Login.css';
import { login } from '../../../core/api/users.api';
import { Redirect } from 'react-router-dom';

export function Login(props) {

    const [userData, setUserData] = useState({});
    const [isLoggedUser, setLoggedUser] = useState(false);

    const onInputChange = (event) => {
        event.persist();
        console.log(event);

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        console.log(userData);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        login(userData).then(() => {
            console.log('LOGIN SUCCESS');
            setLoggedUser(true);
        })
        .catch((err) => console.error(err));
    };

    return (
        <>
        { isLoggedUser && <Redirect to="/" /> }
        <div className="login-wrapper">
            <form className="login-form" onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    )
}