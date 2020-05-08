import React from 'react';
import { Switch } from 'react-router-dom';
import { UsersList } from '../../users/users-list/UsersList';
import { User } from './../../users/user/User';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticatedRoute';
import { UserEdit } from '../../users/user-edit/UserEdit';

export function Main({ count }) {    
    return (
        <div className="main-content">
            <Switch>
                <AuthenticatedRoute exact path="/users" component={UsersList} />                
                <AuthenticatedRoute exact path="/users/:id" component={User} />
                <AuthenticatedRoute exact path="/users/edit/:id" component={UserEdit} /> 
            </Switch>
        </div>
    );
}

// export const MainComponent = () => {
//     return (
//         <div className="main-content">
//         <span>Main content is working.</span>
//     </div>
//     );
// }