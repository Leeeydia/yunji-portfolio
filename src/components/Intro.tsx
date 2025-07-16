import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section>
      <h1>안녕하세요! 👋</h1>
      <p>프론트엔드 개발자 이윤지입니다.</p>
      <Link to="/projects">프로젝트 보러가기</Link>
      <Link to="/about">소개 보기</Link>
    </section>
  );
}
