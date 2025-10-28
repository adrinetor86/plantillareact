import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">

                        <NavLink className="navbar-brand" to={"/"}>Navbar</NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/create"}>Create</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/edit"}>Edit</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/delete"}>Delete</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        {

                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;