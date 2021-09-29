
const state = {
    video_uploaded: null,
    poster_uploaded: null
}

const getters = {
    getVideo: (state) => state.video_uploaded,
    getPoster: (state) => state.poster_uploaded
}

const actions = {
    updateVideoState: function({commit}, video_binary){
        commit("store_video", video_binary)
    },
    updatePosterState: function({commit}, poster){
        commit("store_poster", poster);
    }
}

const mutations = {
    store_video: function(state, video_binary){
        state.video_uploaded = video_binary;
    },
    store_poster: function(poster){
        this.poster_uploaded = poster;
    },
    clear_state: function(type){
        if(type == 0){
            this.video_uploaded = this.poster_uploaded = null;
        }
        if(type == 1){
            this.video_uploaded = null;
        }
        if(type == 2){
            this.poster_uploaded = null;
        }
    }
}

export default {
	state, getters, actions, mutations
}