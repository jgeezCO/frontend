import Vuex from "vuex"
import Vue from "vue"
import createPersistedState from "vuex-persistedstate";

import login from "./modules/login";
import video_uploaded from "./modules/video/video_uploaded";
import player from "./modules/music/player";
import music from "./modules/music/music";
import video from "./modules/video/video";
import gist from "./modules/gist/gist";

Vue.use(Vuex);

let dataState = createPersistedState();

export default new Vuex.Store({
    modules: {
        login, video_uploaded, player, music, video, gist
    },
    plugins: [ dataState ]
});