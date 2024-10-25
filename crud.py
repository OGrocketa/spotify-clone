from sqlalchemy.orm import Session
import models, schemas

def create_artist(db: Session, artist: schemas.ArtistCreate):
    db_artist = models.Artist(
        name = artist.name,
        bio = artist.bio,
        artist_type = artist.artist_type,
        avatar_url = artist.avatar_url,
        album_ids = artist.album_ids
    )
    db.add(db_artist)
    db.commit()
    db.refresh(db_artist)
    return db_artist