import React, { Component } from 'react';
import AdminLeftPanel from './AdminLeftPanel';
import AdminRightPanel from './AdminRightPanel';

class Admin extends Component {
    state = this.props;
    render() {
        return (
            <div>
                <AdminLeftPanel />
                <AdminRightPanel templates={this.state.templates} />
            </div>
        );
    }
}

export default Admin