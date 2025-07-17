export default function Footer() {
  return (
    <footer
      id="contact"
      className="h-screen bg-gray-800 text-white flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h3 className="text-6xl font-bold mb-8">Contact</h3>
        <div className="text-xl text-gray-300 leading-relaxed space-y-6">
          <p className="mb-8">함께 일하고 싶으시다면 언제든지 연락해주세요!</p>
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:leeeydia@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition text-lg"
            >
              📧 이메일 보내기
            </a>
            <a
              href="https://github.com/Leeeydia"
              className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg transition text-lg"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400">© 2024 이윤지. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
