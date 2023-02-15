import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'

function Navbar() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const logOut = () => {
       
        removeCookie('token');
        navigate('/admin/login');
    }
    return (
        <div className='navbar-fixed'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-pink">
                <div class="container-fluid px-5">
                    <a class="navbar-brand" href="#">CoursoType</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item nav-align">
                                <p class="nav-link active" aria-current="page" >Home</p>
                            </li>
                            <li class="nav-item nav-align">
                                <NavLink to={'/admin/courses'}  className="navLink">
                                <p class="nav-link" >Courses</p>
                                </NavLink>
                            </li>
                            <li class="nav-item nav-align">
                            <NavLink to={'/admin/users'} className="navLink">
                                <p class="nav-link" >UserList</p>
                                </NavLink>
                            </li>
                        </ul>
                        <div class="d-flex">

                            <button class="btn btn-outline-light" onClick={logOut} >Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar