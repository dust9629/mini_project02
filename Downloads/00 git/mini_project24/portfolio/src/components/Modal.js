import React from "react";
import "./Modal.css";
import Close from "../assets/images/icon_close.png"; // Close 이미지 경로 확인
import TeamProject from "./TeamProject"; // TeamProject 컴포넌트 경로 확인

function Modal({ content, onClose }) {
  const renderContent = () => {
    switch (content) {
      case "teamProject":
        return <TeamProject />;
      case "howTo":
        return (
          <div className="modal_wrap">
            <h3 style={{ color: "#fff" }}>Project Description</h3>
            <ul>
              <li>
                <h6>2024.04.01 ~ 2024.04.19</h6>
                <p>ㅙㅈㄴ어린아ㅓㄹ</p>
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
      default:
        return <div>No content specified</div>;
    }
  };

  return (
    <div className="Modal_wrap" style={{ display: "block" }}>
      {renderContent()}
      <p className="close_btn" onClick={onClose}>
        <img src={Close} alt="close" />
      </p>
    </div>
  );
}

export default Modal;