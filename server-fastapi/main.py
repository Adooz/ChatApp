""" Defines the main file for the FastAPI server. """
from typing import Union
import os
from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


import requests

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECT_ID = os.getenv("PROJECT_ID")
PRIVATE_KEY = os.getenv("PRIVATE_KEY")


class User(BaseModel):
    """ Defines a user object. """
    username: str
    secret: str
    email: Union[str, None] = None
    first_name: Union[str, None] = None
    last_name: Union[str, None] = None


@app.post("/login/")
async def login_user(user: User) -> dict:
    """
    Defines a route for logging in a user.

    Args:
        user (User): A user object with username and secret.

    Returns:
        dict: A dictionary with the user's information.
    """
    response = requests.get(
        "https://api.chatengine.io/users/me/",
        headers={
            "Project-ID": PROJECT_ID or bytes(),
            "User-Name": user.username,
            "User-Secret": user.secret,
        },
        timeout=5,
    )
    return response.json()


@app.post("/signup/")
async def signup_user(user: User) -> dict:
    """
    Defines a route for signing up a user.

    Args:
        user (User): A user object with username, secret, email, first_name,
            and last_name.

    Returns:
        dict: A dictionary with the user's information.
    """
    response = requests.post(
        "https://api.chatengine.io/users/",
        data={
            "username": user.username,
            "secret": user.secret,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
        },
        headers={"Private-Key": PRIVATE_KEY or bytes()},
        timeout=5,
    )
    return response.json()


# uvicorn main:app --reload --port 3001
