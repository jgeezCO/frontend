<template>
    <div class="view-video container">
        <br>

        <div class="loading-placeholder" v-if="loading == true">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <div class="clear"></div>
        </div>
        
        <div class="container_padding" style="width:95%" v-if="loading == false">
            <div class="left view_stand">
                <div id="video_js_holder">
                    <vue-core-video-player 
                        :cover="video_data.video_poster" 
                        :src="video_data.video_url" 
                        :title="video_props.title" 
                        :auto="false" 
                        :autoplay="false" 
                    >
                    </vue-core-video-player>
                </div>

               <VideoReaction :attr="video_props" />
                
                <br>

                <Subscribe :attr="subscribe" />
                
                <br class="desktop-only">
                
                <div class="mobile-only">
                    <Comment v-if="is_mobile == true"/>
                    <br><br><br><br><br><br>
                </div>

                <SuggestedVideos limit="10" />
            </div>
        
            <div class="right comment_side">
                <Comment 
                    v-if="is_mobile == false" 
                    :comment_id="video_props.id" 
                />
            </div>
            
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import VideoReaction from "./components/VideoReaction.vue";
    import Subscribe from "./components/Subscribe.vue";
    import SuggestedVideos from "./components/SuggestedVideo.vue";
    import Comment from "./components/Comment.vue";
    import Placeholder from '../../../components/public/Placeholder.vue';
    import moment from "moment";

    export default {
        name: 'VideoView',
        props: {
            options: {
                type: Object,
                default() {
                    return {};
                }
            },
            slug: {
                type: [Number, String],
                default: 0
            }
        },
        components: {
            VideoReaction, SuggestedVideos, Comment,
            Placeholder, Subscribe
        },
        data() {
            return {
                loading: true,
                is_mobile: true,
                video_data: {
                    video_url: "",
                    video_poster: "",
                    video_comment: [],
                    video_like: 0,
                    video_unlike: 0
                },
                video_props: {
                    id: 0,
                    title: "",
                    views: "",
                    date: ""
                },
                subscribe: {
                    id: 1,
                    title: "The Aqua band",
                    avatar: "/static/uploads/img/100/v1.png"
                },
            }
        },
        methods: {
            loadSelectedVideo: function(){
                let user_token = this.$store.getters.getProfile.token;
                let slug_id = this.$route.params.slug;
                let currentScope = this;

                axios({
                    method: 'GET',
                    url: 'https://api.jgeez.co/api/post/video/get/' + slug_id,
                    withCredentials: true,
                    data:  null,
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'content-type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + user_token
                    }
                }).then(response => {
                    if(response.status == 200){
                        let rd = response.data;
                        
                        currentScope.video_data.video_url = rd.video.post_url;
                        currentScope.video_data.video_poster = rd.video.album_art;
                        
                        currentScope.video_props.id =  rd.id;
                        currentScope.video_props.title =  rd.title;
                        currentScope.video_props.views = rd.view_count;
                        currentScope.video_data.video_like = rd.likes;

                        currentScope.video_data.video_unlike = rd.unlikes != undefined 
                            ? rd.unlikes
                            : 0;
                        
                        let date_obj = new Date(rd.created).toISOString();
                        let dstring = moment(date_obj).format("YYYY MMM Do");

                        let dateSplit = dstring.split(" ");

                        let year = dateSplit[0];
                        let month = dateSplit[1];
                        let day = dateSplit[2];

                        let date_str = month  + " " + day + " " + year;
                        
                        currentScope.video_props.date =  date_str;

                        currentScope.loading = false;
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted: function(){
            this.is_mobile = window.is_mobile();
        },

        created(){
            this.loadSelectedVideo();
        }
    }
</script>

<style>
    video{
        width: 100% !important;
        
    }
    .vcard{
        width: 219.2px;
    }
    @media screen and (max-width: 900px){
        .vjs-big-play-button{
            position: absolute !important;
            margin-bottom: 20px !important;;
        }
        .video-js{
            height: 200px !important;
            max-height: 200px !important;
        }
        #video_js_holder{
            height: 200px !important;
            max-height: 200px !important;
        }
    }
</style>