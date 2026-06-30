import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


SYSTEM_PROMPT = """
You are Vizzy AI, a professional AI assistant.

Rules:
- Always give a complete answer.
- Never write 'Continue...'
- Never say 'Would you like me to continue?'
- Never split the response into multiple parts.
- Keep answers concise unless the user explicitly asks for details.
- Format responses using Markdown when helpful.
"""


def generate_response(prompt: str):
    try:
        full_prompt = f"""
{SYSTEM_PROMPT}

User:
{prompt}
"""

        response = model.generate_content(
            full_prompt,
            generation_config=genai.GenerationConfig(
                temperature=0.7,
                max_output_tokens=700,
            ),
        )

        return response.text.strip()

    except Exception as e:
        return f"Error: {str(e)}"