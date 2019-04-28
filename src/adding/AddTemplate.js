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
        console.log(this.props.navigatorHistory)
        e.preventDefault();
        this.props.addTemplate(this.state);
        // this.props.navigatorHistory.push('./template-management/templates')
        this.props.navigationHistory.push('./templates')
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-6">
                    <h1>Add new template</h1>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="imgSrc">Image Link:</label>
                            <input type="text" id="imgSrc" className="form-control" placeholder="Image Link" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" className="form-control" placeholder="Title" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shortDescription">Short Description:</label>
                            <input type="text" id="shortDescription" className="form-control" placeholder="Short Description" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="previewLink">Preview Link:</label>
                            <input type="text" id="previewLink" className="form-control" placeholder="Preview Link" onChange={this.handleChange} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddTemplate