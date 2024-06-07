import React from 'react';
import Banner from '../Banner/Banner';
import TorismTravelSection from '../Torism and travel section/TorismTravelSection';
import TourType from '../Tour Type/TourType';
import ToristStorySection from '../Torist Story Section/ToristStorySection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TorismTravelSection/>
            <TourType/>
            <ToristStorySection/>
        </div>
    );
};

export default Home;