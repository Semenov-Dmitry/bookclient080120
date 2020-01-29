import React from 'react';
import {connect} from 'react-redux';
import {createBook} from "../actions";


class CreateBook extends React.Component {
    state = {
        title:'',
        author:'',
        description:'',
        published:''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e=>{
        e.preventDefault();
        if(this.state.title.trim() && this.state.author.trim() && this.state.description.trim() && this.state.published.trim()){
            this.props.onAddBook(this.state);
            this.handleReset();
        }
    };
    handleReset= ()=>{
        this.setState({
            title:'',
            author:'',
            description:'',
            published:''
        });
    };

    render() {
        return(
            <div className="container-fluid d-flex justify-content-sm-start justify-content-md-center justify-content-lg-end">
                <button type="button" className="flex-xl-fill btn bg-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
                </button>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Heading</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            className="form-control"
                                            name="title"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }
                                        /><br />
                                        <input
                                            type="text"
                                            placeholder="author"
                                            className="form-control"
                                            name="author"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.author }
                                        /><br />
                                        <input
                                            type="text"
                                            placeholder="description"
                                            className="form-control"
                                            name="description"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.description }
                                        /><br />
                                        <input
                                            type="text"
                                            placeholder="published"
                                            className="form-control"
                                            name="published"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.published }
                                        />
                                    </div>
                                    <button onClick={this.handleSubmit} className="border-0 bg-success rounded" data-dismiss="modal">Add Book</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddBook: book => {
            dispatch(createBook(book));
        }
    };
};

export default connect(null, mapDispatchToProps)(CreateBook)