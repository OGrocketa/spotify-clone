import { useEffect } from "react";

const usePlayNewSong = (audioRef, file_url,isPlaying) => {
    useEffect(() => {
        if (audioRef.current && file_url) {
            audioRef.current.pause(); // Pause current playback
            audioRef.current.load(); // Reload the audio element with the new source
            if (isPlaying) {
                audioRef.current.play(); // Start playback for the new song
            }
        }
      }, [file_url]); 
}
export default usePlayNewSong;

  