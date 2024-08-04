import BasicLayout from "@/layouts/BasicLayout";
import React from "react";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <BasicLayout>
      <div>
        <p>
          부산 범내골에 있는 부산상공회의소에서 ICT 공동해커톤이라는 대회에
          참가하게 되었다.
        </p>
        <p>
          팀원은 연구실에 같이 활동하고있는 친구들 규환, 진우, 우영이와 참가하게
          되었다.
        </p>
        <p>
          나는 백엔드 규환이는 프론트엔드, 진우는 UI 디자인 퍼블리싱, 우영이는
          기획을 담당하고 하였다.
        </p>
        <p>
          각자 잘하는 포지션으로 참가하기도 하였고, 각 포지션별로 솔로
          진행이다보니 문제가 발생했을때 어떻게 해결해 나갈지 미리 얘기해둔바는
          없었다.
        </p>
        <p>
          자신있다고 생각하는 포지션으로 계속 각자 공부를 해오던 차였고, 이번에
          제대로 보여줄 수 있겠구나라는 생각을 하였다.
        </p>
        <Image src="/images/ict-1.png" width={300} height={300} alt="name" />
      </div>
    </BasicLayout>
  );
}
