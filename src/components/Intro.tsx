import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import characterImage from "../assets/character.png";

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 스크롤에 따른 변환 계산 - 완전히 화면 밖으로 나가도록
  const leeTransform = scrollY * 0.8; // LEE는 왼쪽으로 계속 이동
  const yunjiTransform = scrollY * 0.6; // YUNJI는 오른쪽으로 계속 이동

  return (
    <section className="h-screen bg-white relative flex items-center justify-center">
      {/* LEE 텍스트 - 왼쪽 상단, 스크롤 시 왼쪽으로 이동 */}
      <div
        className="absolute top-16 left-16 transition-transform duration-300"
        style={{
          transform: `translateX(-${leeTransform}px)`,
        }}
      >
        <h1 className="text-[230px] font-bold text-black pl-20 tracking-wider">
          LEE
        </h1>
      </div>

      {/* YUNJI 텍스트 - 오른쪽 하단, 스크롤 시 오른쪽으로 이동 */}
      <div
        className="absolute bottom-16 right-16 transition-transform duration-300 z-20"
        style={{
          transform: `translateX(${yunjiTransform}px)`,
        }}
      >
        <h1 className="text-[210px] font-bold text-black tracking-wider">
          YUNJI
        </h1>
      </div>

      {/* 캐릭터 이미지 - 중앙 */}
      <div className="z-0">
        <img
          src={characterImage}
          alt="Character"
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* 네비게이션 버튼들 - 하단 중앙 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          프로젝트 보러가기
        </Link>
        <a
          href="#about"
          onClick={handleAboutClick}
          className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition"
        >
          소개 보기
        </a>
      </div>
    </section>
  );
}
