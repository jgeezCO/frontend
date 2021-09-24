import Vuex from "vuex"
import Vue from "vue"
import createPersistedState from "vuex-persistedstate";

import login from "./modules/login";

Vue.use(Vuex);

// let dataState = createPersistedState({
//     paths: [
//         'isLoggedIn', "profile"
//     ]
// });

export default new Vuex.Store({
    modules: {
        login
    },
    plugins: [ createPersistedState() ]
});