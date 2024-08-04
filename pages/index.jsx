import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasicLayout from "@/layouts/BasicLayout";
import ProjectPage from "./project1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BasicLayout>
      <div>
        <h2>프로젝트 활동</h2>
        {/* 디지털 경진대회 */}
        <div>
          <h3>
            [터틀런] 경계선 지능인들을 위한 GPT-4o 기반 평생학습 지원 앱 서비스
          </h3>
          <p>
            Spring AI Framework를 활용한 UserMessage, SystemMessage Template
            객체 작성 및 OpenAI ChatAPI를 ChatClient 객체를 활용하여 코드 작성
          </p>
          <p>이전 대화를 기억하고 기존 채팅 세션 유지 기능을 구현</p>
          <p>
            진로 탐색을 위한 채팅 기능을 구현하기 위해 사전 학습 SystemMessage
            프롬프트을 작성하고 uuid 고유 번호를 활용하여 대화 세션을
            유지하였습니다.
          </p>
          <p>데이터베이스 모델을 다른 백엔드 팀원과 함께 설계하였습니다.</p>
          <p>
            API 서버 코드 작성에 관한 다른 백엔드 팀원의 Pull Request Approve를
            진행하였고, 동료 검토 규칙을 지켜 코드 리뷰를 진행하였습니다.
          </p>
          <p>
            코드에 문제가 있을 시, 코드 수정을 요청하였고 후에 개선 되는 방향에
            대해서 협업을 진행하였습니다.
          </p>
          <p>
            DTO 구현체를 작성할때 record 타입을 화용하여 정적 팩토리 메서드
            패턴을 통해 구현하는 것에 대해서 알게되었고, of/from 메서드 컨벤션을
            지키며 필요한 데이터를 유연적으로 return 할 수 있었습니다.
          </p>
          <a href="https://github.com/ubsal-net/turtle-learn-server">
            api-server-github
          </a>
          <a href="https://github.com/ubsal-net/turtle-learn-openai-server">
            openai-server-github
          </a>
        </div>
        {/*  */}
        {/* 수업리뷰사이트 */}
        {/* 제11회 대한민국 SW 융합 해커톤 대회 */}
        <div>
          <h3>부산 공유대학 수업리뷰 사이트</h3>
          <a href="https://github.com/UbSE-lab/class-review-site-server">
            github
          </a>
        </div>
        <h2>Education</h2>
        <p>* 동서대학교 소프트웨어학과 재학중(2019.03 ~ 2025.03)</p>
      </div>
    </BasicLayout>
  );
}
