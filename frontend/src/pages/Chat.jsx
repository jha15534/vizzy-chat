import Sidebar from "../components/chat/Sidebar";
import ChatWindow from "../components/chat/ChatWindow";

export default function Chat() {
  return (
    <div className="flex h-screen bg-[#0B1120] text-white">
      <Sidebar />
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}