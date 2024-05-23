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
import CursorFollower from "./components/CursorFollower";
import TaskContents from "./components/TaskContents";
import howTxtImage from "./assets/images/how_txt.png";
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
  let [title, titleList] = useState([
    "Personal Projects",
    "Development",
    "Maintenance",
  ]);
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
      <CursorFollower />
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

      {/* cont - section02 */}
      <ScrollChangeSection
        threshold={window.innerHeight / 1.9}
        changeBgClass="dark_mode"
      >
        <div className="section02">
          <h2>Contents</h2>
          <TaskContents titles={title} />
        </div>
      </ScrollChangeSection>

      {/* cont - section03 */}
      <div className="section03" style={{ backgroundColor: sectionBgColor }}>
        <div className="how_to">
          <img src={howTxtImage} alt="How to text description" />
        </div>
        <h2>Color-Hex Code</h2>
        <div className="color_wrap">
          <ColorPicker
            onBackgroundColorChange={setSectionBgColor}
            onFontColorChange={setFontColor}
          />
          <h5 style={{ color: fontColor }}>Aa</h5>
        </div>
      </div>

      {/* foot - footer */}
      <footer>
        <ul className="footer_wrap">
          <li>
            <h3>김은지 / dust9629@gmail.com</h3>
            <p>2021_2024 - ⓒ Lindsey_dust9629</p>
          </li>
          <li>
            <div>깃허브</div>
          </li>
        </ul>
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
