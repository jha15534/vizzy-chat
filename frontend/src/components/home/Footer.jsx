export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Vizzy AI
            </h2>

            <p className="text-slate-400 mt-4">
              One workspace for AI Chat, Image Generation and Business AI.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Product</h3>

            <ul className="space-y-3 text-slate-400">
              <li>AI Chat</li>
              <li>Image Generator</li>
              <li>Business AI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>

            <ul className="space-y-3 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Connect</h3>

            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-xl bg-[#141C2F] flex items-center justify-center text-xl hover:bg-violet-600 transition">
                🌐
              </a>

              <a href="#" className="w-11 h-11 rounded-xl bg-[#141C2F] flex items-center justify-center text-xl hover:bg-violet-600 transition">
                💼
              </a>

              <a href="#" className="w-11 h-11 rounded-xl bg-[#141C2F] flex items-center justify-center text-xl hover:bg-violet-600 transition">
                ✉️
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-slate-500 text-sm">
          <p>© 2026 Vizzy AI. All rights reserved.</p>

          <p>Built with React • FastAPI • Gemini</p>
        </div>

      </div>
    </footer>
  );
}