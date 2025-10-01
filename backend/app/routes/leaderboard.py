from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.score import Score

router = APIRouter()

@router.get("/")
def get_leaderboard(db: Session = Depends(get_db)):
    scores = db.query(Score).order_by(Score.points.desc()).limit(10).all()
    return scores
