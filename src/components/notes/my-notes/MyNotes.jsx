import React from 'react';
import { useState, useEffect } from 'react';
import { NoteCard } from '../note-card/NoteCard';
import { getMyNotes } from '../../../core/api/notes.api';

const listStyles = {
    display: 'flex',
    flexWrap: 'wrap'
};

export function MyNotes(props) {
    const [userNotes, setUserNotes] = useState([]);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        getMyNotes(searchParam).then((notes) => {
            setUserNotes(notes);
        });
    }, [props.location.search]);
    
    return (
        <div className="my-notes-wrapper" style={listStyles}>
            { userNotes.map(note => <NoteCard note={note} key={note.id} /> ) }
        </div>
    )
}