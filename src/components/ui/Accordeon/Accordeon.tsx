"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { PlusIcon } from "../Icons/PlusIcon/PlusIcon";
import "./Accordeon.scss";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionComponentProps {
  items: AccordionItem[];
}

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  items,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {items.map((item, index) => {
        const panelId = `panel-${index}`;
        return (
          <Accordion
            className="summary"
            key={index}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={{
              ".MuiAccordionSummary-expandIconWrapper": {
                transform: "none", // Убираем вращение
                transition: "none", // Убираем анимацию
              },
              ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "none", // Убираем вращение в раскрытом состоянии
              },
            }}
          >
            <AccordionSummary
              expandIcon={<PlusIcon expanded={expanded === panelId} />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography style={{ fontWeight: 700 }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div">{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
