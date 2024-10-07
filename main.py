from fastapi import FastAPI
import json
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open('public/data/albums.json') as file:
    albums = json.load(file)

app.mount("/artists", StaticFiles(directory="public/artists"), name="artists")


@app.get("/song/{title}")
def get_song_by_title(title:str):
    try:
        for album in albums:
            for song in album['songs']:
                if song['title'].lower() == title.lower():
                    
                    album_cover = f"/artists/{album['artistName']}/albums/{album['title']}/cover.png"

                    return {"song": song,
                            "artistName": album['artistName'],
                            "artistId": album['artistId'],
                            "albumId" :album['id'],
                            "albumCover": album['cover'],
                            "songFile": song['filePath']
                            }

        return {"error" : "Song not found"}
    except Exception as e:
        print(e) 
        return {"error": "Something went wrong"}

