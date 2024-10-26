from pydantic import BaseModel, HttpUrl
from typing import Optional, List
from enum import Enum
from datetime import time, datetime

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
    release_date: datetime = None
    cover_url: Optional[HttpUrl] = None  # Validates the URL for the cover
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

class Song(SongCreate):
    id: str  # ID of the song

    class Config:
        from_attributes = True