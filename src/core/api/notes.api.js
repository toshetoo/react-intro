import axios from 'axios';
import { getLoggedUser } from './users.api';

const apiUrl = 'http://localhost:3005'

export function getAllNotes() {
    return axios.get(`${apiUrl}/notes`);
}

export function getNoteById(id) {
    return axios.get(`${apiUrl}/notes/${id}`);
}

export async function getNotesByAuthorId(authorId) {
    const allNotes = (await getAllNotes()).data;

    return allNotes.filter(note => note.authorId === authorId);
}

export function getMyNotes() {
    const loggedUserId = getLoggedUser().id;
    
    return getNotesByAuthorId(loggedUserId);
}

export function saveNote(noteData) {
    const loggedUser = getLoggedUser();

    if (noteData.id) {
        return axios.put(`${apiUrl}/notes/${noteData.id}`, noteData);
    }

    noteData.authorId = loggedUser.id;
    noteData.authorName = loggedUser.name;
    noteData.date = new Date();

    return axios.post(`${apiUrl}/notes`, noteData);
}

export function deleteNote(id) {
    return axios.delete(`${apiUrl}/notes/${id}`);
}

export async function deleteNotesForAuthor(authorId) {
    const notes = await getNotesByAuthorId(authorId);

    notes.forEach(note => {
        deleteNote(note.id);
    });
}