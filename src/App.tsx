import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import Footer from "./components/Footer";

// 홈 페이지 컴포넌트 (스크롤로 연결된 섹션들)
function HomePage() {
  useEffect(() => {
    // URL에 #about가 있으면 about 섹션으로 스크롤
    if (window.location.hash === "#about") {
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 컴포넌트 렌더링 후 실행
    }
  }, []);

  return (
    <div>
      <Intro />
      <SectionAbout />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<SectionAbout />} />
            <Route path="/projects" element={<SectionProjects />} />
            <Route path="/contact" element={<Footer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
