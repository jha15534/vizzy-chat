from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models.chat import Chat
from app.models.message import Message
from app.routes.history import router as history_router
from app.routes.chat import router as chat_router

from app.routes.image import router as image_router

from app.database import Base, engine

from app.models.user import User

from app.routes.auth import router as auth_router

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Vizzy Chat API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_router)

app.include_router(chat_router)

app.include_router(image_router)

app.include_router(history_router)

@app.get("/")
def home():
    return {"message": "Vizzy Chat Backend Running 🚀"}

@app.get("/health")
def health():
    return {"status": "ok"}