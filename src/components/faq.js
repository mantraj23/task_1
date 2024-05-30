
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqData from '../data/faqData';
import "../components_css/faq.css";

const Faq = () => {
  return (
    <div className="accordion-container">
        <p className='heading-acc'>FAQS</p>
      {faqData.map((item) => (
        <Accordion key={item.id} className="accordion-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Typography variant="h6" className="accordion-question">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  className="accordion-details">
              <strong>Ques: {item.question}</strong>
            </Typography>
            <Typography  className="accordion-details">
              {item.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
