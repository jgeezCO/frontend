import Vuex from "vuex";
import Vue from "vue";
import UserProfile from "./modules/user_profile";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        UserProfile
    }
});