import React from "react";
import Navbar from "./components/navbar.js";
import Homepage from "./components/homepage.js";
import Footer from "./components/footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insights from "./components/insights.js";
import Mock from "./components/mock.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/mock" element ={<Mock/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
