from sqlalchemy.ext.declarative import declarative_base 
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
# from models import Song
# from sqlalchemy.orm import Session, sessionmaker
# from sqlalchemy import create_engine




app = FastAPI()
Base = declarative_base()

database_url = "postgresql://postgres:@localhost/Music_app"
# engine = create_engine(database_url)

# Setup our origins...
# ...for now it's just our local environments
origins = [
    "http://localhost",
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Root Route"} 

@app.get("/Jokes")
def fetch_and_store_joke(): 
    return{"message": "Testing new route"}

# @app.get("/songs")
# def get_songs(db: Session = sessionmaker(bind=engine)()):
#     songs = db.query(Song).all()
#     return songs