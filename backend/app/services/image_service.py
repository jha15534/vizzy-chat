import os
import requests
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")

API_URL = "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell"

headers = {
    "Authorization": f"Bearer {HF_API_KEY}",
}


def generate_image(prompt: str):

    response = requests.post(
        API_URL,
        headers=headers,
        json={
            "inputs": prompt
        },
        timeout=120,
    )

    if response.status_code != 200:
        raise Exception(response.text)

    filename = "generated.png"

    with open(filename, "wb") as f:
        f.write(response.content)

    return filename