import axios from 'axios';
import { getLoggedUser } from './users.api';

const apiUrl = 'http://localhost:3005'

export function getAllNotes() {
    return axios.get(`${apiUrl}/notes`);
}

export function getNoteById(id) {
    return axios.get(`${apiUrl}/notes/${id}`);
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