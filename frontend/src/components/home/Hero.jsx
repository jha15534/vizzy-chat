import { Sparkles, Image, MessageSquare, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120]">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-violet-600/20 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600/15 border border-violet-500/40 text-violet-200 font-semibold shadow-md">

            <Sparkles
              size={18}
              className="text-violet-300 flex-shrink-0"
            />

            <span>AI Powered Creativity</span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-6xl lg:text-7xl font-extrabold leading-tight text-white">

            Create Anything

            <br />

            <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">

              Simply Ask AI

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 text-slate-300 text-xl leading-9 max-w-xl">

            Vizzy AI helps you generate AI conversations,
            stunning images, business ideas, posters,
            social media content and much more —
            all from one intelligent assistant.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex items-center gap-4">

            <Link
              to="/signup"
              className="inline-flex items-center justify-center
              h-14 px-8
              rounded-xl
              bg-violet-600
              hover:bg-violet-700
              text-white
              font-semibold
              shadow-lg
              transition-all duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/chat"
              className="inline-flex items-center justify-center
              h-14 px-8
              rounded-xl
              border border-slate-600
              bg-[#182235]
              text-white
              font-semibold
              hover:bg-[#243147]
              hover:border-violet-500
              transition-all duration-300"
            >
              Try Demo
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-10 mt-14">

            <div>

              <h2 className="text-4xl font-bold text-violet-400">
                10K+
              </h2>

              <p className="text-slate-400 mt-2">
                AI Responses
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-cyan-400">
                5K+
              </h2>

              <p className="text-slate-400 mt-2">
                Images Created
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-green-400">
                99%
              </h2>

              <p className="text-slate-400 mt-2">
                Satisfaction
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="bg-[#162033] border border-slate-700 rounded-3xl p-8 shadow-2xl">

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-[#243147] rounded-2xl p-5 hover:bg-[#2D3B56] transition">

                <MessageSquare
                  className="text-violet-400"
                  size={24}
                />

                <div>

                  <h3 className="text-white text-lg font-semibold">
                    AI Chat Assistant
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Ask anything instantly
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 bg-[#243147] rounded-2xl p-5 hover:bg-[#2D3B56] transition">

                <Image
                  className="text-cyan-400"
                  size={24}
                />

                <div>

                  <h3 className="text-white text-lg font-semibold">
                    AI Image Generator
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Generate stunning artwork
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 bg-[#243147] rounded-2xl p-5 hover:bg-[#2D3B56] transition">

                <Zap
                  className="text-yellow-400"
                  size={24}
                />

                <div>

                  <h3 className="text-white text-lg font-semibold">
                    Business AI
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Marketing, branding & ideas
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}