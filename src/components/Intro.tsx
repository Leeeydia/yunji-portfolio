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

  // 스크롤에 따른 변환 계산 - 완전히 화면 밖으로 나가도록
  const leeTransform = scrollY * 0.8; // LEE는 왼쪽으로 계속 이동
  const yunjiTransform = scrollY * 0.6; // YUNJI는 오른쪽으로 계속 이동

  return (
    <section
      id="intro"
      className="h-screen bg-white relative flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* LEE 텍스트 - 왼쪽 상단, 스크롤 시 왼쪽으로 이동 */}
      <div
        className="absolute top-8 sm:top-12 lg:top-16 left-14 sm:left-20 lg:left-32 transition-transform duration-300"
        style={{
          transform: `translateX(-${leeTransform}px)`,
        }}
      >
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[230px] font-black text-black tracking-wider font-montserrat">
          LEE
        </h1>
      </div>

      {/* YUNJI 텍스트 - 오른쪽 하단, 스크롤 시 오른쪽으로 이동 */}
      <div
        className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-4 sm:right-8 lg:right-16 transition-transform duration-300 z-20"
        style={{
          transform: `translateX(${yunjiTransform}px)`,
        }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[160px] xl:text-[200px] font-black text-black tracking-wider font-montserrat">
          YUNJI
        </h1>
      </div>

      {/* Front-End Developer 텍스트 - 오른쪽 상단 (헤더 아래) */}
      <div
        className="absolute top-16 sm:top-20 lg:top-24 right-4 sm:right-6 lg:right-8 transition-transform duration-300 z-20"
        style={{}}
      >
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[60px] font-semibold text-gray-400 tracking-wider text-right font-poppins leading-tight">
          <span className="block">FrontEnd</span>
          <span className="block">Developer</span>
        </h1>
      </div>

      {/* 캐릭터 이미지 - 중앙 */}
      <div className="z-10 flex items-center justify-center">
        <img
          src={characterImage}
          alt="Character"
          className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] object-contain"
        />
      </div>
    </section>
  );
}
