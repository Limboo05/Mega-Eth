from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.hash import bcrypt
from app.database import get_db
from app.models.user import User

router = APIRouter()

@router.post("/register")
def register(username: str, email: str, password: str, db: Session = Depends(get_db)):
    # check if user exists
    if db.query(User).filter((User.username == username) | (User.email == email)).first():
        raise HTTPException(status_code=400, detail="Username or email already exists")

    hashed_pw = bcrypt.hash(password)
    new_user = User(username=username, email=email, password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User registered successfully", "user": new_user.username}

@router.post("/login")
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user or not bcrypt.verify(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    return {"message": "Login successful", "user": user.username}
