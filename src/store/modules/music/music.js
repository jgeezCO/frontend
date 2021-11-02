import axios from "axios";
import login from "../login";

const state = {
    music_data: []
}

const getters = {
    get_music: (state) => state.music_data,
}

const actions = {
    async fetch_music({commit}, token){
        let music_data = [];
        
        let headers = {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'content-type': 'multipart/form-data'
        };

        if(token != null){
            headers["Authorization"] = 'Bearer ' + token;
        }

        await axios({
            method: 'GET',
            url: token != null 
                ? 'https://api.jgeez.co/api/post/audio/get/' 
                : 'https://api.jgeez.co/api/post/audio/',
            withCredentials: true,
            data:  null,
            headers: headers
        })
        .then(response => { 
            let temp_data = response.data;
            let color_choice = ["#D7732E", "#6600CC", "#898081", "#A5730E", "#92221D"];

            if(temp_data != null){
                if(temp_data.length > 0){
                    temp_data.forEach(element => {
                        music_data.push({
                            id: element.post.id, 
                            artist: "jgeez",
                            name: element.post.title,
                            img: element.post.audio.album_art,
                            playcount: element.post.view_count,
                            color: color_choice[Math.floor(Math.random() * color_choice.length)],
                            url: element.post.audio.post_url,
                        });
                    });
                    commit("update_music_data", music_data);
                }
            }
        }).catch(error => {
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
            state.music_data = new_music_data;
        }
    },
    
};

export default {
	state, getters, actions, mutations
}