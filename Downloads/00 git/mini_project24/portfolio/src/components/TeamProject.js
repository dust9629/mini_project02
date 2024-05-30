import React from "react";
import "./Modal.css";
import ProjectB from "../assets/images/project_Breadit.png";
import Stack01 from "../assets/images/icon_stack01.png";
import Stack02 from "../assets/images/icon_stack02.png";
import Stack03 from "../assets/images/icon_stack03.png";
import Stack04 from "../assets/images/icon_stack04.png";
import Stack05 from "../assets/images/icon_stack05.png";
import Stack06 from "../assets/images/icon_stack06.png";
import Stack07 from "../assets/images/icon_stack07.png";
import Stack08 from "../assets/images/icon_stack08.png";

import Stack09 from "../assets/images/icon_stack09.png";
import Stack10 from "../assets/images/icon_stack10.png";
import Stack11 from "../assets/images/icon_stack11.png";
import Stack12 from "../assets/images/icon_stack12.png";
import Stack13 from "../assets/images/icon_stack13.png";
import Stack14 from "../assets/images/icon_stack14.png";
import Stack15 from "../assets/images/icon_stack15.png";
import Stack16 from "../assets/images/icon_stack16.png";

function TeamProject() {
  return (
    <div className="modal_wrap">
      <h3>Project Description</h3>
      <div className="modal_desc">
        <p>
          2024.04.01 ~ 2024.04.19
          <br />
          Only PC ( Moblie X )
        </p>
      </div>
      <ul>
        <li className="modal_main">
          <a
            href="https://frontend-nine-tau-41.vercel.app/"
            target="_blank"
            className="left"
            rel="noopener noreferrer"
          >
            <img src={ProjectB} alt="project image" />
          </a>
          <div className="right">
            <p>KDT - Elice SW Track 8</p>
            <h6>2차 프로젝트 "우수상" 수상작</h6>
            <h5>
              <strong>Breadit</strong> - 빵, 디저트 맛집 탐방 커뮤니티
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
            <dt>Tech Stack</dt>
            <dd>
              <img src={Stack01} alt="CSS" />
              <img src={Stack02} alt="amazon S3" />
              <img src={Stack03} alt="React" />
              <img src={Stack04} alt="vite" />
              <img src={Stack05} alt="TypeScript" />
              <img src={Stack06} alt="QuillJS" />
              <img src={Stack07} alt="Oauth" />
              <img src={Stack08} alt="JWT" />
              <img src={Stack09} alt="JavaScript" />
              <img src={Stack10} alt="Node.js" />
              <img src={Stack11} alt="Styled-components" />
              <img src={Stack12} alt="Mongo DB" />
              <img src={Stack13} alt="JOI" />
              <img src={Stack14} alt="Vercel" />
              <img src={Stack15} alt="Nodemailer" />
              <img src={Stack16} alt="AXIOS" />
            </dd>
          </dl>
        </li>
        <li className="modal_box n3">
          <dl>
            <dt>Function</dt>

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
            <dt>Details</dt>
            <dd>
              <a
                href="https://frontend-nine-tau-41.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                → 브레딧 페이지로 이동
              </a>
            </dd>
            <dd>
              <a
                href="https://frontend-nine-tau-41.vercel.app/"
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

export default TeamProject;
