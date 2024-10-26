from sqlalchemy.orm import Session
import models, schemas

def create_artist(db: Session, artist: schemas.ArtistCreate):
    db_artist = models.Artist(
        name = artist.name,
        bio = artist.bio,
        artist_type = artist.artist_type,
        avatar_url = artist.avatar_url,
    )
    db.add(db_artist)
    db.commit()
    db.refresh(db_artist)
    return db_artist

def delete_artist(db:Session, artist_id:str):
    db_artist = db.query(models.Artist).filter(models.Artist.id == artist_id).first()
    
    if db_artist is None:
        return None
    
    db.delete(db_artist)
    db.commit()
    return db_artist


def create_album(db: Session, album: schemas.AlbumCreate):


    # Create a new album instance
    db_album = models.Album(
        artist_id=album.artist_id,
        title=album.title,
        label=album.label,
        album_length=album.album_length,
        track_count=album.track_count,
        release_date=album.release_date,
        cover_url=album.cover_url,
        album_type=album.album_type,
    )

    # Add the album to the session and commit it to get the generated ID
    db.add(db_album)
    db.commit()
    db.refresh(db_album)  # Now db_album has an ID

    return db_album

def delete_album(db: Session, album_id: str):
    # Query to find the album
    db_album = db.query(models.Album).filter(models.Album.id == album_id).first()

    # If the album is not found, return None
    if db_album is None:
        return None
    
    # Delete the album and commit the transaction
    db.delete(db_album)
    db.commit()
    return db_album


def create_song(db: Session, song: schemas.SongCreate):
    db_song = models.Song(
        album_id = song.album_id,
        title = song.title,
        lyrics = song.lyrics,
        song_length = song.song_length,
        play_count = song.play_count,
        file_url = song.file_url,
    )

    db.add(db_song)
    db.commit()
    db.refresh(db_song)
    return song
    
def delete_song(db: Session, song_id: str):
    db_song = db.query(models.Song).filter(models.Song.id == song_id).first()
    if db_song is None:
        return None
    
    db.delete(db_song)
    db.commit()
    return db_song