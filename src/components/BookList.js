import React from 'react';
import { connect } from 'react-redux';
import {deleteBook, getAllBooks, editBook} from "../actions";
import Book from "./Book";
import UpdateBook from "./UpdateBook";

class BookList extends React.Component {
    componentDidMount() {
        this.props.AddBook();
        console.log("componentDidMount");
    }
    render() {
            const x = this.props.books;
                       // console.log("?"+this.props.books.books);
                       // console.log("!"+this.props.books.isLoading);
            return (
                <div>
                    {x.map(book => console.log("!"+this.props.books.isLoading))}
                    {/*{x.map(book => (book.edited ? <UpdateBook book={book} key={book.id}/> :*/}
                    {/*    <Book key={book.id} book={{...book, edited: false}} delete={this.props.onDeleteBook}*/}
                    {/*          edit={this.props.onEditBook}/>))}*/}
                </div>
            );
        }
}
const mapStateToProps = (state) =>{
    return{
        books: state.booksData.books,
        isLoading: state.booksData.isLoading
    }
};

export default connect(
   mapStateToProps,
    dispatch => ({
        AddBook: () => {
            dispatch(getAllBooks());
        },
        onDeleteBook:(id=>{
            dispatch(deleteBook(id))
        }),
        onEditBook:(id=>{
            dispatch(editBook(id));
        })
    })
)(BookList);