import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../components_css/documentGrid.css";

const DocumentGrid = ( data , title) => {
  return (
    <div className="componnt">
      <div className="compo-heading">{title}</div>
      <div className="container">
        <Grid container spacing={5}>
          {data.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.id}>
              <a href={step.url} target="_blank" className="paperLinks">
              <Paper className="paper" elevation={4}>
                {step.text}
              </Paper>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default DocumentGrid;
