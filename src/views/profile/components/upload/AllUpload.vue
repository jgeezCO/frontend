<template>
    <div>
        <Display 
            v-if="short_videos.data.length == 0 && videos_list.data.length == 0 
            && music_list.data.length == 0 && gist_list.data.length == 0"
            img="static/assets/img/upload.png" 
            text="UPLOAD CONTENT TO GET STARTED" 
            desc="Start sharing videos, music, gists and more. Get expression here!"
        />

        <div class="clear">
            <div class="short_video_container" >
                <h4 class="clear"><br><br> {{short_videos.title}}</h4>
                <hooper :itemsToShow="slider_items_to_show" pagination="no">
                    <slide v-for="(short, indx) in short_videos.data" :key="indx" :index="indx">
                        <ShortCard :card="short"/>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
                <div class="clear"></div>
            </div>

            <br><br><br><br><br><br>

            <div class="loading-placeholder" v-if="music_loading == true">
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <div class="clear"></div>
            </div>

            <div class="all_upload_container" v-if="music_loading == false">
                <h4 class="clear"><br><br> {{videos_list.title}}</h4>
                <div v-for="video in videos_list.data" :key="video.id">
                    <VideoCard 
                        :card="video" 
                        :profile="true" 
                    />
                </div>
                
                <h4 class="clear"><br><br> {{music_list.title}}</h4>
                
                <div class="music_wrapper">
                    <div v-for="music in music_list.data" :key="music.id">
                        <MusicCard :card="music" :profile="true" />
                    </div>
                </div>
                
                <h4 class="clear"><br><br> {{gist_list.title}}</h4>
                <div v-for="gist in gist_list.data" :key="gist.id">
                    <GistCard :gist="gist"/>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import { 
        Hooper, Slide, 
        Navigation as HooperNavigation 
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    import uuid from "uuid";
    import MusicCard from "../../../music/components/MusicCard.vue";
    import GistCard from "../../../gist/components/GistCard.vue";
    import ShortCard from "../../../video/components/ShortCard.vue";
    import VideoCard from "../../../video/components/VideoCard.vue";
    import Display from "./components/Display.vue";
    import Placeholder from '../../../../components/public/Placeholder.vue';
    
    export default {
        name: "AllUpload",
        components: {
            Display, GistCard, MusicCard, ShortCard, VideoCard,
            Hooper, Slide, HooperNavigation,
            Placeholder
        },
        data: function(){
            return {
                music_loading: true,
                slider_items_to_show: 5,
                short_videos: {
                    tag: "shorts",
                    title: "Shorts",
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
                videos_list: {
                    tag: "videos",
                    title: "My Videos",
                    data: []
                },
                music_list: {
                    tag: "music",
                    title: "My Music",
                    data: []
                },
                gist_list: {
                    tag: "gist",
                    title: "My Gist",
                    data: []
                }
            }
        },
        computed: {
            ...mapGetters(["get_music", "get_videos", "get_gist"])
        },
        methods: {
            ...mapActions(["fetch_music", "fetch_video", "fetch_gist"]),
            loadContents: function(){
                let user_token = this.$store.getters.getProfile.token;
                if(user_token != null && user_token.length > 0){
                    this.fetch_music(user_token);
                    this.music_list.data = this.get_music;

                    this.fetch_video({
                        token: user_token, 
                        type: null,
                        exclude: null
                    });
                    this.videos_list.data = this.get_videos;

                    this.fetch_gist(user_token);
                    this.gist_list.data = this.get_gist;
                }
                setTimeout(() => {
                    this.music_loading = false;
                }, 1000);
            }
        },
        created(){
            this.slider_items_to_show = window.is_mobile() == true ? 2 : 5;
            this.loadContents();
        }
    }
</script>