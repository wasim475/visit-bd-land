import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


// =============Mui====================
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// =============Mui====================


const MeetOurGuides = () => {

//     <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>

    let GuidesData = useLoaderData()
    // let guidesData = useLoaderData()
    let {id}= useParams()
    let guides = GuidesData.find((pack)=>pack.id === parseInt(id))
    console.log(guides)
    const {name,specialty,experience,bio,image,languages,skills,education,favoriteTour,email,phone,socialMedia,certifications,address,availability}= guides
    return (
        <>
            <div className=" px-5 lg:px-60 md:px-40">
                <section className="md:flex gap-x-9">
                    <div className=" w-32 h-32 relative  border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center " src={image}/>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold mt-5">{name}</h1>
                    {/* <p className="bg-orange-800 inline-block text-white rounded-full px-2">Experience: {experience}</p> */}
                        <ul className="flex gap-x-1 mt-2">
                        {
                            skills.map((skill, index)=>(
                                <li title="Skils" className="bg-green-200 px-2 rounded-lg font-medium">{skill}</li>
                            ))
                        }
                        </ul>
                        <hr className="mt-20 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                </section>

                <section className="lg:flex md:flex md:justify-around ">
                        <div>
                            <h1 className="font-bold text-2xl">Education</h1>
                            <ul className="mt-3">
                                {
                                    education.map((edu,index)=>(
                                        <>
                                        <li className="font-medium" key={index}>{edu.degree}</li>
                                        <li key={index}>{edu.University}</li>

                                        </>
                                        
                                    ))
                                }
                            </ul>
                            <div className="mt-3">
                                <h1 className="text-xl font-semibold">language</h1>
                                <ul className="flex gap-x-1">{
                                    languages.map((language,index)=>(
                                    <li className="text-green-500 font-semibold" key={index}>{language}</li>
                                ))
                            }</ul>
                            </div>
                            <div className="mt-3">
                                <h1 className="text-xl font-semibold">Availability</h1>
                                <p>{availability}</p>
                            </div>
                        </div>

                        <div>
                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <p className="font-bold">Phone:</p>
                                <p>{phone}</p>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <p className="font-bold">Email:</p>
                                <p>{email}</p>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <p className="font-bold">Address:</p>
                                <p>{address}</p>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <p className="font-bold mb-3 mt-3">Social Media:</p>
                                <p className="flex gap-x-10 justify-start"> <Link ><FaFacebook className="text-2xl text-blue-700"/></Link> <Link><FaTwitter className="text-2xl text-blue-400"/></Link> </p>
                            </Typography>
                            
                        </CardContent>
      
                    </Card>
                </div>
                </section>
                <section className="mb-5">
                    <div>
                        <h1 className="text-3xl">About</h1>
                        <p>{bio}</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MeetOurGuides;