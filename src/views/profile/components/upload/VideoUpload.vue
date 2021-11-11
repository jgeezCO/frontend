<template>
    <div>
        <Display 
            v-if="short_videos.data.length == 0 && videos_list.data.length == 0" 
            img="static/assets/img/upload.png" 
            text="UPLOAD CONTENT TO GET STARTED" 
            desc="Start sharing videos, music, gists and more. Get expression here!"
        />

        <h4><br><br> {{short_videos.title}}</h4>
        <hooper :itemsToShow="slider_items_to_show" pagination="no">
            <slide v-for="(short, indx) in short_videos.data" :key="indx" :index="indx">
                <ShortCard :card="short"/>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>

        <div class="clear"></div>
        <br><br><br><br><br><br>
        
        <div class="loading-placeholder" v-if="video_loading == true">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <div class="clear"></div>
        </div>

        <div class="video_content_holder" v-if="video_loading == false">
            <h4><br><br> {{videos_list.title}}</h4>
            <div v-for="video in videos_list.data" :key="video.id">
                <VideoCard :card="video"/>
            </div>

            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import { 
        Hooper, Slide, 
        Navigation as HooperNavigation 
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    import uuid from "uuid";
    import Display from "./components/Display.vue";
    import ShortCard from "../../../video/components/ShortCard.vue";
    import VideoCard from "../../../video/components/VideoCard.vue";
    import Placeholder from '../../../../components/public/Placeholder.vue';
    
    export default {
        name: "VideoUpload",
        components: {
            Display, ShortCard, VideoCard,
            Hooper, Slide, HooperNavigation,
            Placeholder
        },
        data: function(){
            return {
                video_loading: true,
                slider_items_to_show: 5,
                short_videos: {
                    tag: "shorts",
                    title: "My Shorts",
                    data: [
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/100/v3.png",
                            time: "3 days ago",
                            title: "Bryan nolli - Salvation ft. The nation",
                            user: {
                                name: "Brian Nolli",
                                avatar: "static/uploads/img/100/avatar.png",
                                verified: true,
                                view: "2.1m"
                            }
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/100/v2.png",
                            time: "3 days ago",
                            title: "Bryan nolli - Salvation ft. The nation",
                            user: {
                                name: "Brian Nolli",
                                avatar: "static/uploads/img/100/avatar.png",
                                verified: true,
                                view: "2.1m"
                            }
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/100/v1.png",
                            time: "3 days ago",
                            title: "Bryan nolli - Salvation ft. The nation",
                            user: {
                                name: "Brian Nolli",
                                avatar: "static/uploads/img/100/avatar.png",
                                verified: true,
                                view: "2.1m"
                            }
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/100/v4.png",
                            time: "3 days ago",
                            title: "Bryan nolli - Salvation ft. The nation",
                            user: {
                                name: "Brian Nolli",
                                avatar: "static/uploads/img/100/avatar.png",
                                verified: true,
                                view: "2.1m"
                            }
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/100/v2.png",
                            time: "3 days ago",
                            title: "Bryan nolli - Salvation ft. The nation",
                            user: {
                                name: "Brian Nolli",
                                avatar: "static/uploads/img/100/avatar.png",
                                verified: true,
                                view: "2.1m"
                            }
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/100/v3.png",
                            time: "3 days ago",
                            title: "Bryan nolli - Salvation ft. The nation",
                            user: {
                                name: "Brian Nolli",
                                avatar: "static/uploads/img/100/avatar.png",
                                verified: true,
                                view: "2.1m"
                            }
                        }
                        
                    ]
                },
                videos_list:{
                    tag: "videos",
                    title: "My Videos",
                    data: []
                }
            }
        },
        methods: {
            ...mapActions(["fetch_video"]),
            loadVideos: function(){
                this.video_loading = true;
                let user_token = this.$store.getters.getProfile.token;
                if(user_token != null && user_token.length > 0){
                    this.fetch_video(user_token);
                    this.videos_list.data = this.$store.getters.get_videos;
                }
                setTimeout(() => {
                    this.video_loading = false;
                }, 1000);
            }
        },
        created(){
            this.loadVideos();
            this.slider_items_to_show = window.is_mobile() == true ? 2 : 5
        }
    }
</script>
