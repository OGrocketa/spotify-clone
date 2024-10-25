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
    album_ids: Optional[List[int]] = None

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
    label: Optional[str] = None
    album_length: Optional[time] = None
    track_count: Optional[int] = None
    release_date: Optional[datetime] = None
    cover_url: Optional[HttpUrl] = None  # Validates the URL for the cover
    album_type: AlbumType  # Enum for 'Album' or 'Single'
    song_ids: Optional[List[int]] = None  # List of song IDs

    

# Schema for returning an album (includes the ID field)
class Album(AlbumCreate):
    id: str  # The ID will be auto-generated
    artist_id: Optional[str] = None  # Optional artist ID

    class Config:
        from_attributes = True