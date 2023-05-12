import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const star = require('../../assets/img/star.png');

export default function RoadMapSection() {
    const location = useLocation();
    const ref = useRef(null);

    useEffect(() => {
        if(location.pathname === '/' && location.hash === '#road-map') {
            ref.current.scrollIntoView();
        }
    });

    return (
        <section className="section-timeline">
            <div className="stars">
                <img className="star star1" src={star.default} alt="" />
                <img className="star star2" src={star.default} alt="" />
                <img className="star star3" src={star.default} alt="" />
                <img className="star star4" src={star.default} alt="" />
                <img className="star star5" src={star.default} alt="" />
                <img className="star star6" src={star.default} alt="" />
                <img className="star star7" src={star.default} alt="" />
                <img className="star star8" src={star.default} alt="" />
                <img className="star star9" src={star.default} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="section-head" ref={ref}>
                        <div className="icon-wrapper">
                            <span className="icon-diamond green"></span>
                        </div>
                        <div className="headline">Roadmap</div>
                        <div className="subline">Timeline</div>
                    </div>
                </div>
                <div className="row">
                    <div className="timeline-container">
                        <div className="timeline-item">
                            <div className="t-wrapper">
                                <div className="t-dot-wrapper">
                                    <span className="t-dot"></span>
                                </div>
                                <div className="t-content">
                                    <div className="t-headline">
                                        Q2 2021 - Q3 2021
                                    </div>
                                    <ul className="t-subline">
                                        <li className="text-line-through">Assembled team</li>
                                        <li className="text-line-through">Commissioned creation of generative art collection</li>
                                        <li className="text-line-through">Produced initial 2 min-games</li>
                                        <li className="text-line-through">Start building Lovelace (and soon Adanimals) community</li>
                                        <li className="text-line-through">Developed smart contracts for NFTs, marketplace and staking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="t-wrapper">
                                <div className="t-dot-wrapper">
                                    <span className="t-dot"></span>
                                </div>
                                <div className="t-content">
                                    <div className="t-headline">
                                        Q4 2021
                                    </div>
                                    <ul className="t-subline">
                                        <li className="text-line-through">Finish Adanimals generative art collection</li>
                                        <li className="text-line-through">Start Adanimals’ companions collection<br />generative art design</li>
                                        <li className="text-line-through">Begin marketing and community development<br />for Adanimals</li>
                                        <li className="text-line-through">Open initial whitelisting round for Adanimals INO</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="t-wrapper">
                                <div className="t-dot-wrapper">
                                    <span className="t-dot"></span>
                                </div>
                                <div className="t-content">
                                    <div className="t-headline">
                                        Q1 2022
                                    </div>
                                    <ul className="t-subline">
                                        <li>Launch $ANIMAL IDO</li>
                                        <li>Start game-builders competition</li>
                                        <li>Release 2 P2E mini-games</li>
                                        <li>Open 2nd whitelisting round for INO<br />incl. $ANIMAL snapshot</li>
                                        <li>Mint NFTs</li>
                                        <li>Reveal game theory</li>
                                        <li>Enable $ANIMAL staking</li>
                                        <li>Distribute $ANIMAL rewards</li>
                                        <li>Open LUV Points farming</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="t-wrapper">
                                <div className="t-dot-wrapper">
                                    <span className="t-dot"></span>
                                </div>
                                <div className="t-content">
                                    <div className="t-headline">
                                        Q2 2022
                                    </div>
                                    <ul className="t-subline">
                                        <li>Release Lovelink Ethereum-Cardano connector,<br />facilitating cross-chain NFT drops</li>
                                        <li>Enable CNFT claim</li>
                                        <li>Release 2 new P2E mini-games</li>
                                        <li>Burn first tranche of $ANIMAL</li>
                                        <li>Open marketplace</li>
                                        <li>Enable Adanimals NFT staking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="t-wrapper">
                                <div className="t-dot-wrapper">
                                    <span className="t-dot"></span>
                                </div>
                                <div className="t-content">
                                    <div className="t-headline">
                                        Q3 2022
                                    </div>
                                    <ul className="t-subline">
                                        <li>Launch breeding game</li>
                                        <li>Introduce 3D Adanimals into partner Metaverse</li>
                                        <li>Release second generation of<br />Adanimals NFTs natively on Cardano</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}