import React, { Component } from 'react';

const Template = ({templates}) => {
    const templateList = templates.map(template => {
        return (
            <div className="col-md-4" key={template.id}>
                <div className="card">
                    <img className="card-img-top" src={template.imgSrc} alt="Card cover cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{template.title}</h5>
                        <p className="card-text">{template.shortDescription}</p>
                        <a href={template.previewLink} className="btn btn-primary">Preview</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row">
            {templateList}
        </div>
    )
}

export default Template