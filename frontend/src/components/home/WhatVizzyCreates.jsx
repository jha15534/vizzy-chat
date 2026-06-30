import {
  Image,
  Palette,
  PenSquare,
  LayoutTemplate,
  Megaphone,
  FileText,
} from "lucide-react";

const items = [
  {
    icon: Image,
    title: "AI Images",
  },
  {
    icon: Palette,
    title: "Logo Design",
  },
  {
    icon: PenSquare,
    title: "Content",
  },
  {
    icon: LayoutTemplate,
    title: "Posters",
  },
  {
    icon: Megaphone,
    title: "Marketing",
  },
  {
    icon: FileText,
    title: "Presentations",
  },
];

export default function WhatVizzyCreates() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-violet-400 uppercase tracking-[3px] font-semibold">
            AI Capabilities
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Create Anything
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            One AI. Endless possibilities.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-16">

          {items.map((item, index) => {
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

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}