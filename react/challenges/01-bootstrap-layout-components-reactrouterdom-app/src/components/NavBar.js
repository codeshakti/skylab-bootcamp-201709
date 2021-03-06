import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">React Strap</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

export default NavBar