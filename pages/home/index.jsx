import React from "react";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrap}>
      <h2>프로젝트 활동</h2>
      <br />
      {/* 수업리뷰사이트 */}
      <div className={styles.container}>
        <h3>수업리뷰사이트</h3>
        <a href="https://github.com/UbSE-lab/class-review-site-server">
          github
        </a>
      </div>
      <br />

      {/* 카카오 관광데이터 활용 공모전 */}
      <div className={styles.container}>
        <h3>한국관광공사 x 카카오 2024 관광데이터 활용 공모전</h3>
        <a href="https://github.com/TabaraTeam/Tabara-Server">github</a>
      </div>
      <br />

      {/* 디지털 경진대회 */}

      <div className={styles.container}>
        <h3>
          [터틀런] 경계선 지능인들을 위한 GPT-4o 기반 평생학습 지원 앱 서비스
        </h3>
        <a href="https://github.com/ubsal-net/turtle-learn-server">
          api-server-github
        </a>
        /
        <a href="https://github.com/ubsal-net/turtle-learn-openai-server">
          openai-server-github
        </a>
      </div>
      <br />

      {/*  */}
      {/* 수업리뷰사이트 */}
      {/* 제11회 대한민국 SW 융합 해커톤 대회 */}

      {/* Edu */}
      <div className={styles.container}>
        <h2>Education</h2>
        <br />
        <p>* 동서대학교 소프트웨어학과 재학중(2019.03 ~ 2025.03)</p>
      </div>
    </div>
  );
}
