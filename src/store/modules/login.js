import axios from "axios";

const state = {
    isLoggedIn: false,
    loginAttempt: "",
    profile: {
        id: "", 
        token: "",
        email: "", 
        name: "",
        avatar: "",
        phone: "",
        isverified: false
    }
}

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    getProfile: (state) => state.profile
}

const actions = {
    async authenticate({commit}, authentication){
        await axios({
            method: 'post',
            url: 'https://api.jgeez.co/auth/login',
            data:  authentication,
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(response => { 
            let authent_stats = {
                data: response.data,
                status: "Authentication successful",
                status_type: true
            }
            commit("setUserProfile", authent_stats);
        })
        .catch(error => {
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
    updateProfileState: function(state, newState){
        if(Object.keys(newState).length > 0){
            state.profile = newState;
        }
    },
    setUserProfile: (state, authent_stats) => {
        let isLoggin = false; 
        let loginAttempt = "";
        let userProfile = state.profile;

        if(Object.keys(authent_stats.data).length > 0 && authent_stats.status_type == true){
            isLoggin = true;

            userProfile = {
                id: authent_stats.data.user.id, 
                token: authent_stats.data.access_token,
                email: authent_stats.data.user.email, 
                name: authent_stats.data.user.username,
                avatar: authent_stats.data.user.profile.profile_picture,
                isverified: authent_stats.data.user.profile.is_verified
            }
            
            loginAttempt = authent_stats.status;
        }    
        
        state.isLoggedIn = isLoggin;
        state.profile = userProfile;
        state.loginAttempt = loginAttempt

        if(isLoggin == true){
            setTimeout(() => {
                location.reload();
            }, 100);
        } else {
            alert("Username or password incorrect");
        }
    }
};

export default {
	state, getters, actions, mutations
}