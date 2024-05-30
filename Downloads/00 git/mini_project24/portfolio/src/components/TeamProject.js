import React from "react";
import "./Modal.css";

function TeamProject() {
  return (
    <div className="modal_wrap">
      <h3 style={{ color: "#fff" }}>Project Description</h3>
      <ul>
        <li>
          <h6>2024.04.01 ~ 2024.04.19</h6>
          <p>뭐라고 써야하긴 함</p>
        </li>
        <li className="modal_main">
          <div className="left">
            <img src="" />
          </div>
          <div className="right"></div>
        </li>
        <li className="modal_cont02">
          <dl>
            <dt>Tech Stack</dt>
            <dd>HTML</dd>
            <dd>CSS</dd>
            <dd>JavaScript</dd>
          </dl>
        </li>
        <li className="modal_cont03">
          <dl>
            <dt>Function</dt>
            <dd>- 로그인</dd>
            <dd>- 회원가입</dd>
            <dd>- 회원 삭제 , 관리</dd>
          </dl>
        </li>
        <li className="modal_cont04">
          <dl>
            <dt>Details</dt>
            <dd>- 페이지 링크</dd>
            <dd>- 깃 허브</dd>
            <dd>- 관련 내용 ( Notion )</dd>
          </dl>
        </li>
      </ul>
    </div>
  );
}

export default TeamProject;
