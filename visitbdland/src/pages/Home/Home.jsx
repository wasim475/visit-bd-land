import React from 'react';
import Banner from '../Banner/Banner';
import TorismTravelSection from '../Torism and travel section/TorismTravelSection';
import TourType from '../Tour Type/TourType';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TorismTravelSection/>
            <TourType/>
        </div>
    );
};

export default Home;