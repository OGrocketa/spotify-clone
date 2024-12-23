from pydantic import BaseModel, HttpUrl, Field, EmailStr,validator
from typing import Optional, List
from enum import Enum
from datetime import time, date

###ARTIST SCHEMA###
class ArtistType(str,Enum):
    artist = 'Solo'
    band = 'Band'

class ArtistCreate(BaseModel):
    name:str
    bio: Optional[str] = None
    artist_type: ArtistType
    avatar_url : Optional[HttpUrl]= None
    

class Artist(ArtistCreate):
    id:str

    class Config:
        from_attributes = True


###ALBUM SCHEMA###
class AlbumType(str, Enum):
    album = 'Album'
    single = 'Single'


# Schema for creating an album
class AlbumCreate(BaseModel):
    title: str
    artist_id: str = None
    label: Optional[str] = None
    album_length: time = None
    track_count: int = None
    release_date: date = None
    cover_url: Optional[HttpUrl] = None
    album_type: AlbumType  # Enum for 'Album' or 'Single'
    
      

# Schema for returning an album (includes the ID field)
class Album(AlbumCreate):
    id: str  # The ID will be auto-generated
    class Config:
        from_attributes = True


###Song Schema###
class SongCreate(BaseModel):
    album_id: Optional[str] = None
    title: str
    lyrics: Optional[str] = None
    song_length: Optional[time] = None
    play_count: Optional[int] = 0
    file_url: Optional[HttpUrl] = None
    release_date: date = None


class Song(SongCreate):
    id: str 

    class Config:
        from_attributes = True


##Auth schemas
class User(BaseModel):
    user_id: str
    username: str
    email: Optional[str] = None
    avatar_url: Optional[str] = None

class UserInDb(User):
    hashed_pwd: str

    class Config:
        from_attributes = True



class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str

class CreateUser(BaseModel):
    username: str = Field(...,min_length=3, max_length=20, pattern=r'^[a-zA-Z0-9_]+$' )
    password: str = Field(..., min_length=3)
    confirm_password: str
    email: EmailStr

    @validator("password")
    def validate_password(cls,confirm_password, values):
        if "password" in values and confirm_password != values["password"]:
            raise ValueError("Passwords dont match!")

        return confirm_password
    
