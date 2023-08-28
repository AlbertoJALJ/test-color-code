import React from "react";
import "./Resistor.css";
import { Typography } from "@mui/material";

interface ResistorProps {
  bandColors: string[];
  value: number | null;
  tolerance: number | null;
}

const Resistor: React.FC<ResistorProps> = ({ bandColors, value, tolerance }) => {
  const colorValues: { [key: string]: string } = {
    Black: "#000000",
    Brown: "#8B4513",
    Red: "red",
    Orange: "orange",
    Yellow: "yellow",
    Green: "green",
    Blue: "blue",
    Violet: "violet",
    Gray: "grey",
    White: "white",
    Gold: "#756300",
    Silver: "silver",
  };
  return (
    <div className="res">
      <div className={`r r1`}>
        <div
          className={`b`}
          style={{ right: "10px", backgroundColor: colorValues[bandColors[0]] }}
        />
      </div>
      <div className={`r r2`}>
        <div
          className={`b`}
          style={{ left: "20px", backgroundColor: colorValues[bandColors[1]] }}
        />
        <div
          className={`b`}
          style={{ left: "60px", backgroundColor: colorValues[bandColors[2]] }}
        />
      </div>
      <div className={`r r3`}>
        <div
          className={`b`}
          style={{ left: "10px", backgroundColor: colorValues[bandColors[3]] }}
        />
      </div>
      {value && (
        <>
          <Typography sx={{
            position:"absolute",
            top:"70px",
            left:"80px"
          }}>Valor:</Typography>
          <h4>{value} &#8486; tolerance: {tolerance}</h4>
        </>
      )}
    </div>
  );
};

export default Resistor;
