import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HeadingTitle from '../../Components/Re-use componets/Heading and title/HeadingTitle';
import OverView from './OverView/OverView';

const TorismTravelSection = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
        <section className='lg:mt-20 md:mt-10 mt-5'>
            <div className='mt-6'>
                <HeadingTitle heading={"Tourism and Travel Guide Section"} title={"Explore the Wonders of Bangladesh: Your Ultimate Travel Guide"}></HeadingTitle>
            </div>
            <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Our Packages" value="2" />
            <Tab label="Meet Our Tour Guides" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><OverView/></TabPanel>
        <TabPanel value="2">Our Packages</TabPanel>
        <TabPanel value="3">Meet Our Tour Guides</TabPanel>
      </TabContext>
    </Box>
            </div>
        </section>
            
        </>
    );
};

export default TorismTravelSection;