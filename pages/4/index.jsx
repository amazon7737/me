import React from "react";
import Image from "next/image";
import BasicLayout from "@/layouts/BasicLayout";

export default function ErrorPage() {
  return (
    <BasicLayout>
      <div>
        <p>연구실 소개 사이트를 개발하는 도중 발생한 에러다.</p>
        <p>
          vite react로 front 페이지를 github pages로 배포한 상황이었고, spring
          boot로 API서버를 작성하여 EC2에 배포한 상황이었다.
        </p>
        <p>해당 API를 요청할때, 해당 에러가 발생하였다.</p>
        <br />
        <Image
          src="/images/mixed-content.jpg"
          width={1000}
          height={500}
          alt="name"
        />

        <a href="https://web.dev/articles/what-is-mixed-content?hl=ko">
          web.dev
        </a>
        <p>
          에 찾아보니 한 페이지에 HTTP와 HTTPS 콘텐츠가 혼합된 것을 나타낸다고
          한다.
        </p>
        <br />
        <p>
          현재 배포 상황은 github pages 에서는 https로 배포가 되어있고,
          EC2에서는 http로 배포가 되어있다.
        </p>
        <br />
        <p>
          따라서, 해당 에러는 API가 배포된 EC2 서버를 https로 배포를 진행하면
          해결 될 수 있다!
        </p>
        <br />
        <p>나는 https로 배포하기 위해서 2가지 방법을 찾았다. </p>
        <br />
        <p>
          첫번째는 NginX 웹서버의 Reverse Proxy 기능을 사용하여 SSL 인증서를
          발급받아, NginX로 https 요청이 들어오면 http로 리다이렉트하여
          API서버로 전달하는 것이고,
        </p>
        <br />
        <p>
          두번째는 Caddy라는 웹서버로 Reverse Proxy 기능을 똑같이 사용하고 자동
          SSL 인증서 발급을 진행하는 것이다.
        </p>
        <br />
        <p>
          두 방법 모두 무료 도메인인 sslip.io , nip.io 등을 사용할 예정이었다.
        </p>
        <br />
        <p>
          나는 SSL 인증서를 발급하던 도중에, 기간마다 갱신을 해야한다는 것을
          알게되었고 자동으로 갱신을 진행해주는 Caddy 웹서버를 사용하기로
          결정하였다.
        </p>
        <br />
        <p>
          다른 분들은 EC2에 스케줄링을 걸어서 인증서를 갱신하도록 하거나 인증서
          기간을 무한정늘려 사용하는 경우도 있었다.
        </p>
        <br />
        <p>
          또한 로드밸런서를 생성하여 SSL인증서를 등록하는 방법도 있었으나, 나는
          EC2 서버를 무료로 사용중이기도 하고 개수도 늘리기에는 금전적으로
          부담이 되는 상황이기에 Caddy를 사용하였다.
        </p>
        <br />
        <p>해당 방법으로 해결은 하였지만, 현업에서는 어떤 방식으로 해결할까?</p>
        {/* <p>
          한편, 리액트에서는 기존 라우팅 방식이 github pages에 올바르게 적용되지
          않아 문제를 찾아보았는데 정적인 페이지로써의 변환 과정에서 오류가 많이
          발생하는 것을 발견했다.
        </p>
        <br />
        <p>
          axios 함수의 옵션을 찾아보던중 baseURL이 있었고 해당 URL에 API 주소를
          올바르게 입력하니 해결 되었다.
        </p> */}
      </div>
    </BasicLayout>
  );
}
