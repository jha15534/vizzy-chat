import { Home, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeBusiness() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-violet-400 font-semibold uppercase tracking-[3px]">
            Choose Experience
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Built for Everyone
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Whether you're creating for yourself or your business.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Home */}

          <div className="bg-[#141C2F] border border-slate-700 rounded-3xl p-10 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-violet-500/15 flex items-center justify-center">

              <Home
                size={32}
                className="text-violet-400"
              />

            </div>

            <h3 className="text-3xl font-bold text-white mt-8">
              Personal
            </h3>

            <p className="text-slate-400 mt-4 leading-8">
              Create AI artwork, images, stories and creative ideas in seconds.
            </p>

            <Link
              to="/chat"
              className="inline-block mt-8 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Explore
            </Link>

          </div>

          {/* Business */}

          <div className="bg-[#141C2F] border border-slate-700 rounded-3xl p-10 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center">

              <Briefcase
                size={32}
                className="text-cyan-400"
              />

            </div>

            <h3 className="text-3xl font-bold text-white mt-8">
              Business
            </h3>

            <p className="text-slate-400 mt-4 leading-8">
              Generate posters, branding, ads and marketing content with AI.
            </p>

            <Link
              to="/business"
              className="inline-block mt-8 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Explore
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}