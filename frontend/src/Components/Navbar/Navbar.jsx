import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
        <div className='logo' style={{width: "50px", height: "50px", backgroundColor: "red"}}>
          <img src='' alt=''></img>
        </div>
            <nav>
                <ul className='flex'>
                    <li className=''>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <input type='search' required placeholder='Enter your search'></input>
            </div>

        </div>
    )
}

export default Navbar
