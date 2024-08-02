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

### 구현 할 기능 목록

#### 주문하기 페이지

- [x] 주문하기 form 수정하기(포인트 추가)
- 주문 시 현재 보유한 포인트를 알려주기
  - [x] UI 만들기
  - [x] API 연결하기

#### 마이 페이지

- 주문 목록 보여주기
  - [ ] UI 만들기
  - [ ] API 연결하기

#### 관리자 페이지

- API

  - [x] 모든 사용자 정보 불러오기
  - [ ] 특정 사용자의 포인트 추가하기

- UI
  - [x] 사용자 table
  - [x] 포인트 추가 dialog
    - button: 기본 포인트, 클릭 시 해당 포인트만큼 증가
    - input
