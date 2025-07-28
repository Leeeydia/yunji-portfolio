export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-screen bg-gray-800 text-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">
          CONTACT
        </h3>
        <div className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed space-y-4 lg:space-y-6">
          <p className="mb-6 lg:mb-8">
          작은 기회라도 소중히 여기며, 함께할 날을 기다리고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
            <a
              href="mailto:leeeydia@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition text-sm sm:text-base lg:text-lg inline-flex items-center justify-center"
            >
              📧 이메일 보내기
            </a>
            <a
              href="https://github.com/Leeeydia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition text-sm sm:text-base lg:text-lg inline-flex items-center justify-center"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 lg:pt-8 mt-6 lg:mt-8">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 이윤지. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
