import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ({ question, answer }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {question}
        </AccordionSummary>
        <AccordionDetails>{answer}</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
