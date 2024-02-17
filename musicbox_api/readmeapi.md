Exercises

Build your own

Time to go back to your music app and prepare it to serve an API

Database
Make a new directory, give it a descriptive name that indicates it's an API for your app, eg. /musicbox_api
Determine what data you'd like to store, write this out ✏️
Create a Database Schema, saved it in a schema.sql file, with the necessary tables and columns.
Include the following entries in your schema.sql file. We'll be including them next week.

CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS tokens (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
token TEXT NOT NULL
);

FastAPI
Install and configure FastAPI & SQLAlchemy

Use the School and Apple CEOs exercises as guides!
Create Models that match the data you setup in your schema

Include the following models:
class Token(BaseModel):
access_token: str
token_type: str

class User(BaseModel):
username: str

Setup the routes/route types that you'll need

👉 Don't worry about the user/token routes, we'll configure those next week
Test these routes using the Swagger Docs built into FastAPI

Reminder
Remember to use pyenv for these exercises!

Steps to use the command
Execute the following command in your project folder to create a directory named env containing the virtual environment setup.

python -m venv env

To activate the virtual environment, use the following command:

source env/bin/activate

Once activated, the virtual environment's Python interpreter and packages will be used for any Python commands executed in that terminal session.

To deactivate the virtual environment, simply type:

deactivate

This will revert to using the system's default Python environment.
