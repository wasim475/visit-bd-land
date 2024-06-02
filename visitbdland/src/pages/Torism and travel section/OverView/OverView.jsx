import React from 'react';

const OverView = () => {
    return (
        <>
            <div>
                <h2 className='text-3xl mb-3'>Welcome to <span className='text-red-500 font-semibold'>VisitBDLand</span>!</h2>
                <p className='text-gray-500 text-lg mb-4'>
                Your ultimate travel companion for exploring the breathtaking beauty and vibrant culture of Bangladesh. Whether you're planning a trip or just curious about what this incredible country has to offer, you've come to the right place. Let us guide you through an unforgettable journey.
                </p>
                
                <h3 className='text-xl mb-1'>Discover the Wonders of Bangladesh</h3>
                <p>
                    <strong>Video: "Explore Bangladesh | Beautiful Bangladesh | Visit Bangladesh"</strong>
                </p>
                <div className='py-4'>
                    <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Cn4G2lZ_g2I" 
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Explore Bangladesh Video"
                    ></iframe>
                </div>
                <p>
                    Experience the mesmerizing beauty of Bangladesh through this captivating video. From the lush green landscapes to the vibrant cityscapes, this video takes you on a visual journey across some of the most iconic and picturesque locations in the country.
                </p>
                
                <h4>Explore Major Attractions</h4>
                <ul>
                    <li><strong>Sundarbans Mangrove Forest:</strong> Explore the world's largest mangrove forest and its unique wildlife.</li>
                    <li><strong>Cox's Bazar:</strong> Relax on the world's longest natural sea beach.</li>
                    <li><strong>Srimangal:</strong> Wander through the picturesque tea gardens and enjoy the tranquility.</li>
                    <li><strong>Bandarban:</strong> Hike through the hills and experience breathtaking views.</li>
                    <li><strong>Dhaka:</strong> Discover the bustling capital city with its rich history and culture.</li>
                </ul>
                
                <h3>Experience the Culture</h3>
                <p><strong>Immerse in Local Culture</strong></p>
                <p>
                    Bangladesh offers a rich tapestry of cultural experiences, from traditional festivals to local cuisine.
                </p>
                <ul>
                    <li><strong>Festivals:</strong> Experience the vibrant celebrations of Pohela Boishakh (Bengali New Year) and Durga Puja.</li>
                    <li><strong>Cuisine:</strong> Savor the flavors of Bangladeshi cuisine, with dishes like biryani, hilsa fish curry, and pithas (traditional cakes).</li>
                    <li><strong>Handicrafts:</strong> Explore the exquisite craftsmanship in local markets, including muslin textiles and handcrafted jewelry.</li>
                </ul>
                <p>
                    <strong>Video: "Cultural Journey through Bangladesh"</strong>
                </p>
                
                <h3>Plan Your Trip</h3>
                <p><strong>Travel Tips and Essentials</strong></p>
                <p>
                    Planning a trip can be overwhelming, but we're here to help. From visa information to travel itineraries, we've got you covered.
                </p>
                <ul>
                    <li><strong>Travel Itineraries:</strong> Find suggested itineraries for different lengths of stay, from weekend getaways to extended trips.</li>
                    <li><strong>Travel Tips:</strong> Get practical advice on transportation, accommodation, and local customs.</li>
                    <li><strong>Safety and Health:</strong> Learn about safety tips and health precautions to ensure a smooth trip.</li>
                </ul>
                <p>
                    <strong>Video: "Travel Tips for First-Time Visitors to Bangladesh"</strong>
                </p>
            </div>

        </>
    );
};

export default OverView;