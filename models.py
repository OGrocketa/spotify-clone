# models.py
import uuid
from database import Base
from sqlalchemy import Integer,Column, String, Text, Enum, JSON, ForeignKey
from sqlalchemy.sql.sqltypes import TIME,TIMESTAMP
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.orm import relationship




class Artist(Base):
    __tablename__ = 'artists'
    id = Column(CHAR(36), primary_key=True, default=lambda:str(uuid.uuid4()))
    name = Column(String(255), nullable=False)
    bio = Column(Text, nullable=True)
    artist_type = Column(Enum('Solo', 'Band'), nullable=False) 
    avatar_url = Column(String(255), nullable=True)
    album_ids = Column(JSON, nullable=True)

    albums = relationship("Album", back_populates="artist")


class Album(Base):
    __tablename__ = 'albums'
    
    id = Column(CHAR(36), primary_key=True, default=lambda:str(uuid.uuid4()))
    artist_id = Column(CHAR(36), ForeignKey('artists.id'), nullable=True)  # ForeignKey to the artist table
    title = Column(String(255), nullable=False)
    label = Column(String(255), nullable=True)
    album_length = Column(TIME, nullable=True)  # Time field for album length
    track_count = Column(Integer, nullable=True)
    release_date = Column(TIMESTAMP, nullable=True, default='CURRENT_TIMESTAMP')
    cover_url = Column(String(255), nullable=True)
    album_type = Column(Enum('Album', 'Single'), nullable=False)  # Enum for album type
    song_ids = Column(JSON, nullable=True)  # JSON field for storing song IDs

    # Relationship to artist
    artist = relationship("Artist", back_populates="albums")
    songs = relationship("Song", back_populates="album")


class Song(Base):
    __tablename__ = 'songs'
    
    id = Column(CHAR(36), primary_key=True, default=lambda:str(uuid.uuid4())) 
    album_id = Column(CHAR(36), ForeignKey('albums.id'), nullable=True)  # Foreign key to albums table
    title = Column(String(255), nullable=False)
    lyrics = Column(Text, nullable=True)
    song_length = Column(TIME, nullable=True)  # Time field for song length
    play_count = Column(Integer, nullable=True, default=0)  # Default play count is 0
    file_url = Column(String(255), nullable=True)  # URL of the song file

    # Relationship to Album 
    album = relationship("Album", back_populates="songs")
    