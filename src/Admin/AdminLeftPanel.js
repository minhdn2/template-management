import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class AdminLeftPanel extends Component {
    render() {
        return (
            < aside id="left-panel" className="left-panel" >
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/template-management/templates"><i className="menu-icon fa fa-home" />Home </Link>
                            </li>

                            <li className="menu-title">Features</li>
                            <li>
                                <Link to="/template-management/addTemplate">
                                    <i className="menu-icon fa fa-cogs" />
                                    Add new template</Link>
                            </li>

                            <li className="menu-title">Pages</li>
                            <li><Link to="/template-management/about"><i className="menu-icon fa fa-book" />About</Link></li>
                            <li><Link to="/template-management/contact"><i className="menu-icon fa fa-phone-square" />Contact</Link></li>

                            {/* <li className="active">
                                <Link to="/templates"><i className="menu-icon fa fa-home" />Home </Link>
                            </li>

                            <li className="menu-title">Features</li>
                            <li>
                                <Link to="/addTemplate">
                                    <i className="menu-icon fa fa-cogs" />
                                    Add new template</Link>
                            </li>

                            <li className="menu-title">Pages</li>
                            <li><Link to="/about"><i className="menu-icon fa fa-book" />About</Link></li>
                            <li><Link to="/contact"><i className="menu-icon fa fa-phone-square" />Contact</Link></li> */}

                            {/* <li className="menu-title">Extras</li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass" />Pages</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-sign-in" /><a href="page-login.html">Login</a></li>
                                    <li><i className="menu-icon fa fa-sign-in" /><a href="page-register.html">Register</a></li>
                                    <li><i className="menu-icon fa fa-paper-plane" /><a href="pages-forget.html">Forget Pass</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>{/* /.navbar-collapse */}
                </nav>
            </aside >
        );
    }
}

export default AdminLeftPanel