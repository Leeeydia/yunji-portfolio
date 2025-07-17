export default function SectionProjects() {
  return (
    <section
      id="projects"
      className="h-screen bg-white flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-6xl font-bold mb-12 text-gray-800">Projects</h2>
        <div className="text-xl text-gray-700 leading-relaxed">
          <p className="mb-8">제가 작업한 프로젝트들을 소개합니다.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                포트폴리오 웹사이트
              </h3>
              <p className="text-gray-600 mb-4">
                React와 Tailwind CSS로 제작한 개인 포트폴리오 웹사이트입니다.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                더 많은 프로젝트
              </h3>
              <p className="text-gray-600 mb-4">
                더 많은 프로젝트들이 곧 추가될 예정입니다.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
