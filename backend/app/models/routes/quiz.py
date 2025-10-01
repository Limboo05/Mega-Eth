from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.quiz import Quiz

router = APIRouter()

@router.get("/")
def get_quizzes(db: Session = Depends(get_db)):
    return db.query(Quiz).all()

@router.post("/")
def create_quiz(question: str, answer: str, options: str, db: Session = Depends(get_db)):
    new_quiz = Quiz(question=question, answer=answer, options=options)
    db.add(new_quiz)
    db.commit()
    db.refresh(new_quiz)
    return new_quiz
