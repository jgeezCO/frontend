<template>
    <div class="comment">
        <h4 class="noSpace">Comments &nbsp; {{this.comment_size()}}</h4>
        
        <br>
        
        <form method="post" action="" @submit="addComment">
            <div class="control-style" style="padding:5px;">
                <input type="text" v-model="userComment" class="flatinput poppins" placeholder="Comments">
            </div>
        </form>
        
        <br>
        
        <div style="padding:0px;margin:0px;margin-left:-10px;" class="loading-placeholder" v-if="comment_loading == true">
            <Placeholder />
            <div class="clear"></div>
        </div>

        <div class="creader_wrapper" v-if="comment_loading == false">
            <div class="creader" v-for="comment in comments" :key="comment.id">
                <CommentReader 
                    :reader="comment" 
                />
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import CommentReader from "./CommentReader.vue";
    import axios from 'axios';
    import {mapActions} from "vuex";
    import Placeholder from '../../../../components/public/Placeholder.vue';
    

    export default {
        name: "Comment",
        props: [
            "comment_id"
        ],
        components: {
            CommentReader, Placeholder
        },
        data: function(){
            return {
                comment_loading: true,
                userComment: "",
                comments: []
            }
        },
        methods: {
            ...mapActions(["get_user_profile"]),
            comment_size: function(){
                return this.comments.length;
            },
            addComment: function(event){
                event.preventDefault();
                if(this.userComment.trim().length > 0){
                    const newComment = {
                        id: uuid.v1(),
                        user: {
                            avatar: this.$store.getters.getProfile.avatar,
                            name: this.$store.getters.getProfile.name
                        },
                        data:{
                            comment: this.userComment,
                            time: "now",
                            favorite:false,
                            fview:"0"
                        }
                    }

                    this.comments.unshift(newComment);
                    this.userComment = "";

                    this.handleUploadComment(this.comment_id, newComment.data.comment);
                }
            },
            handleUploadComment(post_id, newComment){
                let form_data = new FormData();
                
                form_data.append("post_id", post_id);
                form_data.append("text", newComment);

                axios({
                    method: 'POST',
                    url: 'https://api.jgeez.co/api/post/comment/add/' + post_id + "/",
                    withCredentials: true,
                    data:  {
                        post_id: post_id,
                        text: newComment + ""
                    },
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + this.$store.getters.getProfile.token
                    }
                })
                .then(response => { 
                    console.log(response)
                })
            }
        },
        mounted(){
            let post_id = this.comment_id;
            let token = this.$store.getters.getProfile.token;
            let currentScope = this;
        
            axios({
                method: 'GET',
                url: 'https://api.jgeez.co/api/post/comment/' + post_id,
                withCredentials: true,
                data:  null,
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => { 
                let temp_data = response.data;
                if(temp_data != null && temp_data.length > 0){
                    temp_data.forEach(function(cdata){

                        currentScope.get_user_profile({token, id: cdata.author_id});
                        let user_profile =  currentScope.$store.getters.externalProfile;

                        let user_profile_pics = user_profile.profile.profile_picture;

                        let favorite = cdata.favorite != undefined 
                            ? cdata.favorite 
                            : false;
                        let favorite_count = cdata.favorite_count != undefined 
                            ? cdata.favorite_count 
                            : 0;

                        currentScope.comments.push({
                            id: cdata.id,
                            user: {
                                avatar: user_profile_pics != null && user_profile_pics.length > 0 
                                    ? user_profile_pics
                                    : "/static/svg/avatar.svg",
                                name: user_profile.username
                            },
                            data:{
                                comment: cdata.text,
                                time: "4 mins ago",
                                favorite: favorite,
                                fview:favorite_count
                            }
                        })
                        
                        currentScope.comment_loading = false;
                    })
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>