from fastapi import FastAPI,Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud
from database import SessionLocal, engine
import json
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

# Dependency to get the DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/artists/", response_model=schemas.Artist)
def create_artist(artist: schemas.ArtistCreate, db: Session = Depends(get_db)):
    return crud.create_artist(db=db, artist=artist)

@app.delete("/artist/{artist_id}" , response_model = schemas.Artist)
def remove_artist(artist_id: str, db: Session = Depends(get_db)):
    artist = crud.delete_artist(db = db, artist_id=artist_id)

    if artist is None:
        raise HTTPException(status_code = 404, detail = "Artist Not Found")
    
    return artist

@app.get("/artists/{artist_id}", response_model=schemas.Artist)
def get_artist(artist_id: str, db: Session = Depends(get_db)):
    artist = db.query(models.Artist).filter(models.Artist.id == artist_id).first()
    if not artist:
        raise HTTPException(status_code=404, detail="Artist Not Found")
    
    return artist


@app.post("/albums/", response_model=schemas.Album)
def create_album(album: schemas.AlbumCreate, db: Session = Depends(get_db)):
    return crud.create_album(db = db, album = album)

@app.delete("/albums/{album_id}", response_model= schemas.Album)
def remove_album(album_id: str, db: Session = Depends(get_db)):
    album = crud.delete_album(db=db, album_id=album_id)

    if album is None:
        raise HTTPException(status_code = 404, detail= "Album not found")
    
    return album

@app.get("/albums/{album_id}", response_model=schemas.Album)
def get_album(album_id: str, db: Session = Depends(get_db)):
    album = db.query(models.Album).filter(models.Album.id == album_id).first()
    if not album:
        raise HTTPException(status_code=404, detail="Album Not Found")
    
    return album


@app.post("/songs/", response_model=schemas.Song)
def create_song(song: schemas.SongCreate, db: Session = Depends(get_db)):
    return crud.create_song(db=db, song=song)

@app.delete("/songs/{song_id}", response_model=schemas.Song)
def remove_song(song_id: str, db: Session = Depends(get_db)):
    song = crud.delete_song(song_id=song_id, db=db)

    if song is None:
        raise HTTPException(status_code=404, detail="Song not found")
     
    return song

@app.get("/songs/{song_id}", response_model=schemas.Song)
def get_song(song_id: str, db: Session = Depends(get_db)):
    song = db.query(models.Song).filter(models.Song.id == song_id).first()
    if not song:
        raise HTTPException(status_code=404, detail="Song Not Found")
    
    return song


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
