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
    // URL fragment에 따라 해당 섹션으로 스크롤
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash.slice(1)); // # 제거
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 컴포넌트 렌더링 후 실행
    }
  }, []);

  return (
    <div>
      <Intro />
      <SectionAbout />
      <SectionProjects />
      <Footer />
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
