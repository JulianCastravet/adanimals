import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

export default function MintingMilestonesSection() {
    
    return (
        <section className="section-minting-milestones">
            {/*  */}
            <div className="video-container text-center">
                <Vimeo
                    video="https://vimeo.com/647699608/afdf0598db"
                    autoplay={false}
                    loop={false}
                    responsive={true}
                />
            </div>
            {/*  */}
            {/* <div className="container">
                <div className="row">
                    <div className="section-head">
                        <div className="icon-wrapper">
                            <span className="icon-diamond blue"></span>
                        </div>
                        <div className="headline">Minting milestones</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="m-card">
                            <div className="m-card-head">
                                <div className="circle-item bg-red">25%</div>
                            </div>
                            <div className="m-card-body">
                                Adanimal Fanart Competition - Submit a fanart piece that is a combination of us and one of your other favorite NFT projects. Votes by Adanimals holders determine the winner who gets their own Adanimal!
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="m-card">
                            <div className="m-card-head">
                                <div className="circle-item bg-red">50%</div>
                            </div>
                            <div className="m-card-body">
                                NFT Giveaway with additional items from partner projects: Netvrk, Axolittles, ADA Jam and TheHUSL
                                Initial community receives a special badge 
                                More details about LoveLink revealed
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="m-card">
                            <div className="m-card-head">
                                <div className="circle-item bg-red">75%</div>
                            </div>
                            <div className="m-card-body">
                                $50k Game Builders competition started; exclusive to Adanimals holders
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="m-card">
                            <div className="m-card-head">
                                <div className="circle-item bg-red">100%</div>
                            </div>
                            <div className="m-card-body">
                                Manga project announced
                                First airdrop to initial buyers confirmed, bonus for resale volume
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}