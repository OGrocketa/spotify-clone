from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter() 

@router.post("/albums/", response_model=schemas.Album)
def create_album(album: schemas.AlbumCreate, db: Session = Depends(get_db)):
    return crud.create_album(db = db, album = album)

@router.delete("/albums/{album_id}", response_model= schemas.Album)
def remove_album(album_id: str, db: Session = Depends(get_db)):
    album = crud.delete_album(db=db, album_id=album_id)

    if album is None:
        raise HTTPException(status_code = 404, detail= "Album not found")
    
    return album

@router.get("/albums/{album_id}", response_model=schemas.Album)
def get_album(album_id: str, db: Session = Depends(get_db)):
    album = db.query(models.Album).filter(models.Album.id == album_id).first()
    if not album:
        raise HTTPException(status_code=404, detail="Album Not Found")
    
    return album

@router.get("/artists/{artist_id}/albums", response_model= list[schemas.Album])
def get_albums_by_artist_id(artist_id:str, db: Session = Depends(get_db)):
    albums = db.query(models.Album).filter(models.Album.artist_id == artist_id).all()
    if not albums:
        return HTTPException(status_code = 404, detail = "Albums not found")
    return albums

