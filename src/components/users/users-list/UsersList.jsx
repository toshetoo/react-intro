import React, { useState, useEffect } from 'react';
import { getAllUsers } from './../../../core/api/users.api';
import { UserCard } from '../user-card/UserCard';

export function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((allUsers) => {
            console.log(allUsers);
            setUsers(allUsers.data);
        });
    }, []);

    return (
        <div className="users-list d-flex">
            {users.map((user) => <UserCard user={user} key={user.id} />)}
        </div>
    );
}