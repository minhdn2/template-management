import React, { Component } from 'react';
import Template from './../Template';

class AdminRightPanel extends Component {
    state = {
        templates: [
            { id: 1, imgSrc: 'templates/landerz/cover.png', title: 'Landerz', shortDescription: 'Landerz is your go-to solution when in search of the best free business landing page website template. Rock the online world with a contemporary, clean and light web design that will spark their curiosity.', previewLink: 'templates/landerz/landerz/index.html' },
            { id: 2, imgSrc: 'templates/confer/cover.png', title: 'Confer', shortDescription: 'With a free HTML conference website template like Confer, you can market your event or any upcoming gathering like a champ. Kick it off in style and make a difference.', previewLink: 'templates/confer/index.html' },
            { id: 3, imgSrc: 'templates/traveland/cover.png', title: 'Traveland', shortDescription: 'Indeed, Traveland is a free travel booking website template for travel agencies and other tourism businesses. Hammer out the best and most impressive travel page that will stand out a mile.', previewLink: 'templates/traveland/traveland/index.html' },
            { id: 4, imgSrc: 'templates/quitelight/cover.png', title: 'Quitelight', shortDescription: 'Creativity knows no boundaries and nor does Quitelight free creative magazine website template. Get things going now and shine online with your fresh page.', previewLink: 'templates/quitelight/index.html' }
        ]
    }
    render() {
        return (
            <div id="right-panel" className="right-panel">
                {/* Header*/}
                <header id="header" className="header">
                    <div className="top-left">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="./"><img src="images/logo.png" alt="Logo" /></a>
                            <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
                            <a id="menuToggle" className="menutoggle"><i className="fa fa-bars" /></a>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="header-menu">
                            <div className="header-left">
                                <button className="search-trigger"><i className="fa fa-search" /></button>
                                <div className="form-inline">
                                    <form className="search-form">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                        <button className="search-close" type="submit"><i className="fa fa-close" /></button>
                                    </form>
                                </div>
                                <div className="dropdown for-notification">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell" />
                                        <span className="count bg-danger">3</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="notification">
                                        <p className="red">You have 3 Notification</p>
                                        <a className="dropdown-item media" href="#">
                                            <i className="fa fa-check" />
                                            <p>Server #1 overloaded.</p>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <i className="fa fa-info" />
                                            <p>Server #2 overloaded.</p>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <i className="fa fa-warning" />
                                            <p>Server #3 overloaded.</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown for-message">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-envelope" />
                                        <span className="count bg-primary">4</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="message">
                                        <p className="red">You have 4 Mails</p>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Jonathan Smith</span>
                                                <span className="time float-right">Just now</span>
                                                <p>Hello, this is an example msg</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Jack Sanders</span>
                                                <span className="time float-right">5 minutes ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Cheryl Wheeler</span>
                                                <span className="time float-right">10 minutes ago</span>
                                                <p>Hello, this is an example msg</p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item media" href="#">
                                            <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                                            <div className="message media-body">
                                                <span className="name float-left">Rachel Santos</span>
                                                <span className="time float-right">15 minutes ago</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="user-area dropdown float-right">
                                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
                                </a>
                                <div className="user-menu dropdown-menu">
                                    <a className="nav-link" href="#"><i className="fa fa- user" />My Profile</a>
                                    <a className="nav-link" href="#"><i className="fa fa- user" />Notifications <span className="count">13</span></a>
                                    <a className="nav-link" href="#"><i className="fa fa -cog" />Settings</a>
                                    <a className="nav-link" href="#"><i className="fa fa-power -off" />Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* /#header */}
                {/* Content */}
                <div className="content">
                    <Template templates={this.state.templates} />
                </div>
                {/* /.content */}
                <div className="clearfix" />
                {/* Footer */}
                <footer className="site-footer">
                    <div className="footer-inner bg-white">
                        <div className="row">
                            <div className="col-sm-6">
                                Copyright © 2019 Bootstrap 4.0
                            </div>
                            <div className="col-sm-6 text-right">
                                {/* Designed by <a href="https://colorlib.com">Colorlib</a> */}
                            </div>
                        </div>
                    </div>
                </footer>
                {/* /.site-footer */}
            </div>
        );
    }
}

export default AdminRightPanel