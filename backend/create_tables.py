# create_tables.py

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models.user import Base, User
from app.models.score import Score
import os

# Get the Postgres connection string from Render environment
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("❌ DATABASE_URL environment variable is not set!")

# Ensure psycopg2 connection format
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Create engine and bind session
engine = create_engine(DATABASE_URL, echo=True, future=True)
SessionLocal = sessionmaker(bind=engine)

def init_db():
    # This creates tables if they don’t exist yet
    print("📦 Creating tables if not exist...")
    Base.metadata.create_all(bind=engine)
    print("✅ Tables created successfully.")

if __name__ == "__main__":
    init_db()

print("✅ All tables created successfully!")
