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
      className="h-screen bg-white relative flex items-center justify-center pt-16"
    >
      {/* LEE 텍스트 - 왼쪽 상단, 스크롤 시 왼쪽으로 이동 */}
      <div
        className="absolute top-16 left-16 transition-transform duration-300"
        style={{
          transform: `translateX(-${leeTransform}px)`,
        }}
      >
        <h1 className="text-[230px] font-black text-black pl-20 tracking-wider font-montserrat">
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
        <h1 className="text-[210px] font-black text-black tracking-wider font-montserrat">
          YUNJI
        </h1>
      </div>

      {/* Front-End Developer 텍스트 - 오른쪽 상단 (헤더 아래) */}
      <div
        className="absolute top-24 right-8 transition-transform duration-300 z-20"
        style={{}}
      >
        <h1 className="text-[60px] font-semibold text-gray-400 tracking-wider text-right font-poppins">
          Front-End
          <br />
          Developer
        </h1>
      </div>

      {/* 캐릭터 이미지 - 중앙 */}
      <div className="z-10">
        <img
          src={characterImage}
          alt="Character"
          className="w-96 h-96 object-contain"
        />
      </div>
    </section>
  );
}
