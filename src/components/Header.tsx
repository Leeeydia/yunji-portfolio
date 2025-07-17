import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const handleScrollClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    // 홈 페이지에 있으면 스크롤, 다른 페이지에 있으면 홈으로 이동 후 스크롤
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 다른 페이지에서는 홈으로 이동
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header>
      <nav>
        <Link to="/">홈</Link>
        <a href="#about" onClick={handleScrollClick("about")}>
          소개
        </a>
        <a href="#projects" onClick={handleScrollClick("projects")}>
          프로젝트
        </a>
        <a href="#contact" onClick={handleScrollClick("contact")}>
          연락처
        </a>
      </nav>
    </header>
  );
}
