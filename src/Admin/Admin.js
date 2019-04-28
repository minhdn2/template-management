import React, { Component } from 'react';
import AdminLeftPanel from './AdminLeftPanel';
import AdminRightPanel from './AdminRightPanel';

class Admin extends Component {
    render() {
        return (
            <div>
                <AdminLeftPanel />
                <AdminRightPanel templates={this.props.templates} addTemplate={this.props.addTemplate}/>
            </div>
        );
    }
}

export default Admin