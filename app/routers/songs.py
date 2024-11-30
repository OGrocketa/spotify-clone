from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from database import get_db
import models, schemas, crud

router = APIRouter() 


@router.post("/songs/", response_model=schemas.Song)
def create_song(song: schemas.SongCreate, db: Session = Depends(get_db)):
    return crud.create_song(db=db, song=song)

@router.delete("/songs/{song_id}", response_model=schemas.Song)
def remove_song(song_id: str, db: Session = Depends(get_db)):
    song = crud.delete_song(song_id=song_id, db=db)

    if song is None:
        raise HTTPException(status_code=404, detail="Song not found")
     
    return song

@router.get("/songs/{song_id}", response_model=schemas.Song)
def get_song(song_id: str, db: Session = Depends(get_db)):
    song = db.query(models.Song).filter(models.Song.id == song_id).first()
    if not song:
        raise HTTPException(status_code=404, detail="Song Not Found")
    
    return song

@router.get("/albums/{album_id}/songs", response_model= list[schemas.Song])
def get_songs_by_album(album_id: str, db: Session = Depends(get_db)):
    songs = db.query(models.Song).filter(models.Song.album_id == album_id).all()
    
    if not songs:
        raise HTTPException(status_code=404, detail="No songs found for this album")
    
    return songs

@router.get("/artists/{artist_id}/songs", response_model=list[schemas.Song])
def get_most_popular_songs_of_artist(artist_id: str, db: Session = Depends(get_db)):
    songs = crud.get_most_popular_songs_of_artist_by_id(db=db, artist_id=artist_id)
    if songs is None:
        raise HTTPException(status_code=404, detail="No songs found for the artist")
    return songs

