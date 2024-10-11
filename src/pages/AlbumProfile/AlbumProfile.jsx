import React from 'react';
import "./AlbumProfile.css"
import SongsList from '../../components/SongsList/SongsList';
import { LuClock3 } from "react-icons/lu";
import PlayAlbumLine from '../../components/PlayAlbumLine/PlayAlbumLine';
import AlbumHeader from '../../components/AlbumHeader/AlbumHeader';

const albumLengthObj = (albumLength) => {
    // Split the time string into parts
    const parts = albumLength.split(':');
    let minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);

    // Calculate hours and update minutes
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    // Return an object with hours, minutes, and seconds
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

const AlbumProfile = () => {

    const album = {
        "id": 5,
        "title": "Swimming",
        "artistId": 3,
        "artistName": "Mac Miller",
        "releaseDate": "2018-08-03",
        "type":"album",
        "albumLength":"60:42",
        "amountOfTracks":14,
        "songs": [
          {
            "title": "Self Care",
            "duration": "5:45",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Self Care.mp3"
          },
          {
            "title": "Hurt Feelings",
            "duration": "4:06",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Hurt Feelings .mp3"
          },
          {
            "title": "What's the Use?",
            "duration": "4:48",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - What's the Use.mp3"
          },
          {
            "title": "Perfecto",
            "duration": "3:35",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Perfecto.mp3"
          },
          {
            "title": "Self Care",
            "duration": "5:45",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Self Care.mp3"
          },
          {
            "title": "Wings",
            "duration": "4:10",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Wings.mp3"
          },
          {
            "title": "Ladders",
            "duration": "4:47",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Ladders.mp3"
          },
          {
            "title": "Small Worlds",
            "duration": "4:31",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Small Worlds.mp3"
          },
          {
            "title": "Conversation Pt.1",
            "duration": "3:30",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Conversation Pt.1.mp3"
          },
          {
            "title": "Dunno",
            "duration": "3:57",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Dunno.mp3"
          },
          {
            "title": "Jet Fuel",
            "duration": "5:45",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Jet Fuel.mp3"
          },
          {
            "title": "2009",
            "duration": "5:47",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - 2009.mp3"
          },
          {
            "title": "So It Goes",
            "duration": "5:12",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - So It Goes.mp3"
          },
          {
            "title": "Hurt Feelings",
            "duration": "4:06",
            "filePath": "artists/mac miller/albums/swimming/songs/Mac Miller - Hurt Feelings.mp3"
          }
        ],
        "cover": "public/artists/mac miller/albums/swimming/cover.jpg"
      }

      const artist = {
        "id": 3,
        "name": "Mac Miller",
        "bio": "Malcolm James McCormick, known professionally as Mac Miller.",
        "albums": [5, 6],
        "avatar": "public/artists/mac miller/mac miller.jpg",
        "type":"Artist"
      }

    const releaseDate = new Date(album.releaseDate);
  
    const releaseYear = releaseDate.getFullYear();
    const chuj= albumLengthObj(album.albumLength);

    return (
        <div className='album-page-container'>
            <AlbumHeader album={album} artist={artist} />

            <div className='play-album'>
                <PlayAlbumLine />
            </div>

            <div className='song-list-header'>
                <span className='header-index'>#</span>
                <span className='header-title'>Title</span>
                <LuClock3 className='header-clock-icon' />
            </div>

            <hr />

            <SongsList songs={album.songs} artistName={album.artistName} />
        </div>
    );
}

export default AlbumProfile;
