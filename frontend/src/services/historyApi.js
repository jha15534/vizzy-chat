import api from "./api";

export const createChat = (data) =>
  api.post("/create-chat", data);

export const saveMessage = (data) =>
  api.post("/save-message", data);

export const getChats = (userId) =>
  api.get(`/user-chats/${userId}`);

export const getMessages = (chatId) =>
  api.get(`/chat-messages/${chatId}`);