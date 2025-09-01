import React from 'react';
import './Navbar.css';
import { Image } from 'semantic-ui-react';

function Navbar() {
    return (
        <>
            <nav className="navbar-container" id="navbarid">
                <div id="logo">
                    <a href="#home">
                        <h3>DEV@Deakin</h3>
                    </a>
                </div>

                <div className="input">
                    <input type="text" placeholder="Search" />
                </div>

                <div className="list1">
                    <ul>
                        <a href="#Post" id="item4"><li>Post</li></a>
                        <a href="#Login" id="item5"><li>Login</li></a>
                        {/* Removed Sign Up option */}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
