import React from "react";
import Procedure from "./procedure";
import DocumentGrid from "./documentGrid";
import resourcesData from "../data/resourcesData";
import roadmapData from "../data/roadmapData.js";
import Faq from "./faq.js";
import { useRef } from "react";
import Header from "./header.js";

export default function Homepage() {
  const procedureRef = useRef(null);
  const resourcesRef = useRef(null);
  const roadmapsRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "procedureRef") {
      procedureRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "resourcesRef") {
      resourcesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "roadmapsRef") {
      roadmapsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "faqRef") {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header  scrollToSection={scrollToSection} />
      <div ref={procedureRef}>
        <Procedure />
      </div>
      <div ref={resourcesRef}>{DocumentGrid(resourcesData, "Resources")}</div>
      <div ref={roadmapsRef}>{DocumentGrid(roadmapData, "Roadmaps")}</div>
      <div ref={faqRef}>
        <Faq />
      </div>
    </div>
  );
}
