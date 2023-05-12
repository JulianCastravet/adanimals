import React from 'react';
const logo = require('../../assets/logo-icon.png');
const logo2 = require('../../assets/logo_lovelace.png');

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <img src={logo.default} className="logo-img" alt="" />
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12" id="btm-l">
                        <ul className="nav-items">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">World</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#play">Play</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://lovelace.world" target="_blank" rel="noreferrer">Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12" id="btm-c">
                        <div className="hero-text">Make new Friends and Prosper</div>
                        <div className="row">
                            <div className="logo2 mx-auto my-2">
                                <a href="https://www.lovelace.world" target="_blank" rel="noreferrer">
                                    <img src={logo2.default} className="logo-img" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="row social-links mt-3">
                            <a className="social-link" href="https://twitter.com/AdanimalsWorld" target="_blank" rel="noreferrer">
                                <span className="social-icon twitter"></span>
                            </a>
                            <a className="social-link" href="https://discord.com/invite/lovelace" target="_blank" rel="noreferrer">
                                <span className="social-icon discord"></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12" id="btm-r">
                        <ul className="nav-items">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Join Your Tribe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Buy $ANIMAL</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-subscribe mx-auto my-3" 
                                    href="https://discord.com/invite/lovelace" 
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Subscribe for
                                    <br />
                                    News &amp; Alerts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="text-copyright mt-3">
                        © Adanimals | Terms and conditions | Privacy policy
                    </div>
                </div>
            </div>
        </footer>
    );
}