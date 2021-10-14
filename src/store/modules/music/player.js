
const state = {
    is_player_active: false,
    artist: null,
    music_name: null,
    music_url: null
}

const getters = {
    player_is_active: (state) => state.is_player_active,
    get_artist_name: (state) => state.artist,
    get_music_name: (state) => state.music_name,
    get_music_path: (state) => state.music_url
}

const actions = {
    set_music_params: function({commit}, music_payload){
        commit("handle_music_player", music_payload);
    }
}

const mutations = {
    handle_music_player: function(state, music_payload){
        if(music_payload != null && Object.keys(music_payload).length > 0){
            
            if(music_payload.music_url != null && music_payload.music_url.length > 0){
                state.artist = music_payload.music_artist;
                state.music_name = music_payload.music_name;
                state.music_url = music_payload.music_url;
                
                state.is_player_active = true;
            } else {
                state.is_player_active = false;
            }
        } else {
            state.is_player_active = false;
        }
    }
}

export default {
	state, getters, actions, mutations
}