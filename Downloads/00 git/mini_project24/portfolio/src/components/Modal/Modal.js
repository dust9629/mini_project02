import React from "react";
import "./Modal.css";
import ProjectF from "../../assets/images/project_FE.png";
import Stack01 from "../../assets/images/icon_stack01.png";
import Stack03 from "../../assets/images/icon_stack03.png";
import Stack04 from "../../assets/images/icon_stack04.png";
import Stack09 from "../../assets/images/icon_stack09.png";
import Stack11 from "../../assets/images/icon_stack11.png";
import Stack14 from "../../assets/images/icon_stack14.png";
import Stack17 from "../../assets/images/icon_stack17.png";

function Modal() {
  return (
    <div className="modal_wrap">
      <h3>Project Description</h3>
      <div className="modal_desc">
        <p>
          2024.05.14 ~ 2024.05.31
          <br />
          PC & Moblie ( Responsibility )
        </p>
      </div>
      <ul>
        <li className="modal_main">
          <a
            href="#"
            target="_blank"
            className="left"
            rel="noopener noreferrer"
          >
            <img src={ProjectF} alt="project image" />
          </a>
          <div className="right">
            <p className="lime">Portfolio</p>
            <h6>Portfolio 2024</h6>
            <h5>
              <strong>FrontEnd</strong> - 빵, 디저트 맛집 탐방 커뮤니티
            </h5>
            <div className="conts_desc">
              오마카세 맛집, 분위기 좋은 파인다이닝이 있는 곳은 많지만 “디저트를
              위한, 전국의 수천만 빵덕후들을 위한 곳은 없을까?” 에서 시작한
              프로젝트로 대략 4주에 걸쳐 기획 / 디자인 / 개발을 진행했습니다.
              <br />
              <br />
              프론트엔드 3인, 백엔드 3인으로 진행했으며 탄탄한 기획부터 각자의
              포지션 에서 열심히 제작하여 우수상을 거머쥘 수 있게 된 프로젝트
              입니다.
            </div>
          </div>
        </li>
        <li className="modal_box n2">
          <dl>
            <dt className="lime">Tech Stack</dt>
            <dd>
              <img src={Stack01} alt="CSS" />
              <img src={Stack03} alt="React" />
              <img src={Stack04} alt="vite" />
              <img src={Stack09} alt="JavaScript" />
              <img src={Stack11} alt="Styled-components" />
              <img src={Stack14} alt="Vercel" />
              <img src={Stack17} alt="Sass" />
            </dd>
          </dl>
        </li>
        <li className="modal_box n3">
          <dl>
            <dt className="lime">Function</dt>

            <dd>회원가입 / 로그인 / 로그아웃 ( 일반 / 카카오 )</dd>

            <dd>사용자 정보 조회 ( 일반 / 카카오 )</dd>
            <dd>사용자 정보 수정 ( 일반 / 카카오 )</dd>
            <dd>사용자 정보 삭제 ( 일반 / 카카오 )</dd>
            <dd>관리자 기능 ( 회원 삭제 / 매거진 발행 )</dd>
            <dd>지도 ( 현재 위치 조회 / 근처 빵집 조회 / 상세 조회 / 검색 )</dd>
            <dd>커뮤니티 ( 게시글 작성 / 읽기 / 검색 / 관리자 )</dd>
            <dd>매거진 ( 게시글 작성 / 읽기 / 관리 )</dd>
            <dd>좋아요 , 북마크, 링크 공유 ( 복사 )</dd>
          </dl>
        </li>
        <li className="modal_box n4">
          <dl>
            <dt className="lime">Details</dt>
            {/* <dd>
              <a
                href="https://frontend-nine-tau-41.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                → 브레딧 페이지로 이동
              </a>
            </dd> */}
            <dd>
              <a
                href="https://plant-meteoroid-5fc.notion.site/Front-end-5fbf1d7444984086a54577e994ddbe14?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                → 세부 내용 ( Notion )
              </a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
