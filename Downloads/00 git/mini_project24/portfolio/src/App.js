import React, { useState, useRef, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import TeamProject from "./components/TeamProject";
// import Contact from "./components/Contact";
// import AtoZ from "./components/AtoZ";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";
import TimeDisplay from "./components/TimeDisplay";
import ScrollChangeSection from "./components/ScrollChangeSection";
import ColorPicker from "./components/ColorPicker";
import CursorFollower from "./components/CursorFollower";
import TaskContents from "./components/TaskContents";
import howTxtImage from "./assets/images/how_txt.png";
import Close from "./assets/images/icon_close.png";
import IconGithub from "./assets/images/icon_github.png";
import IconNotion from "./assets/images/icon_notion.png";
import IconVelog from "./assets/images/icon_velog.png";
import mainVideo from "./assets/videos/main_video.mp4";

function App() {
  const urlLinks = {
    "Personal Projects": [
      "#",
      "https://frontend-nine-tau-41.vercel.app/",
      "#",
      "https://lindsey-kim.github.io/index.html",
    ],
    Development: [
      "https://www.cmsedi.or.kr/cms",
      "https://sealystore.co.kr/",
      "https://thewhoo.com/royalartgift",
      "https://www.makeshop.co.kr/",
    ],
    Maintenance: [
      "https://www.naosmall.kr/",
      "https://maintlink2.com",
      "http://ptgraphy.co.kr/",
      "https://tongyanginc.co.kr/",
      "https://gourmet.co.kr/",
      "https://newtreemall.co.kr/",
    ],
  };
  const StyledLink = styled.a`
    font-size: 2rem;
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    padding: 1.6rem 1.8rem;
    border: 1px solid #00000080;
    border-radius: 2.5rem;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease;
  `;

  // modal 기능 구현
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => {
    setModalContent(content);
    setModal(true);
  };
  const hideModal = () => setModal(false);

  // scroll interaction
  const navRef = useRef(null);
  const section01Ref = useRef(null);
  const footerRef = useRef(null);

  const [showTopButton, setShowTopButton] = useState(true);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);

  const [wheelActive, setWheelActive] = useState(true);

  const handleWheel = useCallback(
    (e) => {
      if (!wheelActive) return;
      e.preventDefault(); // Prevent the default scroll behavior
      const { deltaY } = e;
      if (deltaY > 0 && currentSection < sectionRefs.length - 1) {
        setCurrentSection((prevSection) => {
          const newSection = prevSection + 1;
          updateTopButton(newSection);
          return newSection;
        });
      } else if (deltaY < 0 && currentSection > 0) {
        setCurrentSection((prevSection) => {
          const newSection = prevSection - 1;
          updateTopButton(newSection);
          return newSection;
        });
      }
    },
    [currentSection, wheelActive]
  );
  const handleNavScrollChange = (isDark) => {
    const navElement = navRef.current;
    if (navElement) {
      if (isDark) {
        navElement.classList.add("dark_nav");
      } else {
        navElement.classList.remove("dark_nav");
      }
    }
  };
  useEffect(() => {
    const section = sectionRefs[currentSection]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  useEffect(() => {
    const handleScroll = () => {
      // section01Ref.current가 존재하는지 확인
      if (section01Ref.current) {
        const sectionEnd =
          section01Ref.current.clientHeight + section01Ref.current.offsetTop;
        const scrollPosition = window.pageYOffset;

        if (navRef.current) {
          if (scrollPosition >= sectionEnd) {
            navRef.current.classList.add("white_mode");
          } else {
            navRef.current.classList.remove("white_mode");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let [title] = useState(["Personal Projects", "Development", "Maintenance"]);
  const [sectionBgColor, setSectionBgColor] = useState("#ffffff");
  const [fontColor, setFontColor] = useState("#000000");

  const updateTopButton = (sectionIndex) => {
    const topBtnElement = document.querySelector(".top_btn");
    if (sectionIndex === 2) {
      topBtnElement.classList.add("move");
    } else {
      topBtnElement.classList.remove("move");
    }
  };

  const scrollToTop = () => {
    setWheelActive(false);

    new Promise((resolve) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.addEventListener("scroll", function onScroll() {
        if (window.pageYOffset === 0) {
          window.removeEventListener("scroll", onScroll);
          resolve();
        }
      });
    }).then(() => {
      setCurrentSection(0); // 스크롤이 끝난 후 섹션을 0으로 설정
      updateTopButton(0); // top 버튼 업데이트
      setWheelActive(true); // 스크롤 이벤트를 다시 활성화
    });
  };

  const addClass = (className) => {
    const darkModeElement = document.querySelector(".dark_mode");
    if (darkModeElement && !darkModeElement.classList.contains(className)) {
      darkModeElement.classList.add(className);
    }
  };

  const removeClass = (className) => {
    const darkModeElement = document.querySelector(".dark_mode");
    if (darkModeElement) {
      darkModeElement.classList.remove(className);
    }
  };
  return (
    <div>
      <CursorFollower />
      {modal && <Modal content={modalContent} onClose={hideModal} />}
      <Router>
        <div className="App">
          {showTopButton && (
            <div className="top_btn" onClick={scrollToTop}>
              Back To Top
            </div>
          )}
          <nav ref={navRef}>
            <ul className="nav_wrap left">
              <li>
                <StyledLink
                  href="https://www.notion.so/d6fb630e6b9d4158b2c6436af844c3dc"
                  target="_blank"
                >
                  Contact
                </StyledLink>
              </li>
            </ul>
            <ul className="nav_wrap right">
              <li>
                <StyledLink
                  onClick={() => showModal("teamProject")}
                  className="modal"
                >
                  Team_Project
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://treasure-wolverine-e71.notion.site/1-fc9676cdd64449ecbafa9e5536053ac9?pvs=4"
                  target="_blank"
                >
                  A-Z
                </StyledLink>
              </li>
            </ul>
          </nav>

          <div className="mo_nav_wrap">
            <p onClick={showModal}>menu</p>
          </div>
        </div>
      </Router>

      {/* main - section01 */}
      <div ref={sectionRefs[0]} className="section01">
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

      {/* Modal */}
      {modal && (
        <div className="Modal_wrap" style={{ display: "block" }}>
          <div className="modal_conts">
            <TeamProject />
          </div>
          <p className="close_btn" onClick={hideModal}>
            <img src={Close} alt="close" />
          </p>
        </div>
      )}

      {/* cont - section02 */}
      <ScrollChangeSection
        threshold={window.innerHeight / 1.2}
        changeBgClass="dark_mode"
        onScrollChange={handleNavScrollChange}
      >
        <div ref={sectionRefs[1]} className="section02">
          <h2>Contents</h2>
          <TaskContents
            titles={title}
            addClass={addClass}
            removeClass={removeClass}
            urlLinks={urlLinks}
          />
        </div>
      </ScrollChangeSection>

      {/* cont - section03 */}
      <div
        ref={sectionRefs[2]}
        className="section03"
        style={{ backgroundColor: sectionBgColor }}
      >
        <div className="how_to modal" onClick={() => showModal("howTo")}>
          <img src={howTxtImage} alt="How to text description" />
        </div>
        <h2 style={{ color: fontColor }}>Color-Hex Code</h2>
        <div className="color_wrap">
          <ColorPicker
            onBackgroundColorChange={setSectionBgColor}
            onFontColorChange={setFontColor}
          />
          <h5 style={{ color: fontColor }}>Aa</h5>
        </div>
      </div>

      {/* foot - footer */}
      <footer ref={footerRef}>
        <ul className="footer_wrap">
          <li>
            <h3>김은지 / dust9629@gmail.com</h3>
            <p>2021_2024 - ⓒ Lindsey_dust9629</p>
          </li>
          <li className="icon_wrap">
            <a
              target="_blank"
              href="https://treasure-wolverine-e71.notion.site/d6fb630e6b9d4158b2c6436af844c3dc?pvs=4"
              rel="noopener noreferrer"
            >
              <img src={IconNotion} alt="Notion" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dust9629"
            >
              <img src={IconGithub} alt="Github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://velog.io/@dust9629/posts"
            >
              <img src={IconVelog} alt="Velog" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );

  // function NavMobile() {
  //   return (
  //     <ul className="mo_nav">
  //       <li>Contact</li>
  //       <li>Team_project</li>
  //       <li>A-Z</li>
  //     </ul>
  //   );
  // }

  // function Modal() {
  //   return (
  //     <div className="Modal_wrap" style={{ display: modal ? "block" : "none" }}>
  //       <h3 className="modal_tit">How to.</h3>
  //       <p className="sub_tit">How to create this page.</p>
  //       <div className="modal_conts">
  //         <ul>
  //           <li>HTML</li>
  //           <li>CSS</li>
  //           <li>React / JS</li>
  //           <li>Styled-component</li>
  //         </ul>
  //       </div>
  //       <p className="close_btn" onClick={hideModal}>
  //         {/* <img src={Close} alt="close" /> */}
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
