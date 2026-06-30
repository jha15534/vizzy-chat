from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, func
from app.database import Base


class Chat(Base):
    __tablename__ = "chats"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    title = Column(String(255))

    created_at = Column(
        DateTime,
        server_default=func.now()
    )