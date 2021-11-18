import axios from "axios";
import Vue from "vue";
import login from "../login";

const state = {
    gist_data: []
}

const getters = {
    get_gist: (state) => state.gist_data,
}

const actions = {
    async fetch_gist({commit}, token, type){
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
                ? 'https://api.jgeez.co/api/post/gist/get/' 
                : 'https://api.jgeez.co/api/post/gist/get/',
            withCredentials: true,
            data:  {
                type: type
            },
            headers: headers
        })
        .then(response => { 
            let temp_data = response.data;
            let profile_url = "";

            if(temp_data != null){
                if(temp_data.length > 0){
                    let gist_list = {};

                    temp_data.forEach((element, index) => {
                        profile_url = element.post.author.profile.profile_picture;
                        gist_list = {
                            id: element.post.id, 
                            img: "/static/uploads/img/80/g1.png",
                            title: element.post.title,
                            desc: element.post.text,
                            view: element.post.view_count,
                            fav: element.post.likes,
                            owner: element.post.author.username,
                            comment: element.comments.length,
                            url: "view/" + element.post.id,
                            user: {
                                avatar: profile_url != null && profile_url.length > 0 ? profile_url : "/static/svg/avatar.svg",
                                name: element.post.author.username,
                                verified: element.post.author.profile.is_verified
                            }
                        };
                        
                        commit("update_single_gist_data", {
                            index: index,
                            data: gist_list
                        });
                    });
                }
            }
        }).catch(error => {
            if(error != null && error.response != undefined){
                if(error.response.status == 401){
                    if(login.state.isLoggedIn == true){
                        alert("Kindly login to continue");
                        window.localStorage.clear();
                        setTimeout(() => {
                            location.reload();
                        }, 100);
                    }
                }
            }
        });
    }
}

const mutations = {
    update_gist_data: function(state, new_gist_data){
        if(Object.keys(new_gist_data).length > 0){
            state.gist_data = new_gist_data;
        }
    },
    update_single_gist_data: function(state, new_gist_data){
        if(Object.keys(new_gist_data).length > 0){
            Vue.set(state.gist_data, new_gist_data.index, new_gist_data.data);
        }
    },
};

export default {
	state, getters, actions, mutations
}