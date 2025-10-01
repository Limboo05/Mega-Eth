from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, quiz, leaderboard

app = FastAPI(title="MegaETH Backend", version="1.0.0")

# ✅ Allow frontend (Vercel) to talk to backend
origins = [
    "http://localhost:5173",  # Vite dev server
    "https://your-frontend.vercel.app"  # replace with actual Vercel domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(quiz.router, prefix="/quiz", tags=["Quiz"])
app.include_router(leaderboard.router, prefix="/leaderboard", tags=["Leaderboard"])

@app.get("/")
def root():
    return {"message": "MegaETH Backend is running 🚀"}
