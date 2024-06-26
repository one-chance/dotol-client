# 도톨 v2

## About the Project

https://dotols.com<br/>
2021년부터 운영 중인 바람의나라 게임 커뮤니티입니다. 게임에서 제공하지 않지만, 유저에겐 필요한 데이터와 기능을 제공합니다. 넥슨과 협업하여 비공개 API를 제공받는 [공식 팬사이트](https://baram.nexon.com/FanSite/List)입니다. 개인 프로젝트로 혼자서 개발, 배포, 운영을 담당합니다.

<img src="https://asset.dotols.com/image/termsofservice.png" style="max-width:600px" />

## Stack Share

베이스: React, TypeScirpt

번들러: Vite

컨벤션: ESLint, Prettier

상태관리: Recoil, React-Query

스타일링: Emotion

## Folder Structure

apis: api 호출 및 처리가 정의된 폴더입니다.

assets: 폰트나 아이콘 같은 애셋 파일이 있는 폴더입니다.

components: 재사용 가능한 컴포넌트 파일이 있는 폴더입니다.<br/>
\- common: 여러 페이지에서 공통적으로 사용되는 컴포넌트<br/>
\- {feature}-page: 컴포넌트의 추상화 단계에 따라 폴더를 구분하지 않고, Feature 별로 구분하는 방식을 사용합니다.<br/>
\- modal: Portal로 현재 컴포넌트의 DOM 트리 외부에 렌더링하여 기존 컴포넌트의 레이아웃에 영향을 주지 않습니다.<br/>

constants: 재사용 가능한 상수가 정의된 폴더입니다.

hooks: 커스텀 훅이 정의된 폴더입니다.

interfaces: type이나 interface가 정의된 폴더입니다.

pages: 각 페이지별 컴포넌트가 있는 폴더입니다.

routes: 라우팅 설정 파일이 있는 폴더입니다.

sytles: 스타일링과 관련된 파일이 있는 폴더입니다.

utils: 공통 유틸함수가 정의된 폴더입니다.

## Timeline

20.12 개발 시작<br />
21.04 배포 및 운영<br />
22.01 업데이트 중단<br />
23.04 v2 구상<br />
23.05 v2 개발 시작<br />
23.08 v2 배포 및 운영

## Background

### 운영중인 사이트를 다시 만든 이유

도톨은 매주 개발자 노트를 통해 사용자와 소통하고 필요한 기능을 개발하면서 안정적으로 운영되고 있었는데, 시간이 부족해져서 업데이트를 중단하게 되었습니다. 그 후에도 여전히 많은 사용자가 이용하는 것을 보면서 더 좋은 사이트를 만들고자 오랜만에 코드를 보았는데, 개발 실력이 향상됨에 따라 새로 발견한 문제가 많았습니다.

개발 당시에는 어떻게든 동작하게 만들어서 겉은 멀쩡해 보였지만, 속이 이상했습니다. React의 특성을 살리지 못해 재사용성이 낮고 구조화되지 않은 컴포넌트가 가득했고, 서버 구조는 확장성이 없고 DB 스키마는 비효율적이며 배포 환경은 불안정했습니다. 모든 문제를 해결하려면 전부 다시 개발하는 방법밖에 없었기에 계속 주저했지만, 꾸준히 이용 중인 사용자에게 부끄럽지 않은 사이트를 제공하고자 다시 만들기로 결정했습니다.

## Improvement

### 프론트엔드

v1 : React(v17), TypeScript(v4), Recoil, Mui(v4), React-Quill, CRA <br/>
v2 : React(v18), TypeScript(v5), Recoil, React-Query, Emotion, Toast Editor, Vite

- v1에서는 Mui의 컴포넌트를 활용했지만, v2에서는 Emotion을 통해 직접 구현합니다.
- 재사용성이 높은 공통 컴포넌트를 만들고, 그것을 기반으로 다른 컴포넌트를 개발했습니다.
- 상태 관리는 React-Query를 추가하여 서버 관련 State를 분리하여 처리했습니다.
- 게시물 에디터를 Toast Editor로 바꿔, 이미지 업로드는 presigned URL을 적용했습니다.
- 빌드 툴은 Vite로 변경하여 속도를 높이고 경량화했습니다.
- 정적 이미지와 데이터는 CDN으로 제공하여 성능을 최적화했습니다.
- 과도한 라이브러리 사용을 자제하고 기능을 직접 구현하여 의존성을 최소화하였습니다.

### 백엔드 & 배포

v1 : JavaScript, Node, Express, MongoDB, AWS(EC2)<br/>
v2 : TypeScript, Node, Nest, MongoDB, AWS(EC2)

- Nest 프레임워크를 사용하면서 의존성 주입과 미들웨어 관리를 쉽게 하였습니다.
- 덕분에 기존보다 유연하고 확장성이 높은 구조로 서버를 구축할 수 있었습니다.
- TypeScript를 도입하여 코드의 안정성을 높이고 에러를 최소화 하였습니다.
- DB는 효율적인 스키마를 새로 설계하고 마이그레이션하여 성능을 개선했습니다.

## System Architecture

<img src="https://asset.dotols.com/image/architecture.png" />

## Conclusion

v2로 리뉴얼한 결과, 모든 면에서 개선되었으며 스스로도 만족하는 사이트를 구축하였습니다. 이번 리뉴얼 작업에는 2달이 걸렸지만, v1 개발 시간보다는 매우 단축되어 만족스러웠습니다. 앞으로도 계속해서 UX/UI 디자인 개선과 신규 기능 업데이트를 진행하며 사이트를 운영할 예정입니다. 좋았던 점은, 과거에 인지하지 못한 문제들을 해결하거나 더 효율적인 코드로 대체하며 스스로의 성장을 느낄 수 있었습니다. 오랜만에 풀스택 개발을 하면서 다양한 API와 DB 스키마 설계를 위한 고민을 통해 많은 것을 배울 수 있었습니다. 이런 경험은 나중에 백엔드 개발자와 협력할 때 많은 도움이 될 것으로 기대합니다. 아쉬운 점은 1인 개발이었기 때문에 코드 리뷰가 없어서 더 나은 구조와 코드를 작성하기 위해 충분히 고민하지 못했다는 의문이 들었습니다. 따라서 다른 개발자에게 리뷰를 부탁하고, 필요한 경우 리팩토링을 진행하여 전체적인 코드의 완성도를 높이려고 합니다.

## Author

Github: [one-chance](https://github.com/one-chance)<br/>
Email: woody.front@gmail.com
