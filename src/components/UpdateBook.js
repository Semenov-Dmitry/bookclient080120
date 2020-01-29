import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { updateBook } from "../actions";


class UpdateBook extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newAuthor = this.getAuthor.value;
        const newDescription = this.getDescription.value;
        const newPublished = this.getPublished.value;
        const data = {
            newTitle,
            newAuthor,
            newDescription,
            newPublished
        };
        console.log("?????");
        this.props.dispatch(updateBook(this.props.book.id,data))
    };
    render() {
        {$(document).ready(function(){
            $("#exampleModal").modal('show');
        })}
        return (

            <div>
                <div className="spinner-border"> </div>
                <div className="container">

                    <div className="modal" id="exampleModal" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Edit</h4>
                                </div>
                                <div className="modal-body">
                                    <form>

                                        <input required type="text" ref={(input) => this.getTitle = input}
                                               defaultValue={this.props.book.title} placeholder="Enter Book Title" />
                                        <input required type="text" ref={(input) => this.getAuthor = input}
                                               defaultValue={this.props.book.author} placeholder="Enter Author" />
                                        <input required type="text" ref={(input) => this.getDescription = input}
                                               defaultValue={this.props.book.description} placeholder="Enter Book Description" />
                                        <input required type="text" ref={(input) => this.getPublished = input}
                                               defaultValue={this.props.book.published} placeholder="Published Year" />
                                        <br/>
                                        <button onClick={this.handleEdit} className="border-0 bg-success rounded" data-dismiss="modal">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(UpdateBook);