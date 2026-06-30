import {
  MessageSquare,
  Image,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat",
    desc: "Smart conversations powered by AI.",
  },
  {
    icon: Image,
    title: "Image Generation",
    desc: "Create stunning visuals from text.",
  },
  {
    icon: Briefcase,
    title: "Business AI",
    desc: "Marketing, branding and content.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-violet-400 font-semibold tracking-[3px] uppercase">
            Features
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Everything required to create AI content in one place.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#141C2F] border border-slate-700 rounded-2xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-violet-500/15 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-violet-400"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}