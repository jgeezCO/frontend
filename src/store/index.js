import Vuex from "vuex"
import Vue from "vue"
import createPersistedState from "vuex-persistedstate";

import login from "./modules/login";
import video_uploaded from "./modules/video/video_uploaded";
import player from "./modules/music/player";
import music from "./modules/music/music";
import video from "./modules/video/video";

Vue.use(Vuex);

let dataState = createPersistedState({
    paths: [
        login.isLoggedIn, login.loginAttempt, login.profile
    ]
});

export default new Vuex.Store({
    modules: {
        login, video_uploaded, player, music, video
    },
    plugins: [ createPersistedState(dataState) ]
});