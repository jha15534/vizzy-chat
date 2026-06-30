import {
  Plus,
  Home,
  Briefcase,
  Clock3,
  Trash2,
} from "lucide-react";

import { useChat } from "../../context/ChatContext";
import UserMenu from "../auth/UserMenu";

export default function Sidebar() {
  const {
    chats,
    currentChat,
    setCurrentChat,
    createChat,
    deleteChat,
  } = useChat();

  return (
    <div className="w-72 bg-[#111827] border-r border-white/10 flex flex-col">

      {/* Logo */}
      <div className="p-6">
        <h1 className="text-4xl font-bold text-white">
          ✨ Vizzy Chat
        </h1>

        <button
          onClick={createChat}
          className="mt-6 w-full bg-violet-600 hover:bg-violet-700 rounded-xl py-3 flex items-center justify-center gap-2 transition"
        >
          <Plus size={20} />
          New Chat
        </button>
      </div>

      {/* Menu */}
      <div className="px-5 space-y-3">
        <div className="flex items-center gap-3 cursor-pointer hover:text-violet-400">
          <Home size={20} />
          Home
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-violet-400">
          <Briefcase size={20} />
          Business
        </div>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto mt-8">
        <div className="px-5 text-gray-400 flex items-center gap-2 mb-4">
          <Clock3 size={18} />
          Recent Chats
        </div>

        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`mx-3 mb-2 rounded-xl px-4 py-3 cursor-pointer flex justify-between items-center transition ${
              currentChat === chat.id
                ? "bg-violet-600"
                : "hover:bg-[#1F2937]"
            }`}
          >
            <div
              className="flex-1"
              onClick={() => setCurrentChat(chat.id)}
            >
              {chat.title}
            </div>

            <Trash2
              size={18}
              onClick={() => deleteChat(chat.id)}
              className="hover:text-red-400"
            />
          </div>
        ))}
      </div>

      {/* User Profile + Logout */}
      <UserMenu />

    </div>
  );
}