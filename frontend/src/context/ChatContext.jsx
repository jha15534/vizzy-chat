import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem("vizzyChats");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    localStorage.setItem("vizzyChats", JSON.stringify(chats));
  }, [chats]);

  const createChat = () => {
    const chat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
      images: [],
    };

    setChats((prev) => [chat, ...prev]);
    setCurrentChat(chat.id);
  };

  const updateChat = (id, data) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, ...data } : chat
      )
    );
  };

  const deleteChat = (id) => {
    setChats((prev) => prev.filter((chat) => chat.id !== id));

    if (currentChat === id) {
      setCurrentChat(null);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChat,
        setCurrentChat,
        createChat,
        updateChat,
        deleteChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}