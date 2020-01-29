import React from 'react';

export default class Book extends React.Component{
    render() {
        return(
            <div className="d-flex justify-content-lg-around justify-content-center justify-content-md-between m-5">
                <p>id: {this.props.book.id}</p>
                <p>title: {this.props.book.title}</p>
                <p>author: {this.props.book.author}</p>
                <p>description: {this.props.book.description}</p>
                <p>published: {this.props.book.published}</p>
                <br/>
                <button className="border-0 bg-info rounded" onClick={()=>this.props.edit(this.props.book.id)}>Edit</button>
                <br/>
                <button className="border-0 bg-danger rounded" onClick={()=>this.props.delete(this.props.book.id)}>Delete</button>
            </div>
        )
    }
};