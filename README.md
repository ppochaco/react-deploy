# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## Week 6. 1단계 API 명세 협의 & 반영

### 🚀 요구 사항

- 작성한 API 문서를 기반으로 팀 내에서 지금까지 만든 API를 검토하고 통일하여 변경 사항을 반영한다.
- 팀 내에서 일관된 기준을 정하여 API 명세를 결정한다.
- 팀 내에 배포 될 API가 여러개 일 경우 상단 네비게이션 바에서 선택 가능하게 한다.
  - 프론트엔드의 경우 배포와 사용자가 팀 내 여러 서버 중 하나를 선택하여 서비스를 이용한다.
  - 팀내 백엔드 엔지니어의 이름을 넣고, 이름을 선택하면 해당 엔지니어의 API로 API통신을 하게 한다.
  - 기본 선택은 제일 첫번째 이름으로 한다.

### 📜 API 명세서

![경북대 3조 api 명세서](https://github.com/user-attachments/assets/e1c9db8c-9a60-4372-8546-4c2a68ee5887)

### 💻 구현한 기능 목록

- 기존 API와 페이지 UI 수정
- 카카오 로그인 기능 추가
- 백엔드 API 4개 연결

## Week 6. 2단계 배포하기

### 🚀 요구 사항

- 세가지 방법 중 본인이 원하는 방식으로 배포한다.

  - (단, 가능하면 최대한 방법 1, 3번으로 진행하고 CI/CD를 구축하는 것을 권장해요)

- 방법1.

  - github action을 사용하여 ci/cd를 구성한다.
  - cloudflare의 pages에 배포한다.

- 방법2.

  - vercel을 사용하여 배포한다.

- 방법3.
  - github pages를 사용하여 배포한다.
  - 서버 API가 의도대로 잘 동작하는지 확인하고, 문제가 있다면 해결한다.

### 배포하기

Vercel을 통해 배포를 진행했지만, 백엔드 서버가 모두 HTTP 프로토콜을 사용하여 CORS 오류가 발생했습니다. 이를 해결하기 위해 프록시 서버를 구축하려 했으나, 백엔드 API 4개를 동적으로 관리하는 데 어려움을 겪었습니다. 결국, 프론트엔드 서버를 HTTP로 배포하고자 요구 사항에 없는 AWS S3를 이용하기로 결정했습니다🥹

### 프론트 배포 서버

http://katecam-ppochaco.s3-website.ap-northeast-2.amazonaws.com/

## Week6. 3단계 포인트

### 🚀 요구 사항

- 상품 구매에 사용할 수 있는 포인트 기능을 구현한다.
- 포인트는 사용자별로 보유한다.
- 포인트 차감 방법 등 나머지 기능에 대해서는 팀과 논의하여 정책을 결정하고 구현한다.
- API 명세는 팀과 협의하여 결정하고 구현한다.

### 포인트 기능

- 관리자가 특정 사용자의 포인트를 추가할 수 있다.
- 사용자는 주문 시 보유한 포인트를 사용할 수 있다.
- 관리자 기능은 `이메일: admin@test.com, 비밀번호: 1234` 로그인 후 관리자 페이지에서 동작 가능합니다.

### 구현 할 기능 목록

#### 주문하기 페이지

- [x] 주문하기 form 수정하기(포인트 추가)
- 주문 시 현재 보유한 포인트를 알려주기
  - [x] UI 만들기
  - [x] API 연결하기

#### 주문 목록 페이지

- [x] 마이페이지에 주문 목록 페이지 링크 버튼 추가하기

- 주문 목록 보여주기
  - [x] UI 만들기
  - [x] API 연결하기

#### 관리자 페이지

- API

  - [x] 모든 사용자 정보 불러오기
  - [x] 특정 사용자의 포인트 추가하기

- UI
  - [x] 사용자 table
  - [x] 포인트 추가 dialog
    - button: 기본 포인트, 클릭 시 해당 포인트만큼 증가
    - input

#### 사용자 권한 추가

- [x] 로그인 후 제공되는 role auth info에 저장하기
- [x] 관리자 페이지 접근 시 권한 확인하기

#### 페이징 처리하기

- [x] 주문 목록
- [x] 위시 상품

## Week 6. 4단계 질문의 답

### 질문 1. SPA 페이지를 정적 배포를 하려고 할 때 Vercel을 사용하지 않고 한다면 어떻게 할 수 있을까요?

정적 배포는 웹 호스팅 서비스에 정적 파일(HTML, CSS, JavaScript)을 업로드하여 배포하는 방식입니다. 예를 들어, AWS S3 서비스를 이용한다면, SPA(Single Page Application) 페이지를 빌드한 파일을 업로드하고, 정적 웹 호스팅 옵션을 활성화하면 제공된 도메인 또는 사용자 정의 도메인으로 웹사이트에 접근할 수 있게 됩니다. 이 외에도 Netlify, Firebase Hosting, GitHub Pages와 같은 다양한 웹 호스팅 서비스를 통해 정적 배포할 수 있으며, 위의 서비스는 CI/CD 기능을 기본적으로 제공합니다.

### 질문 2. CSRF나 XSS 공격을 막는 방법은 무엇일까요?

CSRF는 Cross-Site Request Forgery로, 사용자가 인증된 상태에서 의도하지 않은 요청을 다른 웹사이트로 전송하게 만드는 공격입니다. 이는 같은 도메인에서 요청이 들어오지 않는다면 차단하도록 하는 Referrer 헤더 검증을 추가하거나, CSRF Token을 사용해 서버에서 사용자의 모든 요청에 대해 검증을 진행하는 방법을 통해 공격을 막을 수 있습니다.

XSS는 Cross-Site Scripting으로, 사용자가 악의적으로 웹사이트에 악성 스크립트를 삽입해 다른 사용자의 브라우저에서 실행되도록 하는 공격입니다. 이는 사용자의 입력을 검증하고 인코딩하여 스크립트가 실행되지 않도록 대비하고, 쿠키에 HTTPOnly 플래그를 설정해 JavaScript로 쿠키에 직접 접근할 수 없도록 설정함으로써 공격을 대비할 수 있습니다. 또한, Content Security Policy(CSP)를 설정하여 신뢰할 수 있는 출처의 스크립트만 실행되도록 제한하여 공격을 막을 수 있습니다.

### 질문 3. 브라우저 렌더링 원리에대해 설명해주세요.

사용자의 요청으로 브라우저는 서버로부터 HTML, CSS, JavaScript, 이미지 등 리소스를 응답 받습니다. 이후, HTML과 CSS 파일을 브라우저의 렌더링 엔진으로 파싱하여 DOM과 CSSOM 트리를 생성하고, 이는 Render Tree로 결합됩니다. 생성된 Render Tree를 기반으로 각 요소의 위치와 크기를 계산한 후 화면에 렌더링하게 됩니다.

브라우저는 DOM 생성 중에 스타일 태그를 만나면 CSSOM을 업데이트하고 Render Tree를 재계산할 수 있습니다. 스크립트 태그를 만나면 자바스크립트 엔진을 이용해 자바스크립트를 실행하며, 이 과정에서 DOM이 변경될 수 있습니다. DOM이 변경되면 레이아웃과 페인팅이 다시 필요할 수 있습니다.

비동기 스크립트(async, defer)를 사용하면 스크립트 로딩과 실행이 비동기적으로 처리되어 DOM 생성 과정이 중단되지 않으며, 페이지 로딩 속도를 향상시킬 수 있습니다. 따라서, CSS나 JavaScript 파싱으로 DOM 생성이 중단되는 문제를 방지하는 것이 중요합니다.
