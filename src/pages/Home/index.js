import React from 'react';
import WorldParallaxSection from '../../components/WorldParallaxSection';
import FeaturesAndUtility from '../../components/FeaturesAndUtility';
import PlaySection from '../../components/PlaySection';
import TailTribeSection from '../../components/TailTribeSection';
import MintingMilestonesSection from '../../components/MintingMilestonesSection';
import RoadMapSection from '../../components/RoadMapSection';

export default function Home() {
    return (
        <div className="">
            <WorldParallaxSection />
            <FeaturesAndUtility />
            <PlaySection />
            <TailTribeSection />
            <MintingMilestonesSection />
            <RoadMapSection />
        </div>
    );
}