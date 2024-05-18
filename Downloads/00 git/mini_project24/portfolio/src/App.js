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
      <nav>
        <ul className="nav_wrap left">
          <li>Contact</li>
        </ul>
        <ul className="nav_wrap right">
          <li>Team_project</li>
          <li>A-Z</li>
        </ul>
      </nav>

      <main className="main">
        <div className="section01">
          <h1>PORTFOLIO</h1>
          <div className="contents"></div>
          <div className="like">
            좋아요👍
            <span onClick={likeFn}> {like}</span>
          </div>
        </div>

        <div className="section02">
          <h3>Contents</h3>
          <ul>
            <li>{title[0]}</li>
            <li>{title[1]}</li>
            <li>{title[2]}</li>
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

          <Contents></Contents>
        </div>
      </main>
    </div>
  );

  function Contents() {
    return (
      <div className="conts_wrap">
        <h4 className="cont_tit">솔루션</h4>
        <p>카페24</p>
      </div>
    )
  }
}

export default App;

// ---------------
