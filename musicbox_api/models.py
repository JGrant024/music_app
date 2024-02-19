from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from db import engine  
# from sqlalchemy import requests 

Base = declarative_base()
engine = create_engine("Music_app")

class Joke(Base):
    __tablename__ = 'jokes'

    id = Column(Integer, primary_key=True)
    setup = Column(String)
    punchline = Column(String)

# def fetch_and_store_joke():
#     url = "https://official-joke-api.appspot.com/jokes/programming/random"
#     response = requests.get(url)
#     data = response.json()
#     if data:
#         joke_data = data[0]
#         joke = Joke(setup=joke_data['setup'], punchline=joke_data['punchline'])
#         session.add(joke)
#         session.commit()
#         print("Joke stored successfully")
#     else:
#         print("No joke data received")

class Album(Base): 
    __tablename__ = 'albums'
    
    id = Column(Integer, primary_key=True)
    title = Column(String)
    artist = Column(String)
    songs = relationship('Song', backref="albums")

class Song(Base): 
    __tablename__ = 'songs'
    id = Column(Integer, primary_key=True)
    title = Column(String) 
    album_id = Column(Integer, ForeignKey("album.id"))

# Create tables
Base.metadata.create_all(engine)


Session = sessionmaker(bind=engine)
session = Session()

album = session.query(Album).filter_by(title="RENAISSANCE").first()

song1 = Song(title="I'M THAT GIRL", album=album)
song2 = Song(title="COZY", album=album)
song3 = Song(title="ALIEN SUPERSTAR", album=album)
song4 = Song(title="CUFF IT", album=album)
song5 = Song(title="ENERGY (FEAT. BEAM)", album=album)
song6 = Song(title="BREAK MY SOUL", album=album)
song7 = Song(title="CHURCH GIRL", album=album)
song8 = Song(title="PLASTIC OFF THE SOFA", album=album)
song9 = Song(title="VIRGO'S GROOVE", album=album)
song10 = Song(title="MOVE", album=album)
session.add_all ([song1,song2, song3, song4, song5, song6, song7, song8, song9, song10
])

session.commit() 
# fetch_and_store_joke()
