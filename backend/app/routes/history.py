from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.chat import Chat
from app.models.message import Message
from app.schemas.chat_history import (
    CreateChatRequest,
    SendMessageRequest,
)

router = APIRouter(tags=["History"])


@router.post("/create-chat")
def create_chat(request: CreateChatRequest):

    db: Session = SessionLocal()

    chat = Chat(
        user_id=request.user_id,
        title=request.title,
    )

    db.add(chat)
    db.commit()
    db.refresh(chat)

    db.close()

    return {
        "chat_id": chat.id,
        "message": "Chat Created"
    }


@router.post("/save-message")
def save_message(request: SendMessageRequest):

    db: Session = SessionLocal()

    message = Message(
        chat_id=request.chat_id,
        role=request.role,
        content=request.content,
    )

    db.add(message)
    db.commit()
    db.refresh(message)

    db.close()

    return {
        "message": "Saved Successfully"
    }

@router.get("/user-chats/{user_id}")
def get_user_chats(user_id: int):

    db = SessionLocal()

    chats = (
        db.query(Chat)
        .filter(Chat.user_id == user_id)
        .order_by(Chat.id.desc())
        .all()
    )

    db.close()

    return chats


@router.get("/chat-messages/{chat_id}")
def get_messages(chat_id: int):

    db = SessionLocal()

    messages = (
        db.query(Message)
        .filter(Message.chat_id == chat_id)
        .order_by(Message.id)
        .all()
    )

    db.close()

    return messages