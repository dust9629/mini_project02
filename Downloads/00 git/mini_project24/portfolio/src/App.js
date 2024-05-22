import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import TeamProject from "./components/TeamProject";
import Contact from "./components/Contact";
import AtoZ from "./components/AtoZ";
import ImageGallery from "./components/ImageGallery";
import TimeDisplay from "./components/TimeDisplay";
import ScrollChangeSection from "./components/ScrollChangeSection";
import ColorPicker from "./components/ColorPicker";
import mainVideo from "./assets/videos/main_video.mp4";

function App() {
  const StyledLink = styled(Link)`
    font-size: 2rem;
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    padding: 1.6rem 1.8rem;
    border: 1px solid #00000080;
    border-radius: 2.5rem;
    text-decoration: none;
    color: #000;
  `;

  let [modal, setModal] = useState(false);
  let [title, titleList] = useState(["Ecommerce", "Solution", "Build"]);
  const [sectionBgColor, setSectionBgColor] = useState("#ffffff");
  const [fontColor, setFontColor] = useState("#000000");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Router>
        <div className="App">
          <div className="top_btn" onClick={scrollToTop}>
            Back To Top
          </div>
          <nav>
            <ul className="nav_wrap left">
              <li>
                <StyledLink to="/contact">Contact</StyledLink>
              </li>
            </ul>
            <ul className="nav_wrap right">
              <li>
                <StyledLink to="/team-project">Team_project</StyledLink>
              </li>
              <li>
                <StyledLink to="/a-z">A-Z</StyledLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/team-project" element={<TeamProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-z" element={<AtoZ />} />
          </Routes>

          <div className="mo_nav_wrap">
            <p onClick={() => setModal(true)}>menu</p>
            {modal ? <NavMobile /> : null}
          </div>
        </div>
      </Router>

      {/* main - section01 */}
      <div className="section01">
        <div className="main_bg">
          <video autoPlay muted loop id="mainVideo">
            <source src={mainVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contents">
          <div className="ImgCont">
            <ImageGallery />
          </div>
        </div>
        <div className="main_txt">
          <h1>Front-end</h1>
        </div>
        <div className="bottom_txt">
          <p>2021_2024 - ⓒ Lindsey_dust9629</p>
          <TimeDisplay />
        </div>
      </div>

      {/* section02 */}
      <ScrollChangeSection
        threshold={window.innerHeight / 1.8}
        changeBgClass="dark_mode"
      >
        <div className="section02">
          <h2>Contents</h2>
          <ul>
            {title.map((a, i) => (
              <li key={i}>
                {i + 1}.{a}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              let titleChg = [...title];
              titleChg[0] = "이커머스";
              titleList(titleChg);
            }}
          >
            click
          </button>
        </div>
      </ScrollChangeSection>

      {/* section03 */}
      <div className="section03" style={{ backgroundColor: sectionBgColor }}>
        <h3>Color-Hex Code</h3>
        <div className="color_wrap">
          <ColorPicker
            onBackgroundColorChange={setSectionBgColor}
            onFontColorChange={setFontColor}
          />
          <h5 style={{ color: fontColor }}>Aa</h5>
        </div>
      </div>

      <footer>
        <h3>portfolio</h3>
      </footer>
    </div>
  );

  function NavMobile() {
    return (
      <ul className="mo_nav">
        <li>Contact</li>
        <li>Team_project</li>
        <li>A-Z</li>
      </ul>
    );
  }
}

export default App;
