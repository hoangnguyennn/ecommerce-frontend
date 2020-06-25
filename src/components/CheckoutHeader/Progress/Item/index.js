import React from "react";
import { ProgressItemStyled } from "./styles";

const ProgressItem = ({ title, step, active, last }) => {
  return (
    <ProgressItemStyled active={active}>
      <div className="title">{title}</div>
      <div className="step">{step}</div>
      {!last && <div className="bar"></div>}
    </ProgressItemStyled>
  );
};

export default ProgressItem;
