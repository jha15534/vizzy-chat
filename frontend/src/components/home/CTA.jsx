import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-28 bg-[#0B1120]">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl border border-slate-700 bg-gradient-to-r from-[#141C2F] to-[#1A2440] p-14 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to build with AI?
          </h2>

          <p className="text-slate-400 text-lg mt-5 max-w-2xl mx-auto">
            Start creating conversations, images and business content in seconds.
          </p>

          <Link
            to="/signup"
            className="inline-flex items-center gap-2 mt-10 bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Start Creating
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}