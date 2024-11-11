export async function fetchAlbum(album_id) {
  const url = `http://localhost:8000/albums/${album_id}`;

  try{
    const response = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  }catch(error){
    console.error('Failed to fetch album: ',error); 
  }
}

export async function fetchSong(song_id) {
  const url = `http://localhost:8000/songs/${song_id}`;

  try{
    const response = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  }catch(error){
    console.error('Failed to fetch song: ',error); 
  }
}

export async function fetchArtist(artist_id) {
  const url = `http://localhost:8000/artists/${artist_id}`;

  try{
    const response = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });

    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;

  }catch (error){
    console.error('Failed to fetch song: ',error);
  }
}

export async function fetchSongsFromAlbum(album_id) {
  const url = `http://localhost:8000/albums/${album_id}/songs`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // This should be the list of songs
  } catch (error) {
    console.error('Failed to fetch songs: ', error);
    return [];
  }
}

export async function fetchAlbumsByartist_id(artist_id) {
  const url = `http://localhost:8000/artists/${artist_id}/albums`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // This should be the list of albums
  } catch (error) {
    console.error('Failed to fetch songs: ', error);
    return [];
  }
}

export async function fetchTopSongsByArtist(artist_id) {
  const url = `http://127.0.0.1:8000/artists/${artist_id}/songs`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
      }
      const songs = await response.json();
      return songs;
  } catch (error) {
      console.error('Error fetching top songs:', error);
      throw error;
  }
}
