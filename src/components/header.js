import React, { useState } from "react";
import "../components_css/header.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header({ scrollToSection }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex, sectionRef) => {
    setActiveButton(buttonIndex);
    scrollToSection(sectionRef);
  };

  return (
    <>
      <div className="head-con">
        <div className="head-top">
          <p>Students Preparation Portal</p>
        </div>
        <div className="head-bot">
          <Button
            variant="outlined"
            className={activeButton === 1 ? "active" : ""}
          >
            <Link to="/insights" className="insightLink">
              Insights
            </Link>
          </Button>

          <Button
            variant="outlined"
            className={activeButton === 2 ? "active" : ""}
            onClick={() => handleButtonClick(2, "procedureRef")}
          >
            Procedure
          </Button>
          <Button
            variant="outlined"
            className={activeButton === 3 ? "active" : ""}
            onClick={() => handleButtonClick(3, "resourcesRef")}
          >
            Resources
          </Button>
          <Button
            variant="outlined"
            className={activeButton === 4 ? "active" : ""}
            onClick={() => handleButtonClick(4, "roadmapsRef")}
          >
            Roadmaps
          </Button>
          <Button
            variant="outlined"
          >
            <Link to="/mock" className="insightLink">
              Mock Tests
            </Link>
          </Button>
          <Button
            variant="outlined"
            className={activeButton === 5 ? "active" : ""}
            onClick={() => handleButtonClick(5, "faqRef")}
          >
            FAQs
          </Button>
        </div>
      </div>
    </>
  );
}
