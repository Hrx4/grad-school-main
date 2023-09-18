import React from 'react';

export default function Header() {
    const fontSize = {
        fontSize: "20px"
    }
    return (
        <>
            <header className="main-header clearfix" role="header">
                <div className="logo">
                    <a href="/" style={fontSize}><em style={fontSize}>Lakshyam</em> Coaching</a>
                </div>
                <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
                <nav id="menu" className="main-nav" role="navigation">
                    <ul className="main-menu">
                        <li><a href="#section1">Home</a></li>
                        <li><a href="#section2">About Us</a></li>
                        <li><a href="#section4">Courses</a></li>
                        <li className="has-submenu"><a href="/">Free Tutorial</a>
                            <ul className="sub-menu">
                                <li><a href="#section">Free Notes</a></li>
                                <li><a href="#section">Free Videos</a></li>
                            </ul>
                        </li>
                        <li><a href="#section6">Contact</a></li>
                        <li><a href="Lakshyam Backend Design.pdf" target="_blank">Login</a></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}
