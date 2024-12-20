import React from "react";
import "./PlusIcon.scss";

interface PlusIconProps {
  expanded: boolean;
}

export const PlusIcon: React.FC<PlusIconProps> = ({ expanded }) => {
  return (
    <span className="icon">
      <span className={`${expanded ? "open" : "lines"}`}>
        <svg
          role="presentation"
          focusable="false"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            strokeWidth="2px"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="square"
          >
            <g transform="translate(1.000000, 1.000000)">
              <path d="M0,11 L22,11"></path>
              <path d="M11,0 L11,22"></path>
            </g>
          </g>
        </svg>
      </span>
      <span className={"circle"}></span>
    </span>
  );
};
