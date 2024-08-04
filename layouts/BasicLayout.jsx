import React from "react";
import Link from "next/link";
import styles from "./BasicLayout.module.css";

export default function BasicLayout({ children }) {
  return (
    <main className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>안녕하세요 서버개발을 좋아하는 사람입니다.</h2>
        </div>
        <nav className={styles.tabs}>
          <Link href="/">home</Link> | <Link href="/project1">project1</Link> |{" "}
          <Link href="/project2">project2</Link>
        </nav>
        <div className={styles.content}>{children}</div>
      </div>
    </main>
  );
}
