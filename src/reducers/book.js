const defaultstate = {
  books: [],
  isLoading: false
};
const book = (state = defaultstate, action) => {
    if(action.type === 'ADD_BOOK'){
        return[
            ...state.books, action.payload
        ];
    }else if(action.type === 'GET_ALL'){
        return {books: action.payload, isLoading: true}
    }else if(action.type === 'DELETE_BOOK'){
        return state.books.filter(book=>book.id !== action.payload);
    }else if(action.type === 'EDIT_BOOK'){
        return state.books.map((book) => book.id === action.id ? { ...book, edited: !book.edited } : book)
    }else if(action.type === 'UPDATE'){
        return state.books.map((book) => book.id === action.id ? { ...book,
            title:action.data.newTitle,
            author:action.data.newAuthor,
            description:action.data.newDescription,
            published:action.data.newPublished,
            edited: !book.edited } : book)
    }
    return state;
};
export default book;