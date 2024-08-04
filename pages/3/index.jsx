import BasicLayout from "@/layouts/BasicLayout";
import React from "react";

export default function ProjectPage() {
  return (
    <BasicLayout>
      <div>
        <h3>2024 디지털 경진대회에 출품한 작품</h3>
        <br />
        <p>경계선 지능인들을 위한 GPT-4o 기반 평생학습 지원 앱 서비스</p>
        <br />
        <p>
          Spring AI Framework를 활용한 UserMessage, SystemMessage Template 객체
          작성 및 OpenAI ChatAPI를 ChatClient 객체를 활용하여 코드를 작성하였다.
        </p>
        <br />
        <p>이전 대화를 기억하고 기존 채팅 세션 유지 기능을 구현하였다.</p>
        <br />

        <p>
          진로탐색을 위한 채팅 기능을 구현하기 위해 사전 학습 SystemMessage
          프롬프트을 작성하고 uuid 고유 번호를 활용하여 대화 세션을 유지하였다.
        </p>
        <p></p>
        <br />
        <p>데이터베이스 모델을 다른 백엔드 팀원과 함께 설계하였다.</p>
        <p>
          API 서버 코드 작성에 관한 다른 백엔드 팀원의 Pull Request Approve를
          진행하였고, 동료 검토 규칙을 지켜 코드 리뷰를 진행하였다.
        </p>
        <br />
        <p>
          코드에 문제가 있을 시, 코드 수정을 요청하였고 후에 개선 되는 방향에
          대해서 협업을 진행하였다.
        </p>
        <br />

        <p>
          DTO 구현체를 작성할때 record 타입을 화용하여 정적 팩토리 메서드 패턴을
          통해 구현하는 것에 대해서 알게되었고, of / from 메서드 컨벤션을 지키며
          필요한 데이터를 유연적으로 return 할 수 있었다.
        </p>
      </div>
    </BasicLayout>
  );
}
