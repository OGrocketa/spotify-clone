from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter() 

@router.post("/artists/", response_model=schemas.Artist)
def create_artist(artist: schemas.ArtistCreate, db: Session = Depends(get_db)):
    return crud.create_artist(db=db, artist=artist)

@router.delete("/artist/{artist_id}" , response_model = schemas.Artist)
def remove_artist(artist_id: str, db: Session = Depends(get_db)):
    artist = crud.delete_artist(db = db, artist_id=artist_id)

    if artist is None:
        raise HTTPException(status_code = 404, detail = "Artist Not Found")
    
    return artist

@router.get("/artists/{artist_id}", response_model=schemas.Artist)
def get_artist(artist_id: str, db: Session = Depends(get_db)):
    artist = db.query(models.Artist).filter(models.Artist.id == artist_id).first()
    if not artist:
        raise HTTPException(status_code=404, detail="Artist Not Found")
    
    return artist

@router.get('/all_artists', response_model= list[schemas.Artist])
def get_all_artists(db: Session = Depends(get_db)):
    artists = db.query(models.Artist).all()
    if not artists:
        raise HTTPException(status_code = 404, detail= 'Artists not found')
    return artists
    