import Vuex from "vuex"
import Vue from "vue"
import createPersistedState from "vuex-persistedstate";

import login from "./modules/login";
import video_uploaded from "./modules/video_uploaded";

Vue.use(Vuex);

let dataState = createPersistedState({
    paths: [
        login.isLoggedIn, login.loginAttempt, login.profile
    ]
});

export default new Vuex.Store({
    modules: {
        login, video_uploaded
    },
    plugins: [ createPersistedState(dataState) ]
});