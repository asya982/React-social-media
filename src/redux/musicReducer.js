const PLAY_STOP = "PLAY_STOP";

let initialState = {
    music: [
        { id: 0, songName: "Yes to haven", artist: "Lana Del Rey", duration: 280, isPlaying: false },
        { id: 1, songName: "Detention", artist: "Melanie Martines", duration: 123, isPlaying: false },
        { id: 2, songName: "Summertime Sadness", artist: "Lana Del Rey", duration: 146, isPlaying: false },
        { id: 3, songName: "Daddy Issues", artist: "The Neighbourhood", duration: 330, isPlaying: true },
        { id: 4, songName: "Young and beautiful", artist: "Lana Del Rey", duration: 189, isPlaying: false },
        { id: 5, songName: "I Wanna Be Yours", artist: "Arctic Monkeys", duration: 209, isPlaying: true },
        { id: 6, songName: "Yes to haven", artist: "Lana Del Rey", duration: 280, isPlaying: false },
    ],
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_STOP:
            return {
                ...state,
                music: state.music.map(song => {
                    if (action.id === song.id) {
                        return { ...song, isPlaying: !song.isPlaying }
                    } else if (song.isPlaying) {
                        return { ...song, isPlaying: false }
                    }
                    return song;
                })
            };
        default:
            return state;
    }
};

export const playStopAC = (id) => ({type: PLAY_STOP, id: id});

export default musicReducer;