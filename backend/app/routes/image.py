from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.schemas.image import ImageRequest
from app.services.image_service import generate_image

router = APIRouter()


@router.post("/image")
async def image(request: ImageRequest):

    file = generate_image(request.prompt)

    return FileResponse(
        file,
        media_type="image/png",
        filename="generated.png",
    )