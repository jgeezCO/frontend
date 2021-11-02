<template>
    <div v-if="is_player_active == true" class="music-player" ref="music_player" :style="'left: ' + left_position + ';top: ' + top_position">
        <div class="left exclude">
            <h3 class="noSpace">{{title}}</h3>
            <p class="noSpace" style="font-size:12px;color:white;">{{artist}}</p>
        </div>
        <div class="player_control">
            <center class="right exclude">
                <div class="left exclude">
                     <img src="/static/svg/music-headset.svg" style="margin-right:20px;"> 
                </div>
               
                <div class="playing right exclude">
                     <a href="#" @click.prevent="playMusic" class="play_btn" style="color: white;">
                        <span class="fa " :class="is_pause == false ? 'fa-play' : 'fa-pause'"></span>
                    </a>
                </div>  
                
                <div class="left"></div>
            </center>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: "MusicPlayer",
        props: ["playlist", "title", "artist", "play_path"],
        data(){
            return {
                duration: "0.0",
                recorded_count: false,
                audio: null,
                is_pause: false,
                left_position: "65%",
                top_position: "500px",
                is_mounted: false
            }
        },
        computed: {
            is_player_active: function(){
                let is_active = this.$store.getters.player_is_active;

                // if(is_active == true && this.audio != null){
                //     this.playMusic();
                // }

                return is_active;
            }
        },
        methods: {
            playMusic: function(){
                if(this.audio == null){
                    this.audio = new Audio();
                    this.audio.src = this.play_path
                }
                
                this.is_pause = !this.is_pause;

                if(this.is_pause == true){
                    this.audio.play();
                } else {
                    this.audio.pause();
                }

                this.audio.addEventListener("ended", function(){
                    this.is_pause = false;
                });
            },
            storePlay: function(){
                if(this.recorded_count == false){
                    this.recordMusicPlay();
                    this.recorded_count = true;
                }
            },
            recordMusicPlay: function(){
                let currentScope = this;

                axios({
                    method: 'post',
                    url: "#",
                    withCredentials: true,
                    data:  {
                        music_url: this.play_path
                    },
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'content-type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + currentScope.$store.getters.getProfile.token
                    }
                })
                .then(response => { 
                    if(response.status == 200){
                        currentScope.recorded_count = true
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            },
            player_position: function(){
                let is_mobile = window.is_mobile();

                if(is_mobile == false){
                    let player_width = this.$refs.music_player.clientWidth;
                    let player_height = this.$refs.music_player.clientHeight;

                    let window_width = window.innerWidth;
                    let window_height = window.innerHeight;
                    
                    let differenceWidth = window_width - player_width;
                    let differenceHeight = window_height - player_height;
                    
                    if(this.is_mounted == false){
                        this.left_position = differenceWidth + "px";
                        this.top_position = (differenceHeight) + "px";
                    }

                    this.is_mounted = true;

                } else {
                    this.left_position = "0px";

                    let player_height = this.$refs.music_player.clientHeight;
                    let window_height = window.innerHeight;

                    let differenceHeight = window_height - player_height;

                    this.top_position = (differenceHeight - 105) + "px";
                }
            }
        },
        watch: {
            play_path: {
                immediate: true, 
                handler(){
                    if(this.audio != null){
                        this.audio.pause();
                        this.audio.currentTime = 0;

                        this.audio.src = this.play_path;
                        this.is_pause = false;

                        setTimeout(() => {
                            this.audio.play();
                            this.is_pause = true;
                        }, 100);
                    }
                }
            },
            is_player_active(is_active){
                if(is_active == true){
                    this.player_position();
                }
            }
        },
        mounted(){
            this.player_position();
        }
    }
</script>

<style>
    .music-player{
        width: 30%;
        background-color: #000000;
        border: 0.1px solid rgba(250,250,250,0.1);
        border-top: 5px solid #3d3d3d;
        position: fixed;
        z-index: 99999999;
        color: white;
        padding: 20px;
    }
    .playing{
        width: 50px;
        height: 50px;
        background-color: #a5730e;
        color: white;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 360px;
        margin-right: 20px;
    }
    .play_btn{
        margin: 10px 0px;
        font-size: 20px;
    }
    @media screen and (max-width: 900px) {
        .music-player{
            width: 95%;
        }
    }
</style>