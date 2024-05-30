import React from "react";
import "../components_css/procedure.css";
import { Grid,Paper,Typography } from "@mui/material";
import procedureData from "../data/procedureData.js";

export default function Procedure() {
  return (
    <div className="componnt">
      <div className="compo-heading">Procedure</div>
      <div className="container">
        <Grid container spacing={5}>
          {procedureData.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.id}>
              <Paper className="paper" elevation={4}>
                <Typography variant="h6" className="step-number">
                  {step.id}
                </Typography>
                <Typography variant="body1">{step.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
