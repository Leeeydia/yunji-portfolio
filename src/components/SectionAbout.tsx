import profileImg from "../assets/profile.jpg";

export default function SectionAbout() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 lg:mb-16 text-gray-800 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 왼쪽: 프로필 사진 및 기본 정보 */}
          <div className="text-center">
            <div className="mb-6 lg:mb-8">
              <img
                src={profileImg}
                alt="이윤지 프로필 사진"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full mx-auto mb-4 lg:mb-6 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                이윤지
              </h3>
              <p className="text-lg sm:text-xl text-blue-600 mb-4">
                Frontend Developer
              </p>
              <div className="space-y-2 text-base sm:text-lg text-gray-700">
                <p className="flex items-center justify-center gap-2 flex-wrap">
                  <span>📧</span>
                  <a
                    href="mailto:leeeydia@gmail.com"
                    className="hover:text-blue-600 transition break-all sm:break-normal"
                  >
                    leeeydia@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📱</span>
                  <a
                    href="tel:010-5533-1544"
                    className="hover:text-blue-600 transition"
                  >
                    010-5533-1544
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2 flex-wrap">
                  <span>🐙</span>
                  <a
                    href="https://github.com/Leeeydia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition break-all sm:break-normal"
                  >
                    github.com/Leeeydia
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 소개 및 사용 도구 */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                소개
              </h4>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-1 lg:space-y-1.5">
                <p>안녕하세요 !</p>
                <p>
                  비전공자로 시작해 <strong>스스로 길</strong>을 만들어온
                  프론트엔드 개발자 <strong>이윤지</strong>입니다.
                </p>
                <p>
                  처음에는 코드 한 줄도 어렵게 느껴졌지만, 지금은 사용자 경험을
                  고려해 기능과 UI를 설계할 수 있는 개발자로 성장했습니다.
                </p>
                <p>
                  <strong>React, TypeScript, Tailwind CSS</strong>를 중심으로{" "}
                  <strong>사용자에게 편리하고 직관적인 화면</strong>을 구현하는
                  데 집중하고 있습니다.
                </p>
                <p>
                  혼자 공부하며 기초를 다졌고, 여러 팀 프로젝트를 통해 팀원들과
                  함께 고민하고 성장하는 과정을 경험했습니다. 그 과정에서{" "}
                  <strong>협업과 소통</strong>의 중요성도 자연스럽게 배웠습니다.
                </p>
                <p>
                  앞으로도 계속 배우고 도전하며, 더 나은 사용자 경험을 만드는
                  개발자가 되고 싶습니다.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                사용 도구
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                    Frontend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Next.js",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="bg-blue-100 text-blue-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full min-w-0">
                  <h5 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                    Tools & Others
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "GitHub",
                      "VS Code",
                      "Figma",
                      "Notion",
                      "Vercel",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="bg-green-100 text-green-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm break-words"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
