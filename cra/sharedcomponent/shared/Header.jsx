import React from 'react';
import '../assets/header.css';

function Header({title}) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;