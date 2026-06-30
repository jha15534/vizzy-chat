from fastapi import APIRouter
from app.schemas.chat import ChatRequest
from app.services.ai_service import generate_response

router = APIRouter()

@router.post("/chat")
async def chat(request: ChatRequest):
    reply = generate_response(request.prompt)

    return {
        "response": reply
    }