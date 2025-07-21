import profileImg from "../assets/profile.jpg";

export default function SectionAbout() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center py-16"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-6xl font-bold mb-16 text-gray-800 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 프로필 사진 및 기본 정보 */}
          <div className="text-center">
            <div className="mb-8">
              <img
                src={profileImg}
                alt="이윤지 프로필 사진"
                className="w-64 h-64 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">이윤지</h3>
              <p className="text-xl text-blue-600 mb-4">Frontend Developer</p>
              <div className="space-y-2 text-lg text-gray-700">
                <p className="flex items-center justify-center gap-2">
                  <span>📧</span>
                  <a
                    href="mailto:leeeydia@gmail.com"
                    className="hover:text-blue-600 transition"
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
                <p className="flex items-center justify-center gap-2">
                  <span>🐙</span>
                  <a
                    href="https://github.com/Leeeydia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    github.com/Leeeydia
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 소개 및 사용 도구 */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">소개</h4>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  안녕하세요! 사용자 경험을 중시하는 프론트엔드 개발자입니다.
                </p>
                <p>
                  React, TypeScript, Tailwind CSS를 활용하여 직관적이고 아름다운
                  웹 애플리케이션을 만드는 것을 좋아합니다.
                </p>
                <p>
                  끊임없이 학습하고 성장하는 개발자가 되고자 하며, 새로운 기술과
                  도전을 즐깁니다.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                사용 도구
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 mb-2">
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
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full min-w-0">
                  <h5 className="text-lg font-semibold text-gray-700 mb-2">
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
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm break-words"
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
