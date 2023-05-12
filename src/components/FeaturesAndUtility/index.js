import React from 'react';

export default function FeaturesAndUtility() {

    return (
        <section className="section-whatisit">
            <div className="container">
                <div className="section-head">
                    <div className="icon-wrapper">
                        <span className="icon-diamond green"></span>
                    </div>
                    <div className="headline">Features and Utility</div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="m-card">
                            <div className="m-card-head py-3">
                                <span className="circle-icon icon-staking"></span>
                            </div>
                            <div className="m-card-body">
                                <h5 className="mb-3">Staking</h5>
                                <ul>
                                    <li>Multiply in-game rewards</li>
                                    <li>Receive marketplace transaction fees</li>
                                    <li>Receive IDO, INO and IGO allocations</li>
                                    <li>Farm LUV Points to use in marketplace</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="m-card">
                            <div className="m-card-head py-3">
                                <span className="circle-icon icon-percentage"></span>
                            </div>
                            <div className="m-card-body">
                                <h5 className="mb-3">Deflationary Token Mechanics</h5>
                                <ul>
                                    <li>Burn total supply with addition of new mini-games</li>
                                    <li>Market-buy and burn tokens with portion of marketplace fees</li>
                                    <li>Market-buy and burn tokens with portion of Paper-hands Tax</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="m-card">
                            <div className="m-card-head py-3">
                                <span className="circle-icon icon-nft"></span>
                            </div>
                            <div className="m-card-body">
                                <h5 className="mb-3">Digital Pet NFTs</h5>
                                <ul>
                                    <li>10k unique characters with randomly generated attributes</li>
                                    <li>Gain access to Play-to-Earn features and special missions</li>
                                    <li>Stake NFT to receive rewards and enhance its skills and attributes</li>
                                    <li>Access Lovelace Launchpad INOs and Adanimals-related auctions</li>
                                    <li>Breed and claim CNFTs</li>
                                    <li>Participate in mind-bending game-theory mechanics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}