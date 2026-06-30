import { useState } from "react";
import {
  Send,
  Paperclip,
  Image,
  Mic,
} from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t border-slate-800 bg-[#0F172A] p-6">

      <div className="relative max-w-5xl mx-auto">

        <textarea
          rows={3}
          placeholder="Describe anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="
            w-full
            min-h-[120px]
            resize-none
            rounded-3xl
            bg-[#1E293B]
            border
            border-slate-700
            px-6
            py-5
            pr-28
            text-white
            text-lg
            placeholder:text-slate-500
            outline-none
            focus:border-violet-500
            transition
          "
        />

        {/* Bottom Icons */}

        <div className="absolute bottom-5 left-6 flex gap-4">

          <button className="text-slate-400 hover:text-violet-400 transition">
            <Paperclip size={20} />
          </button>

          <button className="text-slate-400 hover:text-cyan-400 transition">
            <Image size={20} />
          </button>

          <button className="text-slate-400 hover:text-green-400 transition">
            <Mic size={20} />
          </button>

        </div>

        {/* Send */}

        <button
          onClick={handleSend}
          className="
            absolute
            bottom-4
            right-4
            w-12
            h-12
            rounded-full
            bg-violet-600
            hover:bg-violet-700
            flex
            items-center
            justify-center
            transition
            shadow-lg
          "
        >
          <Send size={20} className="text-white" />
        </button>

      </div>

    </div>
  );
}