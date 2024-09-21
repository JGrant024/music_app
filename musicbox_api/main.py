from sqlalchemy.ext.declarative import declarative_base 
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from models import Song, Album
from sqlalchemy import create_engine
from db import session 



app = FastAPI()
Base = declarative_base()



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

# @app.get("/Jokes")
# def fetch_and_store_joke(): 
#     return{"message": "Testing new route"}

@app.get("/songs")
def get_songs():
    songs = session.query(Song).all()
    return songs

@app.get("/songs/new")
def add_songs():
    album = session.query(Album).filter_by(title="RENAISSANCE").first()

    song1 = Song(title="I'M THAT GIRL", album_id=album.id)
    song2 = Song(title="COZY",album_id=album.id)
    song3 = Song(title="ALIEN SUPERSTAR",album_id=album.id)
    song4 = Song(title="CUFF IT", album_id=album.id)
    song5 = Song(title="ENERGY (FEAT. BEAM)", album_id=album.id)
    song6 = Song(title="BREAK MY SOUL", album_id=album.id)
    song7 = Song(title="CHURCH GIRL", album_id=album.id)
    song8 = Song(title="PLASTIC OFF THE SOFA", album_id=album.id)
    song9 = Song(title="VIRGO'S GROOVE", album_id=album.id)
    song10 = Song(title="MOVE", album_id=album.id)


    
    session.add_all ([song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,])
    session.commit() 
    return{}
