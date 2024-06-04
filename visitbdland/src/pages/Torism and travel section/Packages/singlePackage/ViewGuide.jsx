import { Link } from "react-router-dom";


const ViewGuide = ({guide}) => {
    const {name,specialty,experience,bio,image,languages,favoriteTour, availability , id}= guide
    // console.log(guide);
    return (
        <>
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
            <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
             </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center " src={image}/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500">{bio}</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
           <p>Experience</p>
            <div className="text-red-500 font-bold">{experience}</div>
        </li>
        <li className="flex flex-col items-center justify-between">
            <p>languages</p>
            <div className="flex gap-x-1">{
                languages.map((language,index)=>(
                    <li className="text-green-500 font-semibold" key={index}>{language}</li>
                ))
            }</div>
        </li>
        {/* <li className="flex flex-col items-center justify-around">
            <p>Availability</p>
            <div>{availability}</div>
        </li> */}
    </ul>
    <div className="p-4 border-t mx-8 mt-2">
        <Link to={`/guides/${id}`} className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">View Details</Link>
    </div>
</div>
        </>
    );
};

export default ViewGuide;