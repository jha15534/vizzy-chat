from pydantic import BaseModel


class CreateChatRequest(BaseModel):
    title: str
    user_id: int


class SendMessageRequest(BaseModel):
    chat_id: int
    role: str
    content: str