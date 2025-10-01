from sqlalchemy.orm import Session
from sqlalchemy import func
from app.models.score import Score

MAX_ATTEMPTS_PER_DAY = 3

def get_attempts_left(db: Session, user_id: int):
    today_attempts = db.query(Score).filter(
        Score.user_id == user_id,
        Score.date == func.current_date()
    ).count()
    return MAX_ATTEMPTS_PER_DAY - today_attempts

def save_score(db: Session, user_id: int, score: int):
    attempts_left = get_attempts_left(db, user_id)
    if attempts_left <= 0:
        return None, 0  # No attempts left

    new_score = Score(user_id=user_id, score=score)
    db.add(new_score)
    db.commit()
    db.refresh(new_score)

    return new_score, get_attempts_left(db, user_id)

def get_leaderboard(db: Session, limit=10):
    return db.query(
        Score.user_id,
        func.max(Score.score).label("best_score")
    ).group_by(Score.user_id).order_by(func.max(Score.score).desc()).limit(limit).all()
