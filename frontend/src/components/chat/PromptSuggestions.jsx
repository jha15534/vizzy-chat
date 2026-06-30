import {
  Palette,
  Image,
  BookOpen,
  Briefcase,
  Coffee,
  Sparkles,
} from "lucide-react";

const prompts = [
  {
    icon: <Palette size={22} />,
    title: "AI Artwork",
    subtitle: "Generate digital art",
    prompt: "Create futuristic AI artwork",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Business Poster",
    subtitle: "Marketing designs",
    prompt: "Create business poster",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Story Writing",
    subtitle: "Creative stories",
    prompt: "Write a creative story",
  },
  {
    icon: <Image size={22} />,
    title: "Photo Editing",
    subtitle: "Enhance images",
    prompt: "Edit my image professionally",
  },
  {
    icon: <Coffee size={22} />,
    title: "Campaign",
    subtitle: "Marketing ideas",
    prompt: "Create coffee campaign",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Logo Design",
    subtitle: "Modern branding",
    prompt: "Design a modern logo",
  },
];

export default function PromptSuggestions({ onSelect }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

      {prompts.map((item) => (
        <button
          key={item.title}
          onClick={() => onSelect(item.prompt)}
          className="
            bg-[#182235]
            border
            border-slate-700
            rounded-xl
            p-5
            text-left
            hover:border-violet-500
            hover:bg-[#202B40]
            hover:-translate-y-1
            transition-all
            duration-300
            group
          "
        >

          <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition">

            {item.icon}

          </div>

          <h3 className="mt-4 text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {item.subtitle}
          </p>

        </button>
      ))}

    </div>
  );
}