<template>
    <div class="home">
        <div class="home_slider">
            <Slider />
        </div>
        
        <br><br><br class="desktop-only"><br class="desktop-only"><br class="desktop-only">
        <div class="app-background-image" style="background-image:url(static/svg/triangle.svg) !important;">
            <div class="remove_padding_on_mobile container_padding">
                <Category />
                <div class="clear"></div>
            </div>
            
            <div class="clear demarcator"></div>

            <div class="app-body-content">
                <div class="square-container" v-bind:key="trend.id" v-for="trend in trends">
                    <div class="trend_body">
                        <h3 class="poppins left exclude" style="font-weight:bold;color:white;font-weight:normal !important">
                            {{trend.headline}}
                        </h3> 
                        <div class="right exclude">
                            <a href="#" class="montserrat" style="color: rgba(255, 255, 255, 0.5);">
                                <h4 class="noSpace">more <img src="static/svg/extend-right.svg" style="width:30px;position:relative;top:10px;left:-8px;"></h4>
                            </a>
                        </div>

                        <div class="clear"></div>
                        
                        <div class="loading-placeholder" v-if="music_loading == true">
                            <Placeholder />
                            <Placeholder />
                            <Placeholder />
                            <div class="clear"></div>
                        </div>
                        
                        <div class="music_card_container_player" v-if="music_loading == false">
                            <div class="square-card" v-bind:key="trend_card.id" v-for="trend_card in trend.data">
                                <div v-if="trend.type == 'audio'">
                                    <MusicCard :card="trend_card"/>
                                </div>
                                <div v-if="trend.type == 'video'">
                                    <VideoCard :card="trend_card"/>
                                </div>
                            </div> <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="app-body-content" style="background-image: url(static/svg/dots.svg) !important;">
            <Gist mainGist=false moreGistTitle="Latest Gist" />

            <Follower />
        </div>
        
        <div class="demarcator"></div>

        <div class="app-body-content">
            <h3 style="color:white" class="poppins">
                Top Radio Stations &nbsp;
                <!-- <img src="static/svg/radio.svg" style="width:30px;position:relative;top:8px;"> -->
            </h3>
            
            <div v-for="radio in radios" :key="radio.id">
                <RadioCard :radio_frequency="radio"/>
            </div>

            <div class="clear"></div>
        </div>
    </div>
</template>

<script>

    import {mapActions} from "vuex";
    import uuid from "uuid";
    import Category from "../../components/public/Category.vue"
    import MusicCard from "../music/components/MusicCard.vue";
    import Gist from "../gist/Gist.vue";
    import Follower from "../followers/Follower.vue";
    import RadioCard from "../radio/components/RadioCard.vue";
    import Slider from "../../components/public/Slider.vue";
    import Placeholder from '../../components/public/Placeholder.vue';
    import VideoCard from '../video/components/VideoCard.vue';
   
    export default {
        name: 'Home',
        components: {
            Category, MusicCard, Gist, Follower, RadioCard,
            Slider, Placeholder, VideoCard
        },
        data: function(){
            return {
                music_loading: true,
                trends:[
                    {
                        id: uuid.v1(),
                        type: "audio",
                        headline: "Latest Music",
                        icon: "static/svg/music_list.svg",
                        data: []
                    },
                    {
                        id: uuid.v1(),
                        type: "video",
                        headline: "Latest Videos",
                        icon: "static/svg/video_list.svg",
                        data:[]
                    }
                ],
                radios: [
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    }
                ]
            }
        },
        methods: {
            ...mapActions(["fetch_music", "fetch_video"]),
            loadMusic: function(){
                this.fetch_music(null);
                this.fetch_video({
                    token: null, 
                    type: null,
                    exclude: this.exclude
                });
                
                this.trends[0].data = this.$store.getters.get_music;
                this.trends[1].data = this.$store.getters.get_videos;

                setTimeout(() => {
                    this.music_loading = false;
                }, 1000);
            }
        },
        created(){
            this.loadMusic();
        }
        
    }
</script>