from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.quiz_service import save_score, get_leaderboard, get_attempts_left

router = APIRouter()

@router.post("/submit")
def submit(user_id: int, score: int, db: Session = Depends(get_db)):
    result, attempts_left = save_score(db, user_id, score)
    if not result:
        raise HTTPException(status_code=400, detail="No attempts left today")
    return {"msg": "Score saved", "score": result.score, "attempts_left": attempts_left}

@router.get("/leaderboard")
def leaderboard(db: Session = Depends(get_db)):
    leaders = get_leaderboard(db)
    return [{"user_id": row.user_id, "best_score": row.best_score} for row in leaders]

@router.get("/attempts/{user_id}")
def attempts(user_id: int, db: Session = Depends(get_db)):
    attempts_left = get_attempts_left(db, user_id)
    return {"user_id": user_id, "attempts_left": attempts_left}
