from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.auth_service import create_user, authenticate_user

router = APIRouter()

@router.post("/register")
def register(username: str, password: str, db: Session = Depends(get_db)):
    user = create_user(db, username, password)
    return {"msg": "User registered", "id": user.id, "username": user.username}

@router.post("/login")
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = authenticate_user(db, username, password)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"msg": "Login successful", "id": user.id, "username": user.username}
