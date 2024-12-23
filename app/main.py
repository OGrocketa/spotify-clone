from fastapi import FastAPI
import models, json
from database import engine
from fastapi.middleware.cors import CORSMiddleware
from routers import artists, albums, songs, auth

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

app.include_router(artists.router)
app.include_router(albums.router)
app.include_router(songs.router)
app.include_router(auth.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

