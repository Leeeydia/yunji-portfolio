export default function SectionAbout() {
  return (
    <section
      id="about"
      className="h-screen bg-gray-100 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-6xl font-bold mb-8 text-gray-800">About Me</h2>
        <div className="text-xl text-gray-700 leading-relaxed space-y-6">
          <p>
            안녕하세요! 프론트엔드 개발자 <strong>이윤지</strong>입니다.
          </p>
          <p>
            사용자 경험을 중시하며 React, TypeScript, Tailwind CSS를 활용하여
            <br />
            직관적이고 아름다운 웹 애플리케이션을 만드는 것을 좋아합니다.
          </p>
          <p>
            끊임없이 학습하고 성장하는 개발자가 되고자 하며,
            <br />
            새로운 기술과 도전을 즐깁니다.
          </p>
        </div>
      </div>
    </section>
  );
}
