import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ViewTourInfo = ({content}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const {heading, title , plans} = content;
    return (
        <>
            <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {heading}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
                plans.map((plan,index)=>(
                    <li className='mb-2' key={index}>{`${plan.heading} : ${plan.title} `}</li>
                ))
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </>
    );
};

export default ViewTourInfo;