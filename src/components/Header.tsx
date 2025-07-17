import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // 홈 페이지에 있으면 스크롤, 다른 페이지에 있으면 홈으로 이동 후 스크롤
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 다른 페이지에서는 홈으로 이동
      window.location.href = "/#about";
    }
  };

  return (
    <header>
      <nav>
        <Link to="/">홈</Link>
        <a href="#about" onClick={handleAboutClick}>
          소개
        </a>
        <Link to="/projects">프로젝트</Link>
        <Link to="/contact">연락처</Link>
      </nav>
    </header>
  );
}
