import { useState } from "react";
import { Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AIResponseCard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#1E293B] rounded-2xl p-6 border border-white/10 shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-xl">
            🤖
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Vizzy AI
            </h3>

            <p className="text-xs text-gray-400">
              AI Assistant
            </p>
          </div>

        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-[#334155] hover:bg-violet-600 px-3 py-2 rounded-lg transition"
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}
        </button>

      </div>

      {/* Response */}

      <div className="prose prose-invert max-w-none prose-pre:bg-[#0F172A] prose-pre:border prose-pre:border-white/10">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {text}
        </ReactMarkdown>

      </div>

    </div>
  );
}