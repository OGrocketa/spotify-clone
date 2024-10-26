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






app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
