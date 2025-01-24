from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from fastapi import APIRouter, HTTPException, Depends, status,Form, Response, Request
from typing import Optional,Any
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm,OAuth2PasswordBearer
from fastapi.responses import JSONResponse
from jose import JWTError, jwt
from database import get_db
from datetime import timedelta,datetime
from models import User
from schemas import Token, UserInDb,TokenData, CreateUser

ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

SECRET_KEY = '8===>'
ALGORITHM = 'HS256'

router = APIRouter()

pwd_context = CryptContext(['bcrypt'], deprecated= 'auto')
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login_for_access_token")

def get_password_hash(password: str):
    return pwd_context.hash(password)

def get_user_from_db(username:str, db:Session):
    user = db.query(User).filter(User.username == username).first()
    return user

def verify_password(hashed_password: str, input_password: str):
    return pwd_context.verify(input_password, hashed_password)

def authenticate_user(username: str, password: str, db: Session):
    user = get_user_from_db(username,db)
    if not user:
        return False
    if not verify_password(user.hashed_pwd, password):
        return False
    
    return user

def create_access_token(data:dict, expires_delta: timedelta or None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm =ALGORITHM )
    return encoded_jwt


@router.post('/login_for_access_token', response_model= Token)
async def login_for_access_token(response: Response, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db) ):
    user = authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail='Incorrect username or password',
                            headers={"WWW-Authenticate": "Bearer"})

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    refresh_token_expires = timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)

    access_token = create_access_token(data = {"sub":user.username,"email":user.email, "avatar_url":user.avatar_url, "role": user.role}, expires_delta = access_token_expires)
    refresh_token = create_access_token(data={"sub":user.username,"email":user.email, "avatar_url":user.avatar_url, "role": user.role}, expires_delta = refresh_token_expires)

    response.set_cookie(
        key="refresh_token",
        value= refresh_token,
        httponly = True,
        secure = True,
        samesite = "none",
    )
    return {"access_token":access_token, "token_type":"bearer" }

@router.post('/create_account', status_code=status.HTTP_201_CREATED)
async def create_account(username: str = Form(...),
                         password: str = Form(...),
                         confirm_password: str = Form(...),
                         email: EmailStr = Form(...),
                         db: Session = Depends(get_db)):

    if db.query(User).filter(username == User.username).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Username already used!')

    if db.query(User).filter(email == User.email).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Email already used!')
    
    hashed_password = get_password_hash(password)

    new_user = User(
        username = username,
        email = email,
        hashed_pwd = hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return JSONResponse(status_code= status.HTTP_201_CREATED, content= {"message":"user registered successfully"})

@router.post('/refresh_access_token',response_model= Token)
async def refresh_access_token(request: Request, response: Response, db: Session= Depends(get_db)):
    refresh_token = request.cookies.get("refresh_token")

    if not refresh_token:
        raise HTTPException(status_code= status.HTTP_401_UNAUTHORIZED, detail="Refresh token missing")
    
    try:
        payload = jwt.decode(refresh_token, SECRET_KEY, algorithms= [ALGORITHM])
        username = payload.get("sub")

        if not username:
            raise HTTPException(status_code= status.HTTP_401_UNAUTHORIZED,detail="Invalid token username is missing")
        
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    user = db.query(User).filter(username == User.username).first()

    if not user:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail= "User not found")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token({"sub":user.username,"email":user.email, "avatar_url":user.avatar_url,"role": user.role}, access_token_expires)

    return {"access_token": access_token, "token_type":"bearer"}

@router.post("/logout")
async def logout(response: Response, request: Request):
    # Retrieve the refresh_token from cookies
    refresh_token = request.cookies.get('refresh_token')

    if not refresh_token:
        # No refresh token: Return a 204 No Content response
        response.status_code = 204
        return 

    # Delete the refresh_token cookie
    response.delete_cookie(
        key="refresh_token"
    )

    # Return a success message
    return {"message" : "Logged out!"}


