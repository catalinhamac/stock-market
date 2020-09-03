import React, { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const Panel = (props: PanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};
