import { Bot, ImageIcon } from "lucide-react";

export default function ChatPreview() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-violet-400 uppercase tracking-[3px] font-semibold">
            Preview
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Experience Vizzy
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            AI conversation with instant image generation.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Chat Card */}

          <div className="bg-[#141C2F] border border-slate-700 rounded-3xl p-8 h-[560px] flex flex-col">

            {/* Header */}

            <div className="flex items-center gap-4 pb-6 border-b border-slate-700">

              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">

                <Bot className="text-violet-400" />

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold">
                  Vizzy AI
                </h3>

                <p className="text-slate-400">
                  AI Assistant
                </p>

              </div>

            </div>

            {/* Conversation */}

            <div className="flex-1 flex flex-col justify-center space-y-8">

              {/* User */}

              <div className="flex justify-end">

                <div className="bg-violet-600 text-white px-6 py-4 rounded-2xl rounded-br-md max-w-sm shadow-md">

                  Design a futuristic coffee logo.

                </div>

              </div>

              {/* AI */}

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">

                  <Bot size={18} className="text-white" />

                </div>

                <div className="bg-[#243247] px-6 py-4 rounded-2xl rounded-tl-md max-w-sm text-slate-300 leading-8">

                  Creating multiple logo concepts...
                  <br />
                  Selecting modern typography...
                  <br />
                  Preparing final design...

                </div>

              </div>

            </div>

          </div>

          {/* Image Card */}

          <div className="bg-[#141C2F] border border-slate-700 rounded-3xl p-8 h-[560px] flex flex-col">

            <div className="flex items-center gap-3 mb-6">

              <ImageIcon className="text-cyan-400" />

              <h3 className="text-white text-xl font-semibold">
                Generated Result
              </h3>

            </div>

            <div className="flex-1 overflow-hidden rounded-2xl">

              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200"
                alt="Generated AI Result"
                className="w-full h-full object-cover rounded-2xl"
              />

            </div>

            <button className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition duration-300">

              Download Image

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}