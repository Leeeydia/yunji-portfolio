import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Intro />} />
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
