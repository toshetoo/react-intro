import React, { useState, useEffect } from 'react';
import './UserEdit.css';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, fetchUserById, saveUserInAPI } from '../../../core/actions/user-actions';

export function UserEdit(props) {
    console.log(props);
    const dispatch = useDispatch();
    const editedUser = useSelector(state => state.user);


    const [error, setError] = useState('');
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            dispatch(fetchUserById(props.computedMatch.params.id));
        }        
    }, [props.computedMatch.params.id, dispatch]);

    const onInputChange = (event) => {
        event.persist();
        dispatch(editUser({ [event.target.name]: event.target.value }));

        if (error) {
            setError('');
        }
    }

    const onCheckBoxChange = (event) => {
        event.persist();
        dispatch(editUser({ [event.target.name]: event.target.checked }));

        if (error) {
            setError('');
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(saveUserInAPI(editedUser));
        // saveUser(editedUser).then(() => {
        //     console.log('SUCCESS');
        //     setShouldRedirect(true);
        // })
        // .catch((err) => setError(err.message));
    }

    return (
        <>
        { shouldRedirect && <Redirect to='/users' /> }
        <div className="user-edit-wrapper">            
            <form className="user-edit-form" onSubmit={onFormSubmit}>
            { error && <span className="text-danger">{error}</span> }
                <div className="form-group">
                    <label labelfor="name">Name: </label>
                    <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} value={editedUser.name} />
                </div>
                <div className="form-group">
                    <label labelfor="age">Age: </label>
                    <input type="number" name="age" id="age" min="0" max="100" className="form-control" onChange={onInputChange} value={editedUser.age} />
                </div>
                <div className="form-group">
                    <label labelfor="email">Email: </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={onInputChange} value={editedUser.email} />
                </div>
                <div className="form-group">
                    <label labelfor="password">Password: </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={onInputChange}  value={editedUser.password} />
                </div>
                <div className="form-group">
                    <label labelfor="isActive">Is Active: </label>
                    <input type="checkbox" name="isActive" id="isActive" className="form-control" onChange={onCheckBoxChange} checked={editedUser.isActive} />
                </div>
                <div className="form-group">
                    <label labelfor="isAdmin">Is Admin: </label>
                    <input type="checkbox" name="isAdmin" id="isAdmin" className="form-control" onChange={onCheckBoxChange} checked={editedUser.isAdmin} />
                </div>
                <button className="btn btn-success">Save user</button>
            </form>
        </div>
        </>
    )
}