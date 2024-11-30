from pydantic import BaseModel, Json
from passlib.context import CryptContext
from fastapi import APIRouter, HTTPException
from typing import Optional,Any
from sqlalchemy.orm import Session

router = APIRouter()

pwd_context = CryptContext(['bcrypt'], deprecated= 'auto')

class User(BaseModel):
    username: str
    email: Optional[str] = None
    avatar_url: Optional[str] = None
    name: Optional[str] = None
    disabled: Optional[bool] = None
    liked_songs: Json[any]

class UserInDb(User):
    hashed_pwd: str



def get_password_hash(password: str):
    return pwd_context.hash(password)

def compare_hash_w_input_pwd(hash, input_pwd):
    return pwd_context.verify(input_pwd, hash)

def get_user_from_db(db:Session, username:str):
    
    pass
