import React, { Component } from 'react';
import AdminLeftPanel from './AdminLeftPanel';
import AdminRightPanel from './AdminRightPanel';

class Admin extends Component {
    render() {
        return (
            <div>
                <AdminLeftPanel />
                <AdminRightPanel />
            </div>
        );
    }
}

export default Admin