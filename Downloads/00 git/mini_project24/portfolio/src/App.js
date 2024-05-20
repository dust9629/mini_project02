import React, { useState } from "react";
// import { useState } from 'react';
// import Greeting from "./components/Greeting";
// import MyForm from "./components/MyForm";
// import useToggle from "./hooks/useToggle";
import "./App.css";

function App() {
  // const [username, setUsername] = useState("");
  // const { isOn, toggle } = useToggle(false);
  let [like, likeCount] = useState(0);
  let [modal, setModal] = useState(false);

  function likeFn(current) {
    likeCount(like++);
  }

  let [title, titleList] = useState(["Ecommerce", "Solution", "Build"]);
  return (
    <div className="App">
      {/* <h1>{username}님, 환영합니다.</h1>
      <MyForm
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <button
        onClick={() => {
          toggle();
        }}
      >
        {isOn === true ? "on" : "off"}
      </button> */}
      {/* 상단 menu */}
      <nav>
        <ul className="nav_wrap left">
          <li>Contact</li>
        </ul>
        <ul className="nav_wrap right">
          <li>Team_project</li>
          <li>A-Z</li>
        </ul>
      </nav>
      <div className="mo_nav_wrap">
        <p
          onClick={() => {
            setModal(true);
          }}
        >
          menu
        </p>
        {modal == true ? <NavMobile /> : null}
      </div>

      {/* 메인_01 */}
      <div className="section01">
        <div className="main_txt">
          <h1>Front-end</h1>
        </div>
        <div className="contents"></div>
        {/* <div className="like">
          좋아요👍
          <span onClick={likeFn}> {like}</span>
        </div> */}
      </div>

      {/* 메인_02 */}
      <div className="section02">
        <h2>Contents</h2>
        <ul>
          {/* <li>{title[0]}</li>
          <li>{title[1]}</li>
          <li>{title[2]}</li> */}

          {title.map(function (a, i) {
            return (
              <li key={i}>
                {i + 1}.{a}
              </li>
            );
          })}
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

      {/* 메인_03 */}
      <div className="section03">
        <h3>Color Palette</h3>
      </div>
    </div>
  );

  function Contents() {
    let [project, setProject] = useState(["카페24", "솔루션"]);
    return (
      <div className="cont_box">
        <h4 className="cont_tit">솔루션</h4>
        <div>{project[0]}</div>
      </div>
    );
  }

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

// ---------------
