import React, { useEffect, useRef, useState } from "react";
// import useWindowSize from '../../hook/useWindowSize';
// import Vimeo from '@u-wave/react-vimeo';
// const logo = require('../../assets/logo.png');

const Ground = require('../../assets/img/ground.jpg');
const CloudLT = require('../../assets/cloud/cloud-lt-corner.png');
const CloudRT = require('../../assets/cloud/cloud-rt-corner.png');
const Cloud1 = require('../../assets/cloud/cloud01.png');
const Cloud2 = require('../../assets/cloud/cloud02.png');
const WhiteDemon = require('../../assets/hero/White-demon.gif');
const BabyAdanimal = require('../../assets/hero/Baby-adanimal.gif');
const Alonzo = require('../../assets/hero/Alonzo.gif');
const BlueFranja = require('../../assets/hero/Blue-franja.gif');
const clouds = require('../../assets/img/clouds.png');
const FranjaAndClone = require('../../assets/img/franja-and-clone.png');
const star = require('../../assets/img/star.png');
const grass = require('../../assets/img/grass-world.png');

export default function WorldParallaxSection() {
    // const [width, height] = useWindowSize()
    const refLegend = useRef(null);
    const refCloud = useRef(null);
    const refEvent = useRef(null);
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        window.addEventListener('wheel', handleShiftScrollEvent);
    }, []);

    const getResponsiveStyles = () => {
        let min_w = 1920;
        let c_w = window.screen.width;
        let scale = Math.ceil(c_w * 1000 / min_w) / 1000;
        //
        if (c_w > min_w) {
            let style = {
                left: '50%',
                // top: '0px',
                transform: 'translateX(-50%) scale('+ scale +', '+ scale +')'
            }
            return style;
        }
        return {};
    }

    const handleScrollEvent = (e) => {
        setScrollHeight(e.target.documentElement.scrollTop);
    }

    const handleShiftScrollEvent = (e) => {
        if(e.key === "shiftKey") {
            
        }
    }

    const animatedHeight = () => {
        let ah = 1000 - scrollHeight;
        if (ah < 540) {
            ah = 540;
        }
        if (window.screen.width > 2000 && window.screen.width <= 3000) {
            ah = ah + 100;
        }
        if (window.screen.width > 3000) {
            ah = ah + 200;
        }
        return ah + 'px';
    }

    const animatedPaddingTop = () => {
        let aPT = 775 - scrollHeight;
        if (aPT < 315) {
            aPT = 315;
        }
        if (window.screen.width >= 2100 && window.screen.width <= 2300) {
            aPT = 500;
        }
        if (window.screen.width > 2300 && window.screen.width <= 2650) {
            aPT = 650;
        }
        if (window.screen.width > 2650 && window.screen.width <= 3000) {
            aPT = 800;
        }
        if (window.screen.width > 3000 && window.screen.width <= 3500) {
            aPT = 1300;
        }
        if (window.screen.width > 3500) {
            aPT = 1400;
        }
        return aPT + 'px';
    }

    // const getVimeoWidth = () => {
    //     let w = 640;
    //     if (window.innerWidth >= 576 && window.innerWidth < 767 ) {
    //         w = 520;
    //     }
    //     if (window.innerWidth < 576) {
    //         w = 320;
    //     }
    //     return w;
    // }

    // const getVimeoHeight = () => {
    //     let h = 360;
    //     if (window.innerWidth >= 576 && window.innerWidth < 767 ) {
    //         h = 295;
    //     }
    //     if (window.innerWidth < 576) {
    //         h = 180;
    //     }
    //     return h;
    // }

    return (
        <section className="section-world-parallax">
            <div className="hero-legend"
                ref={refLegend}
                style={getResponsiveStyles()}
            >
                <img className="ground position-relative" src={Ground.default} alt="Groud" />
                <img className="ground" src={Ground.default} alt="Groud" />
                <img className="cloud-lt-corner" src={CloudLT.default} alt="Cloud" />
                <img className="cloud-rt-corner" src={CloudRT.default} alt="Cloud" />
                <img className="cloud-1" src={Cloud1.default} alt="Cloud" />
                <img className="hero-white-demon" src={WhiteDemon.default} alt="White Demon" />
                <img className="hero-baby-adanimal" src={BabyAdanimal.default} alt="Baby Adanimal" />
                <img className="cloud-2" src={Cloud2.default} alt="Cloud" />
                <img className="hero-alonzo" src={Alonzo.default} alt="Alonzo" />
                <img className="hero-blue-franja" src={BlueFranja.default} alt="Blue Franja" />
            </div>
            <div className="hero-content">
                <div className="container">
                    {/* <div className="video-container">
                        <Vimeo
                            video="https://vimeo.com/647699608/afdf0598db"
                            autoplay={true}
                            loop={true}
                            width={getVimeoWidth()}
                            height={getVimeoHeight()}
                        />
                    </div> */}
                    <div className="hero-headline">
                        Welcome to <br /> Adanimals World
                    </div>
                    <div className="hero-subline">
                        Play with your Digital Pets and Prosper
                    </div>
                    <div className="row">
                        <a className="btn btn-signup mx-auto" href="https://discord.com/invite/lovelace" target="_blank" rel="noreferrer">Join Us</a>
                    </div>
                </div>
            </div>
            {/* <div className="parallax"></div> */}
            <div className="world-cloud" ref={refCloud}
                style={{top: animatedHeight()}}
            >
                <img className="cloud-img" src={clouds.default} alt="clouds" />
                <div className="section-head px-4">
                    {/* <div className="logo">
                        <img src={logo.default} className="" alt="" />
                    </div> */}
                    <div className="icon-wrapper">
                        <span className="icon-diamond yellow"></span>
                    </div>
                    <div className="headline mt-3">
                        Adanimals
                    </div>
                    <div className="subline mt-5 mx-4">
                        Adanimals is a multi-mini-game ecosystem that uses virtual pet 
                        NFTs for gameplay identity
                    </div>
                    <div className="subline mt-3">
                        We are reshaping the virtual pet engagement model by providing rewards 
                        for bonding, playing, and holding.
                    </div>
                    <div className="subline mt-3">
                        We make the journey more fun, dynamic and prosperous by merging NFT technology,
                         multiple forms of utility, innovative Game-theory and Decentralized Finance (DeFi)
                    </div>
                    <div className="row mt-5">
                        <a className="btn btn-signup mx-auto" href="https://discord.com/invite/lovelace" target="_blank" rel="noreferrer">Join Us</a>
                    </div>
                </div>
            </div>
            <div className="event-container" ref={refEvent}
                style={{paddingTop: animatedPaddingTop()}}
            >
                <div className="stars">
                    <img className="star star1" src={star.default} alt="" />
                    <img className="star star2" src={star.default} alt="" />
                    <img className="star star3" src={star.default} alt="" />
                    <img className="star star4" src={star.default} alt="" />
                    <img className="star star5" src={star.default} alt="" />
                    <img className="star star6" src={star.default} alt="" />
                    <img className="star star7" src={star.default} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="headline">
                                {/* <span className="gold-text">Season 1</span> */}
                                &nbsp;Adanimals’ Mythology
                            </div>
                            <div className="subline mt-3">
                                A mysterious event sent all Adanimals to a strange and unfamiliar world, while leaving their ‘Spirits’ behind. This is where they meet you, their Pal!
                            </div>
                            <div className="subline mt-2">
                                They can only gather the magical energy needed to return to their homeland and reunite with their Spirits by forming a strong bond with you.
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="hero-img-container">
                                <img className="hero-img" src={FranjaAndClone.default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grass-bottom">
                    <img className="grass-img" src={grass.default} alt="" />
                    <div className="overlay-gradient"></div>
                </div>
            </div>
        </section>
    )
}