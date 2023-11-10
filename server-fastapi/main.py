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
    username: str
    secret: str
    email: Union[str, None] = None
    first_name: Union[str, None] = None
    last_name: Union[str, None] = None


@app.post("/login/")
async def login_user(user: User):
    response = requests.get(
        "https://api.chatengine.io/users/me/",
        headers={
            "Project-ID": PROJECT_ID,
            "User-Name": user.username,
            "User-Secret": user.secret,
        },
        timeout=5,
    )
    return response.json()


@app.post("/signup/")
async def signup_user(user: User):
    response = requests.post(
        "https://api.chatengine.io/users/",
        data={
            "username": user.username,
            "secret": user.secret,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
        },
        headers={"Private-Key": PRIVATE_KEY},
        timeout=5,
    )
    return response.json()


# uvicorn main:app --reload --port 3001
