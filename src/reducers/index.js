import {combineReducers } from 'redux';
import book from "./book";

export default combineReducers ({
    booksData: book,
});