"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { PlusIcon } from "../Icons/PlusIcon/PlusIcon";
import "./Accordion.scss";

interface AccordionItem {
  title: React.JSX.Element | string;
  content: React.ReactNode | string;
}

interface AccordionComponentProps {
  items: AccordionItem[];
}

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  items,
}) => {
  const [expandedPanels, setExpandedPanels] = useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanels(
        (prevExpanded) =>
          isExpanded
            ? [...prevExpanded, panel] // Добавляем панель, если она раскрыта
            : prevExpanded.filter((id) => id !== panel) // Убираем панель, если она закрыта
      );
    };

  return (
    <div>
      {items.map((item, index) => {
        const panelId = `panel-${index}`;
        const isExpanded = expandedPanels.includes(panelId); // Проверяем, раскрыта ли панель
        return (
          <Accordion
            className="accordion"
            key={index}
            expanded={isExpanded}
            onChange={handleChange(panelId)}
            sx={{
              ".MuiAccordionSummary-expandIconWrapper": {
                transform: "none",
                transition: "none",
              },
              ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "none",
              },
              background: "#000a0e",
            }}
          >
            <AccordionSummary
              className="accordion__summary"
              expandIcon={<PlusIcon expanded={isExpanded} />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography className="title">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" className="content">
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
