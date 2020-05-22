import React, { Component } from 'react';
import { getUserById } from '../../../core/api/users.api';
import { UserCard } from './../user-card/UserCard';
import { getNotesByAuthorId, deleteNote } from '../../../core/api/notes.api';
import { NoteCard } from '../../notes/note-card/NoteCard';

export class User extends Component {

    constructor(props) {
        super(props);

        this.state =  {
            user: {},
            notes: []
        };
    }

    componentDidMount() {
        console.log(this.props);
        getUserById(this.props.computedMatch.params.id).then((response) => {
            this.setState({
                user: response.data
            });
        });

        getNotesByAuthorId(this.props.computedMatch.params.id).then((userNotes) => {
            this.setState({
                notes: userNotes
            });
        })
    }

    onDelete = (id) => {
        deleteNote(id).then(() => {
            const allNotes = this.state.notes;
            const newNotes = allNotes.filter(note => note.id !== id);
            this.setState({
                notes: newNotes
            });
        })
    };

    render() {
        return (
            <div className="single-user">
                <UserCard user={this.state.user} />
                 { this.state.notes.map(note => < NoteCard note={note} key={note.id} onDeleteClick={this.onDelete} /> )}
            </div>
        )
    }
}
