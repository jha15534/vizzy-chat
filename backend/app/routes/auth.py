from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.user import User
from app.schemas.auth import SignupRequest, LoginRequest
from app.auth import hash_password, verify_password
from app.jwt_handler import create_access_token

router = APIRouter(tags=["Authentication"])


# -----------------------------
# Signup
# -----------------------------
@router.post("/signup")
def signup(request: SignupRequest):

    db: Session = SessionLocal()

    existing = (
        db.query(User)
        .filter(User.email == request.email)
        .first()
    )

    if existing:
        db.close()
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    user = User(
        name=request.name,
        email=request.email,
        password=hash_password(request.password),
    )

    db.add(user)
    db.commit()
    db.refresh(user)
    db.close()

    return {
        "message": "Signup Successful"
    }


# -----------------------------
# Login
# -----------------------------
@router.post("/login")
def login(request: LoginRequest):

    db: Session = SessionLocal()

    user = (
        db.query(User)
        .filter(User.email == request.email)
        .first()
    )

    if not user:
        db.close()
        raise HTTPException(
            status_code=401,
            detail="Invalid Email or Password"
        )

    if not verify_password(request.password, user.password):
        db.close()
        raise HTTPException(
            status_code=401,
            detail="Invalid Email or Password"
        )

    token = create_access_token(
        {
            "sub": str(user.id),
            "email": user.email,
            "name": user.name,
        }
    )

    db.close()

    return {
        "message": "Login Successful",
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
        },
    }