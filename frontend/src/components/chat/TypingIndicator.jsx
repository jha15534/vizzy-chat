export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 bg-[#1E293B] border border-white/10 rounded-2xl px-5 py-4 w-fit shadow-lg">

      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
        🤖
      </div>

      <div>

        <p className="text-sm text-gray-300 mb-2">
          Vizzy AI is thinking...
        </p>

        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 bg-violet-400 rounded-full animate-bounce"></span>
          <span className="w-2.5 h-2.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
          <span className="w-2.5 h-2.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
        </div>

      </div>

    </div>
  );
}