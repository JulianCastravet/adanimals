import React, { useState, useEffect } from 'react';
const logo = require('../../assets/logo.png');

export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [headerClass, setHeaderClass] = useState('');
    const toggleNav = () => {
        setOpenNav(!openNav);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
    }, []);

    const handleScrollEvent = (e) => {
        if(e.target.documentElement.scrollTop > 120) {
            setHeaderClass('fixed-header');
        } else {
            setHeaderClass('');
        }
    }

    return (
        <header className={headerClass}>
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <img src={logo.default} className="" alt="" />
                    </div>
                    <div 
                        className={openNav ? "nav-container open" : "nav-container"}
                    >
                        <ul className="nav-items">
                            <li className="nav-item">
                                <a className="nav-link" href="/#road-map">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#play">Play</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://lovelace.world" target="_blank" rel="noreferrer">Team</a>
                            </li>
                        </ul>
                        <button className="btn btn-connect-wallet" title="Coming Soon">
                            Buy $ANIMAL
                        </button>
                    </div>
                    <button 
                        className={openNav ? "btn btn-toggle-nav open" : "btn btn-toggle-nav"}
                        onClick={() => toggleNav()}
                    >
                        <span className="icon-nav-bars"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}