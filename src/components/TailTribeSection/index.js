import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hook/useOnScreen';
// 
const leftDoor = require('../../assets/img/left-door.png');
const rightDoor = require('../../assets/img/right-door.png');
const grass = require('../../assets/img/grass.png');
const RedtailPng = require('../../assets/hero/red-tail.png');
// const Redtail = require('../../assets/hero/red-tail.gif');
const Whitetail = require('../../assets/hero/white-tail.gif');
const Purpletail = require('../../assets/hero/purple-tail.gif');
const leaf = require('../../assets/img/leaf.png');

export default function TailTribeSection() {
    const refDoors = useRef(null);
    // const visibleDoors = useOnScreen(refDoors);
    const refLeaves = useRef(null);
    const visibleLeaves = useOnScreen(refLeaves);
    const [scrollHeight, setScrollHeight] = useState(0);
    // const [openingDoors, setOpeningDoors] = useState(false);
    const [scrollStartLimit, setScrollStartLimit] = useState(4550); // 4250

    useEffect(() => {
        setScrollStartLimit(4550 - (1920 - window.screen.width));
        window.addEventListener('scroll', handleScrollEvent);
    }, []);

    const handleScrollEvent = (e) => {
        setScrollHeight(e.target.documentElement.scrollTop);
        // console.log('>>>>', e.target.documentElement.scrollTop);
        // if (openingDoors && scrollStartLimit) {
        //     setScrollStartLimit(e.target.documentElement.scrollTop);
        // } else {
        //     setScrollStartLimit(0)
        // }
    }
    const handleDoorOpenY = () => {
        if(refDoors.current) {
            // let doorsStyle = getComputedStyle(refDoors.current);
            // let doorWidth = (doorsStyle.width).replace('px', '') / 2;
            let x = (scrollHeight - scrollStartLimit) / 1.0;
            // console.log('<><>', scrollHeight, scrollStartLimit, x);
            if (x < 0) {
                x = 0;
            } 
            return x + 'px';
        }
    }
    
    const handleDoorOpenX = () => {
        if(refDoors.current) {
            // let doorsStyle = getComputedStyle(refDoors.current);
            // let doorWidth = (doorsStyle.width).replace('px', '') / 2;
            let x = (scrollHeight - scrollStartLimit) / 1.5;
            // console.log('<><>', scrollHeight, scrollStartLimit, x);
            if (x < 0) {
                x = 0;
            } 
            return '-' + x + 'px';
        }
    }

    return (
        <section className="section-tail-tribe">
            {/* {visibleDoors ? setOpeningDoors(true) : setOpeningDoors(false)} */}
            <div className="doors" ref={refDoors}>
                <img className="left-door" 
                    src={leftDoor.default} alt="door" 
                    style={{
                        top: handleDoorOpenY(),
                        left: handleDoorOpenX()
                    }}
                />
                <img className="right-door" 
                    src={rightDoor.default} alt="door" 
                    style={{
                        top: handleDoorOpenY(),
                        right: handleDoorOpenX()
                    }}
                />
            </div>
            <div className="dojo-animation">
                <div className="bottom-grass">
                    <img className="grass-img" src={grass.default} alt="grass" />
                </div>
            </div>
            <div className="tail-tribe">
                <div className={visibleLeaves ? "leaves animation" : "leaves"} ref={refLeaves}>
                    <img className="leaf leaf1" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf2" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf3" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf4" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf5" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf6" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf7" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf8" src={leaf.default} alt="leaf" />
                    <img className="leaf leaf9" src={leaf.default} alt="leaf" />
                </div>
                <div className="container-fluid">
                    {/* <div className="section-head bg-grass"> */}
                    <div className="section-head">
                        <div className="head-card">
                            <div className="icon-wrapper">
                                <span className="icon-diamond yellow"></span>
                            </div>
                            <div className="headline mt-3">Embrace your Tail Tribe to Fulfil your Destiny</div>
                            <div className="subline my-5">
                                Your Adanimal will have one of the 3 unique tails, which defines its tribe… and your destiny!
                                <br />
                                Adanimals is about caring and friendship, and there are many collaborative Adanimals in and out-of-game missions and incentives that reinforce this theme. Making friends with your tribe members on discord is just one of the many ways, soon to be revealed…
                            </div>
                            <div className="row mx-0">
                                <a className="btn btn-signup mx-auto" href="https://discord.com/invite/lovelace" target="_blank" rel="noreferrer">Join Our World</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container tail-card-container pt-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="tail-card mt-0">
                                <div className="card-content bg-tail">
                                    <img src={RedtailPng.default} className="hero-img" alt="Radiant Red" />
                                </div>
                                <div className="card-caption">Radiant Red</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="tail-card">
                                <div className="card-content bg-tail">
                                    <img src={Whitetail.default} className="hero-img flipedX" alt="Illustrious Ivory" />
                                </div>
                                <div className="card-caption">Illustrious Ivory</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="tail-card mb-0">
                                <div className="card-content bg-tail">
                                    <img src={Purpletail.default} className="hero-img" alt="Powerful Purple" />
                                </div>
                                <div className="card-caption">Powerful Purple</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}