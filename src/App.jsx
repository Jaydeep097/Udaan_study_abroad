import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import "./index.css";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="container">
                <Title subTitle="Our Events" title="What we offer" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title  title="Dream Destinations to Study Abroad" />
                <Campus />
                <Title subTitle="Testimonials" title="What Students Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                {/* <Footer /> */}
              </div>
            </>
          } />
          <Route path="/programs" element={
            <div className="container">
              <Title subTitle="Our Events" title="What we offer" />
              <Programs />
            </div>
          } />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </BrowserRouter>
  );
};

export default App;
