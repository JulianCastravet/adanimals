import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// 
const back1 = require('../../assets/cards/Back 1.gif');
const back2 = require('../../assets/cards/Back 2.gif');
const back3 = require('../../assets/cards/Back 3.gif');
const back4 = require('../../assets/cards/Back 4.gif');
const front1 = require('../../assets/cards/Front 1.gif');
const front2 = require('../../assets/cards/Front 2.gif');
const front3 = require('../../assets/cards/Front 3.gif');
const front4 = require('../../assets/cards/Front 4.gif');

export default function PlaySection() {
    const location = useLocation();
    const ref = useRef(null);

    useEffect(() => {
        if(location.pathname === '/' && location.hash === '#play') {
            ref.current.scrollIntoView();
        }
    });

    return (
        <section className="section-play">
            <div className="container">
                <div className="play-container">
                    <div className="section-head bg-cloud" ref={ref}>
                        <div className="icon-wrapper">
                            <span className="icon-diamond red"></span>
                        </div>
                        <div className="headline">Play</div>
                    </div>
                    <div className="flip-card-container">
                        <div className="row mx-0 flip-card-wrapper">
                            <div className="col-3">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <div className="front-card">
                                                <img src={front1.default} className="card-img" alt="Rapid Runner" />
                                                <div className="card-title">Rapid Runner</div>
                                            </div>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="back-card">
                                                <img src={back1.default} className="card-img" alt="Rapid Runner" />
                                                {/* <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div>
                                                <div className="headline">
                                                    Rapid Runner
                                                </div>
                                                <div className="subline">
                                                    Race your MushRickshaw past obstacles getting cool power-ups.  Race solo or vs other players.
                                                </div>
                                                <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <div className="front-card">
                                                <img src={front2.default} className="card-img" alt="Bento Balancer" />
                                                <div className="card-title">Bento Balancer</div>
                                            </div>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="back-card">
                                                <img src={back2.default} className="card-img" alt="Bento Balancer" />
                                                {/* <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div>
                                                <div className="headline">
                                                    Bento Balancer
                                                </div>
                                                <div className="subline">
                                                    How many items can you stack before your furry friend gets annoyed?
                                                </div>
                                                <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <div className="front-card">
                                                <img src={front3.default} className="card-img" alt="MushGroove" />
                                                <div className="card-title">MushGroove</div>
                                            </div>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="back-card">
                                                <img src={back3.default} className="card-img" alt="MushGroove" />
                                                {/* <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div>
                                                <div className="headline">
                                                    MushGroove
                                                </div>
                                                <div className="subline">
                                                    Groove to original music from guest artists but do it in time with the rhythm!.  
                                                </div>
                                                <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <div className="front-card">
                                                <img src={front4.default} className="card-img" alt="Cookdano" />
                                                <div className="card-title">Cookdano</div>
                                            </div>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="back-card">
                                                <img src={back4.default} className="card-img" alt="Cookdano" />
                                                {/* <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div>
                                                <div className="headline">
                                                    Cookdano
                                                </div>
                                                <div className="subline">
                                                    Serve cafe patrons their favorite meals before it’s too late!
                                                </div>
                                                <div className="icon-wrapper">
                                                    <span className="icon-diamond red"></span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="play-sub-section">
                        <div className="row">
                            <div className="headline text-center">
                                ~ Earn rewards by playing a little bit everyday
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="subline text-center">
                                Care for your pet, grow their skills,
                                <br />
                                play the games, and reap the fruits of your labors and love.
                            </div>
                        </div>
                        <div className="row mt-5">
                            <a className="btn btn-signup mx-auto" href="https://discord.com/invite/lovelace" target="_blank" rel="noreferrer">Join Our World</a>
                        </div>
                    </div>
                </div>
                <div className="grow-container">
                    <div className="section-head">
                        <div className="icon-wrapper">
                            <span className="icon-diamond blue"></span>
                        </div>
                        <div className="headline">Grow</div>
                        <div className="subline mt-5">
                            Your bond with your Adanimal is everything! Grow it by playing mini-games, communicating with it through the chatbot, staking, and participating in special missions. Each bonding level increases the rarity of your Adanimal and possibilities for additional growth and rewards.
                        </div>
                        <div className="subline mt-3">
                            Only achieving the ultimate bond of true love will qualify your Adanimal for the ultimate experiences and opportunities.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}