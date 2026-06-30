import {
  MessageSquare,
  Sparkles,
  Wand2,
  Download,
} from "lucide-react";

const steps = [
  {
    no: "01",
    icon: MessageSquare,
    title: "Describe",
    desc: "Tell Vizzy what you want.",
  },
  {
    no: "02",
    icon: Sparkles,
    title: "Generate",
    desc: "AI creates multiple results.",
  },
  {
    no: "03",
    icon: Wand2,
    title: "Refine",
    desc: "Edit until it's perfect.",
  },
  {
    no: "04",
    icon: Download,
    title: "Export",
    desc: "Download and share instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-violet-400 font-semibold uppercase tracking-[3px]">
            Workflow
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            How Vizzy Works
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Four simple steps to create with AI.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.no}
                className="relative bg-[#141C2F] border border-slate-700 rounded-2xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
              >

                <span className="absolute top-5 right-5 text-4xl font-bold text-slate-700">
                  {step.no}
                </span>

                <div className="w-14 h-14 rounded-xl bg-violet-500/15 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-violet-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}