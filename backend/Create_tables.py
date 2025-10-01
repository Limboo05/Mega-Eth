from app.database import Base, engine
from app.models import user, quiz, score

print("📦 Creating database tables...")

# Import models so metadata knows about them
Base.metadata.create_all(bind=engine)

print("✅ All tables created successfully!")
