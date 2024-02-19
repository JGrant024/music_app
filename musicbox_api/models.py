from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from db import engine  
# from sqlalchemy import requests 

Base = declarative_base()


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
    album_id = Column(Integer, ForeignKey("albums.id"))

# Create tables
Base.metadata.create_all(engine)


# fetch_and_store_joke()
