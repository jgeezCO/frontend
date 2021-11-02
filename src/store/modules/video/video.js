import axios from "axios";
import login from "../login";

const state = {
    video_data: []
}

const getters = {
    get_videos: (state) => state.video_data,
}

const actions = {
    async fetch_video({commit}, token, type){
        let video_data = [];

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
                ? 'https://api.jgeez.co/api/post/video/get/' 
                : 'https://api.jgeez.co/api/post/video/',
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
                    temp_data.forEach(element => {
                        profile_url = element.post.author.profile.profile_picture;
                        
                        video_data.push({
                            id: element.post.id, 
                            artist: "jgeez",
                            title: element.post.title,
                            desc: element.post.text,
                            img: element.post.video.album_art,
                            views: element.post.view_count,
                            url: element.post.video.post_url,
                            time: element.post.created,
                            vtime_frame:  element.post.video.content_length,
                            slug: "view/" + element.post.id,
                            user: {
                                avatar: profile_url != null && profile_url.length > 0 ? profile_url : "/static/svg/avatar.svg",
                                name: element.post.author.username,
                                verified: element.post.author.profile.is_verified
                            }
                        });
                    });
                    commit("update_video_data", video_data);
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
    },
}

const mutations = {
    update_video_data: function(state, new_video_data){
        if(Object.keys(new_video_data).length > 0){
            state.video_data = new_video_data;
        }
    },
};

export default {
	state, getters, actions, mutations
}