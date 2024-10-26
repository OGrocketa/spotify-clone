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

def delete_artist(db:Session, artist_id:str):
    db_artist = db.query(models.Artist).filter(models.Artist.id == artist_id).first()
    
    if db_artist is None:
        return None
    
    db.delete(db_artist)
    db.commit()
    return db_artist

def create_album(db: Session, album: schemas.AlbumCreate):
    # Step 1: Create a new album instance
    db_album = models.Album(
        artist_id=album.artist_id,
        title=album.title,
        label=album.label,
        album_length=album.album_length,
        track_count=album.track_count,
        release_date=album.release_date,
        cover_url=album.cover_url,
        album_type=album.album_type,
        song_ids=album.song_ids,
    )

    # Add the album to the session and commit it to get the generated ID
    db.add(db_album)
    db.commit()
    db.refresh(db_album)  # Now db_album has an ID

    # Step 2: Retrieve the artist and update the album_ids field
    db_artist = db.query(models.Artist).filter(models.Artist.id == album.artist_id).first()

    if db_artist:
        # Initialize album_ids as a list if it's currently None
        if db_artist.album_ids is None:
            db_artist.album_ids = [db_album.id]
        else:
            db_artist.album_ids.append(db_album.id)  # Append the new album ID to the album_ids list

        # Update the artist record in the database
        db.add(db_artist)
        db.commit()
        db.refresh(db_artist)

    # If artist not found, return None or handle it as needed
    else:
        return None

    return db_album