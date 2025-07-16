import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
