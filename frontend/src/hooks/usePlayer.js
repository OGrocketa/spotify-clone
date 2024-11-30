import { create } from 'zustand';

const usePlayer = create((set) => ({
    ids:[],
    curId: null,
    file_url: "",
    title: "",
    isPlaying: false,
    name: "",
    cover_url: "",
    artist_id: "",
    setPlayerIds: (ids_data) => set({
            ids:ids_data,
        }),

    setPlayerSongData:(song_data) => set({
            curId: song_data.curId,
            title: song_data.title,
            file_url: song_data.file_url,
            cover_url: song_data.cover_url,
            name: song_data.name,
            isPlaying: true,
            artist_id: song_data.artist_id
    }),

    setPlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default usePlayer;
