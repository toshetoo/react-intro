import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser, getLoggedUser } from './../../../core/api/users.api';
import { UserCard } from '../user-card/UserCard';

const currentUser = getLoggedUser();

export function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((allUsers) => {
            console.log(allUsers);
            setUsers(allUsers.data.filter(u => u.id !== currentUser.id));
        });
    }, []);

    const onUserDelete = (id) => {
        deleteUser(id).then(() => {
            setUsers((prevState) => {
                return prevState.filter(u => u.id !== id);
            })
        })
        .catch((err) => console.error(err));
    }

    return (
        <div className="users-list d-flex">
            {users.map((user) => <UserCard user={user} key={user.id} onDelete={onUserDelete} />)}
        </div>
    );
}