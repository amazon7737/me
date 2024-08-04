import React from "react";
import Link from "next/link";
import styles from "./BasicLayout.module.css";

export default function BasicLayout({ children }) {
  return (
    <main className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2 className={styles.title}>
            안녕하세요 서버개발을 좋아하는 사람입니다.
          </h2>
          <div>
            <p>웹 애플리케이션 서비스를 만드는 것이 재미있습니다.</p>
            <p>
              사람들이 편하게 사용하는 서비스를 만들고 싶습니다. 편리한 기능을
              보며 많은 영감을 얻습니다.
            </p>

            <p>
              서버 개발자는 개발자를 위한 개발을 한다고 생각합니다. 도움이 되는
              개발을 하였을때 뿌듯함을 느낍니다.
            </p>
            <p>
              저의 좌뇌는 Vim Editor, 우뇌는 터미널, 신체는 맥북으로 이루어져
              있습니다.
            </p>
          </div>
        </div>
        <nav className={styles.tabs}>
          <Link href="/" className={styles.link}>
            home
          </Link>{" "}
          <Link href="/1" className={styles.link}>
            project1
          </Link>{" "}
          <Link href="/2" className={styles.link}>
            project2
          </Link>
          <Link href="/3" className={styles.link}>
            2024 디지털 경진대회
          </Link>
          <Link href="/ICT-HACKATHON" className={styles.link}>
            2024 부산 ICT-해커톤
          </Link>{" "}
        </nav>
        <div className={styles.content}>{children}</div>
      </div>
    </main>
  );
}
