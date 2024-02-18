from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, Column, Integer, String

# 
url = URL.create(
    drivername="postgresql",
    username="postgres",
    password="",
    host="localhost",
    database="Music_app",
    port=5432
)


engine = create_engine(url)
Session = sessionmaker(bind=engine)
session = Session()

