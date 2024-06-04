import { useLoaderData, useParams } from "react-router-dom";
import ViewPhoto from "./ViewPhoto";
import HeadingTitle from "../../../../Components/Re-use componets/Heading and title/HeadingTitle"

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
                <section></section>
            </div>
        </>
    );
};

export default SinglePackage;