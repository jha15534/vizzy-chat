export default function ChatBubble({ type, text }) {
  const isUser = type === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-6 py-5 shadow-lg whitespace-pre-wrap leading-8 ${
          isUser
            ? "bg-violet-600 text-white"
            : "bg-[#1F2937] border border-white/10 text-gray-200"
        }`}
      >
        <div className="font-bold mb-3">
          {isUser ? "👤 You" : "🤖 Vizzy AI"}
        </div>

        {text}
      </div>
    </div>
  );
}