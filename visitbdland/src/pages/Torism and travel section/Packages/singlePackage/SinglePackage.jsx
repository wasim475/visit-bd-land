import { useLoaderData, useParams } from "react-router-dom";
import ViewPhoto from "./ViewPhoto";
import HeadingTitle from "../../../../Components/Re-use componets/Heading and title/HeadingTitle"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// Mui===================
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewTourInfo from "./ViewTourInfo";
import ViewGuide from "./ViewGuide";
import { AuthContex } from "../../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

// mui================


const SinglePackage = () => {
  let [guides, setGuides]= React.useState([])

  React.useEffect(()=>{
    fetch('/tourGuides.json')
    .then(res=>res.json())
    .then(resData=>setGuides(resData))
  },[])
  // =========Mui=================
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    // =========Mui=================

    let packData = useLoaderData()
    // let guidesData = useLoaderData()
    let {id}= useParams()
    let packs = packData.find((pack)=>pack.id === parseInt(id))
    // console.log(packs);
    let {image,tourType,title,price,gallery, TourDetails,Contents}= packs;

// console.log(guides);
let { user } = React.useContext(AuthContex);
const [startDate, setStartDate] = React.useState(new Date());
// console.log("users info",user);

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const date = form.ddate.value;
  const price = form.price.value;
  const guideName = form.guideName.value;
  const userEmail = form.userEmail.value;
  const userName = form.userName.value;
  const photoUrl = form.photoUrl.value;

  const BookingData = {
    date,
    guideName,
    price,
    userEmail,
    userName,
    photoUrl
  };

  fetch("https://visit-bd-land-server.vercel.app/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(BookingData)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Confirm your Booking”",
          icon: "success",
          confirmButtonText: "Exit"
        });
        form.guideName.value = "";
        // form.FoodCategory.value = "";
        // form.shortDescription.value = "";
        form.price.value = "";
        // form.countryName.value = "";
        form.date.value = "";
      //   form.userEmail.value = "";
      //   form.userName.value = "";
        form.photoUrl.value = "";
      }
    });
};
  
    return (
        <>
            <div>
                {/* Gallary */}
                <section>
                <ImageList sx={{ width: 1280, height: 400 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Photo Gallary</ListSubheader>
      </ImageListItem>
      {gallery.map((item) => (
        <ImageListItem key={item.image}>
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.subtitle}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.id}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
                </section>
                {/* ==========================================================
                    About The Tour Section  Start
                    ==========================================================*/}
                <section className="mt-10">
                <div>
                  <HeadingTitle
                  heading={TourDetails.title}
                  title={TourDetails.subTitle}
                  ></HeadingTitle>
                </div>
                <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{TourDetails.hl1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {TourDetails.hl1D}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}></Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {TourDetails.hl2}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {TourDetails.hl2D}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           {TourDetails.hl3}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {TourDetails.hl3D}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}></Typography>
          <Typography className="font-bold" sx={{ color: 'text.secondary' }}>
           {TourDetails.hl4}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
              {/* ==========================================================
                    About The Tour Section  End
                    ==========================================================*/}
                </section>
                <section>
                 {/* ==========================================================
                     Tour Plan Section  Start
                    ==========================================================*/}
                    <div className="mt-10">
                      <HeadingTitle
                      heading={"Explore Our Tour Plans"}
                      title={"Tailored Adventures Await: Explore Our Diverse Tour Plans. Discover Unique Experiences and Create Unforgettable Memories with Our Curated Travel Packages."}
                      ></HeadingTitle>
                    </div>

                    <div>
                        {
                          Contents.map((content,index)=>(
                            <ViewTourInfo key={index} content={content}></ViewTourInfo>
                          ))
                        }
                    </div>

                  {/* ==========================================================
                     Tour Plan Section  End
                    ==========================================================*/}
                </section>
                <section>
                {/*============= A section with a list of all tour guides Start==========*/}
                    <div className="mt-10 mb-10">
                      <HeadingTitle
                        heading={"Meet Our Tour Guides"}
                        title={"Meet Our Expert Tour Guides. Passionate Professionals Dedicated to Enhancing Your Travel Experience.Our team of experienced and knowledgeable tour guides is here to ensure you have an unforgettable journey. Each guide brings a unique set of skills and insights, making your exploration of Bangladesh's wonders both informative and enjoyable. Learn more about our exceptional guides below."}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                          guides.map((guide,index)=>(
                            <ViewGuide key={index} guide={guide}></ViewGuide>
                          ))
                        }
                    </div>
                {/*============= A section with a list of all tour guides End============*/}
                </section>
                {/* Booking form */}
                <section>
                <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-worksans mb-6">
            Food Item Submission Form
          </h1>
          <p className="text-gray-500">
            Simply fill out the form below to added your food item.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-10">
          <div className="flex gap-x-4 mb-4">
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">User Name</span>
                  </div>
                  <input
                    // type="text"
                    name="userName"
                    value={user?.displayName}
                    readOnly
                    placeholder="User Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* item name */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">User Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="User Email"
                    name="userEmail"
                    value={user?.email}
                    className="input input-bordered w-full"
                    readOnly
                  />
                </label>
              </div>
              {/* subcategory_Name */}
              
            </div>
            
            {/* 2nd row */}
            <div className="flex gap-x-4 mb-4">
              {/* item name */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">photoUrl</span>
                  </div>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="photoUrl"
                    value={user?.photoURL}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* Price */}
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* 3rd row */}
            <div className="flex gap-x-4 mb-4">
              {/* Processing time */}
              <div className="w-1/2 ml-4">
              <DatePicker
                showIcon
                selected={startDate}
                name="ddate"
                onChange={(date) => setStartDate(date)}
              />
              </div>
              {/* Price */}
              <div className="w-1/2">
                <div className="w-1/2">
                <select name="guideName" className="select select-success w-full max-w-xs">
                    <option disabled selected>Select the guide name</option>
                {
                  guides.map((guide,index)=>(
                    <option key={index}>{guide.name}</option>
                  ))
                }
              </select>
                </div>
              </div>
            </div>

            <input type="submit" className="btn btn-block" value="Book Now" />
          </div>
        </form>
      </div>
                </section>
            </div>
        </>
    );
};

export default SinglePackage;