import axios from "axios";
import Vue from "vue";
import login from "../login";

const state = {
    music_data: []
}

const getters = {
    get_music: (state) => {
        return state.music_data;
    },
}

const actions = {
    async fetch_music({commit}, token){   
        let currentScope = this;     
        let headers = {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'content-type': 'multipart/form-data'
        };

        let url_path = token != null 
            ? 'https://api.jgeez.co/api/post/audio/get/' 
            : 'https://api.jgeez.co/api/post/audio/';
        
        if(token != null){
            headers["Authorization"] = 'Bearer ' + token;
        }
        
        await axios({
            method: 'GET',
            url: url_path,
            withCredentials: true,
            data:  null,
            headers: headers
        })
        .then(response => { 
            let temp_data = response.data;
            let color_choice = ["#D7732E", "#6600CC", "#898081", "#A5730E", "#92221D"];
            let music_list = {};

            if(temp_data != null){
                if(temp_data.length > 0){
                    temp_data.forEach((element, index) => {
                        music_list = {
                            id: element.post.id, 
                            artist: "jgeez",
                            name: element.post.title,
                            img: element.post.audio.album_art,
                            playcount: element.post.view_count,
                            color: color_choice[Math.floor(Math.random() * color_choice.length)],
                            url: element.post.audio.post_url,
                        };

                        commit("update_in_single", {
                            index: index,
                            data: music_list
                        });
                    });
                }
            }
        })
        .catch(error => {
            currentScope.fetch_music(token);
            if(error.response.status == 401){
                if(login.state.isLoggedIn == true){
                    alert("Kindly login to continue");
                    window.localStorage.clear();
                    setTimeout(() => {
                        location.reload();
                    }, 100);
                }
            } 
        });
    },
}

const mutations = {
    update_music_data: function(state, new_music_data){
        if(Object.keys(new_music_data).length > 0){
            Vue.set(state, "music_data", new_music_data)
        }
    },
    update_in_single: function(state, new_music_data){
        if(Object.keys(new_music_data).length > 0){
            Vue.set(state.music_data, new_music_data.index, new_music_data.data);
        }
    }
};

export default {
	state, getters, actions, mutations
}