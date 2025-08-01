# 🌟 이윤지 포트폴리오 웹사이트

React와 TypeScript를 활용한 반응형 개인 포트폴리오 웹사이트입니다.

## 📖 프로젝트 소개

프론트엔드 개발자 이윤지의 개인 포트폴리오를 소개하는 단일 페이지 애플리케이션입니다.
깔끔하고 모던한 디자인으로 개인 정보, 기술 스택, 프로젝트 경험을 효과적으로 전달합니다.

### 🎯 주요 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- **스크롤 애니메이션**: 부드러운 스크롤 효과와 인터랙티브한 텍스트 애니메이션
- **모던한 UI/UX**: Tailwind CSS를 활용한 깔끔하고 직관적인 인터페이스
- **빠른 로딩**: Vite 번들러를 통한 최적화된 빌드

## 🛠️ 기술 스택

### Frontend

- **React** ^19.1.0 - 사용자 인터페이스 구축
- **TypeScript** ~5.8.3 - 타입 안정성 및 개발 생산성 향상
- **Tailwind CSS** ^4.1.11 - 유틸리티 퍼스트 CSS 프레임워크

### Development Tools

- **Vite** ^7.0.4 - 빠른 개발 서버 및 빌드 도구
- **ESLint** ^9.30.1 - 코드 품질 관리
- **PostCSS** ^8.5.6 - CSS 후처리
- **Autoprefixer** ^10.4.21 - 브라우저 호환성

## 🚀 설치 및 실행

### 사전 요구사항

- Node.js 18.0.0 이상
- yarn

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/Leeeydia/yunji-portfolio.git

# 프로젝트 디렉토리로 이동
cd yunji-portfolio

# 의존성 설치
yarn install
```

### 실행 방법

```bash
# 개발 서버 실행
yarn dev

# 빌드
yarn build

# 프로덕션 미리보기
yarn preview

# 린팅
yarn lint
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Intro.tsx       # 메인 인트로 섹션
│   ├── SectionAbout.tsx # 소개 섹션
│   ├── SectionProjects.tsx # 프로젝트 섹션
│   └── Footer.tsx      # 연락처 및 푸터
├── assets/             # 이미지 및 정적 파일
│   ├── character.png   # 캐릭터 이미지
│   ├── profile.jpg     # 프로필 사진
│   └── images/         # 기타 이미지
├── App.tsx             # 메인 App 컴포넌트
├── main.tsx            # 애플리케이션 진입점
└── index.css           # 글로벌 스타일
```

## 🎨 주요 섹션

### 1. Intro (인트로)

- 동적 텍스트 애니메이션
- 스크롤 기반 패럴랙스 효과
- 캐릭터 이미지를 중심으로 한 레이아웃

### 2. About (소개)

- 개인 정보 및 연락처
- 기술 스택 시각화
- 반응형 프로필 이미지

### 3. Projects (프로젝트)

- 프로젝트 카드 형태의 갤러리
- Live Demo 및 GitHub 링크 연동
- 기술 스택 태그

#### 포함된 프로젝트들:

**포트폴리오 웹사이트**

- React, TypeScript, Tailwind CSS로 제작한 개인 포트폴리오
- Live Demo: [yunji-portfolio.vercel.app](https://yunji-portfolio.vercel.app)
- GitHub: [yunji-portfolio](https://github.com/Leeeydia/yunji-portfolio)

**불멍스팟**

- 캠핑API를 활용한 캠핑장 예약 웹사이트
- Live Demo: [fire-spot.vercel.app](https://fire-spot.vercel.app/)
- GitHub: [fire-spot](https://github.com/Leeeydia/fire-spot)

**MBTI 성격 유형 테스트**

- React 기반의 MBTI 성격 유형 테스트 웹 애플리케이션
- 회원가입/로그인, 20개 질문을 통한 성격 진단, 결과 관리 기능 제공
- GitHub: [my-mbti](https://github.com/Leeeydia/my-mbti)

**B-Movie-Log**

- TMDB API를 활용한 영화 정보 웹사이트 (팀 프로젝트)
- Live Demo: [movie-team-project.vercel.app](https://movie-team-project.vercel.app/)
- GitHub: [movie-team-project](https://github.com/Leeeydia/movie-team-project)

**My Pokédex**

- PokeAPI를 활용한 1세대 포켓몬 도감 애플리케이션
- GitHub: [my-pokedex](https://github.com/Leeeydia/my-pokedex)

### 4. Contact (연락처)

- 이메일 및 GitHub 링크
- CTA 버튼 디자인

## 🔧 개발 과정에서 해결한 주요 문제들

### 1. 반응형 디자인 문제 해결

**문제**: 프로젝트 섹션이 작은 화면에서 레이아웃이 깨지는 현상
**해결**:

- 고정 높이(`h-screen`) → 최소 높이(`min-h-screen`)로 변경
- 그리드 레이아웃을 브레이크포인트별로 최적화 (`grid-cols-1 md:grid-cols-2 xl:grid-cols-3`)
- 텍스트 크기를 반응형으로 조정 (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`)

### 2. 모바일 호환성 개선

**문제**: 큰 텍스트와 절대 위치 요소들이 모바일에서 화면을 벗어나거나 겹치는 현상
**해결**:

- 인트로 섹션의 대형 텍스트 크기를 화면별로 조정
- 절대 위치 값들을 반응형으로 설정 (`top-8 sm:top-12 lg:top-16`)
- 패딩과 여백을 디바이스별로 최적화

### 3. 사용성 개선

**문제**: 터치 디바이스에서 버튼 크기가 작아 클릭하기 어려운 문제
**해결**:

- 버튼 크기를 터치 친화적으로 조정
- 모바일에서는 버튼을 세로 배치로 변경
- 충분한 터치 영역 확보

### 4. 콘텐츠 오버플로우 방지

**문제**: 고정 높이로 인해 작은 화면에서 콘텐츠가 잘리는 현상
**해결**:

- 모든 섹션을 `min-h-screen`으로 변경하여 콘텐츠에 따라 높이 조절
- 적절한 패딩과 여백 추가

### 5. 성능 최적화

**문제**: 이미지 로딩과 애니메이션 성능
**해결**:

- 이미지 최적화 및 적절한 크기 설정
- CSS 트랜지션을 활용한 부드러운 애니메이션
- 불필요한 리렌더링 방지

## 🌐 배포

- **플랫폼**: Vercel
- **배포 URL**: [https://yunji-portfolio.vercel.app](https://yunji-portfolio.vercel.app)

## 📱 반응형 브레이크포인트

- **sm**: 640px 이상 (모바일 가로)
- **md**: 768px 이상 (태블릿)
- **lg**: 1024px 이상 (작은 데스크톱)
- **xl**: 1280px 이상 (큰 데스크톱)

## 📞 연락처

- **이메일**: leeeydia@gmail.com
- **GitHub**: [github.com/Leeeydia](https://github.com/Leeeydia)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

© 2024 이윤지. All rights reserved.
