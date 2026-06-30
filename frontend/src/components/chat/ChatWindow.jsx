import { useState, useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import PromptSuggestions from "./PromptSuggestions";
import TypingIndicator from "./TypingIndicator";
import ImageGrid from "./ImageGrid";
import AIResponseCard from "./AIResponseCard";
import api from "../../services/api";
import { generateImages } from "../../services/imageApi";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello 👋 I'm Vizzy AI. What would you like to create today?",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const bottomRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading, images]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // User Message
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text,
      },
    ]);

    setLoading(true);

    try {
      const response = await api.post("/chat", {
        prompt: text,
      });

      const aiText = response.data.response;

      // Empty AI Message
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "",
        },
      ]);

      // Typing Effect
      let index = 0;

      const interval = setInterval(() => {
        index++;

        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            text: aiText.slice(0, index),
          };

          return updated;
        });

        if (index >= aiText.length) {
          clearInterval(interval);
        }
      }, 10);

      // Generate Images
      const imgs = await generateImages(text);
      setImages(imgs);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "❌ Cannot connect to backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F172A] text-white">

      {/* Header */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-8">

        <h2 className="text-2xl font-bold">
          ✨ Vizzy Chat
        </h2>

        <button className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl transition">
          Business Mode
        </button>

      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-10 py-8">

        {/* Welcome */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold">
            Hello Shruti
          </h1>

          <p className="text-gray-400 text-xl mt-3">
            What would you like to create today?
          </p>

          <PromptSuggestions onSelect={sendMessage} />

        </div>

        {/* Empty State */}
        {messages.length === 1 && !loading && (
          <div className="mt-16 text-center text-gray-400">

            <h2 className="text-2xl font-bold text-white">
              Start your first conversation
            </h2>

            <p className="mt-2">
              Ask anything, generate stunning AI images,
              write code, create content and much more.
            </p>

          </div>
        )}

        {/* Messages */}
        <div className="space-y-6 mt-10">

          {messages.map((msg, index) =>
            msg.type === "user" ? (
              <ChatBubble
                key={index}
                type={msg.type}
                text={msg.text}
              />
            ) : (
              <AIResponseCard
                key={index}
                text={msg.text}
              />
            )
          )}

          {/* Typing */}
          {loading && <TypingIndicator />}

          {/* Images */}
          {!loading && images.length > 0 && (
            <ImageGrid images={images} />
          )}

          {/* Auto Scroll */}
          <div ref={bottomRef}></div>

        </div>

      </div>

      {/* Bottom Input */}
      <ChatInput onSend={sendMessage} />

    </div>
  );
}