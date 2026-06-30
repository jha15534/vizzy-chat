from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime, func
from app.database import Base


class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)

    chat_id = Column(
        Integer,
        ForeignKey("chats.id"),
        nullable=False
    )

    role = Column(String(20))

    content = Column(Text)

    created_at = Column(
        DateTime,
        server_default=func.now()
    )