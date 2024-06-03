import { useLoaderData, useParams } from "react-router-dom";
import ViewPhoto from "./ViewPhoto";

// Mui===================
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

// mui================


const SinglePackage = () => {
    
    let packData = useLoaderData()
    let {id}= useParams()
    let packs = packData.find((pack)=>pack.id === parseInt(id))
    // console.log(packs);
    let {image,tourType,title,price,gallery}= packs;

console.log(gallery);
  
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
                {/* About The Tour Section */}
                <section></section>
                {/* Tour plan */}
                <section></section>
                {/* A section with a list of all tour guides */}
                <section></section>
                {/* Booking form */}
                <section></section>
            </div>
        </>
    );
};

export default SinglePackage;