import { create } from 'zustand';

const usePlayer = create((set) => ({
    ids:[],
    curId: null,
    file_url: "",
    title: "",
    isPlaying: false,
    name: "",
    cover_url: "",
    setPlayerData: (song_data) =>
        set({
            ids:song_data.ids,
            curId: song_data.id,
            title: song_data.title,
            file_url: song_data.file_url,
            cover_url: song_data.cover_url,
            name: song_data.name,
            isPlaying: true
        }),

    setPlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default usePlayer;
