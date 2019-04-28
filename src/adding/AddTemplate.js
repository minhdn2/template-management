import React, { Component } from 'react';

class AddTemplate extends Component {
    state = {
        imgSrc: null,
        title: null,
        shortDescription: null,
        previewLink: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTemplate(this.state);
    }
    render() {
        return (
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="imgSrc">Image Link:</label>
                        <input type="text" id="imgSrc" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortDescription">Short Description:</label>
                        <input type="text" id="shortDescription" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="previewLink">Preview Link:</label>
                        <input type="text" id="previewLink" className="form-control" onChange={this.handleChange} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTemplate