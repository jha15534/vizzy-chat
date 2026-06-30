import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-3xl font-bold"
        >
          <Sparkles className="text-violet-500" size={28} />
          Vizzy Chat
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 text-gray-300 text-lg">
          <Link className="hover:text-white transition" to="/">
            Home
          </Link>

          <Link className="hover:text-white transition" to="/chat">
            Chat
          </Link>

          <Link className="hover:text-white transition" to="/business">
            Business
          </Link>

          <Link className="hover:text-white transition" to="/gallery">
            Gallery
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/chat"
          className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 px-6 py-3 rounded-full text-white font-semibold shadow-lg shadow-violet-700/30"
        >
          Start Creating
        </Link>

      </div>
    </nav>
  );
}