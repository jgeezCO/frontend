import axios from "axios";

const state = {
    isLoggedIn: false,
    loginAttempt: "",
    profile: {
        id: "", token: "",
        email: "", name: "",
        avatar: ""
    }
}

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    getProfile: (state) => state.profile
}

const actions = {
    async authenticate({commit}, authentication){
        await axios.post(
            'http://localhost/jgeez/login.php', 
            JSON.stringify(authentication)
        ).then(response => { 
            let authent_stats = {
                data: response.data,
                status: "Authentication successful",
                status_type: true
            }
            commit("setUserProfile", authent_stats);
        }).catch(error => {
            let authent_stats = {
                data: error,
                status: "Invalid authentication, try gain...",
                status_type: false
            }
            commit("setUserProfile", authent_stats);
        });
    }
}

const mutations = {
    setUserProfile: (state, authent_stats) => {
        let isLoggin = false; 
        let loginAttempt = "";
        let userProfile = [];

        if(Object.keys(authent_stats.data).length > 0 && authent_stats.status_type == true){
            isLoggin = authent_stats.data.status == "ok" ? true : false;
            userProfile = authent_stats.data.user;
            loginAttempt = authent_stats.status_type;
        }

        state.isLoggedIn = isLoggin;
        state.profile = userProfile;
        state.loginAttempt = loginAttempt

        setTimeout(() => {
            location.reload();
        }, 100);
    }
};

export default {
	state, getters, actions, mutations
}