import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // 메뉴 닫기

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

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // 홈 페이지에 있으면 intro 섹션으로 스크롤
    if (location.pathname === "/") {
      const introSection = document.getElementById("intro");
      if (introSection) {
        introSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 다른 페이지에서는 홈으로 이동
      window.location.href = "/";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <div className="text-xl font-bold text-black">
            <a
              href="#intro"
              onClick={handleHomeClick}
              className="cursor-pointer"
            >
              YUNJI
            </a>
          </div>

          {/* 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center space-y-1"
          >
            <div
              className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* 햄버거 메뉴 */}
        <div
          className={`transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4 border-t border-gray-200 mt-4">
            <a
              href="#intro"
              onClick={handleHomeClick}
              className="text-black hover:text-gray-600 transition text-lg py-2"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={handleScrollClick("about")}
              className="text-black hover:text-gray-600 transition text-lg py-2"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={handleScrollClick("projects")}
              className="text-black hover:text-gray-600 transition text-lg py-2"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              onClick={handleScrollClick("contact")}
              className="text-black hover:text-gray-600 transition text-lg py-2"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
