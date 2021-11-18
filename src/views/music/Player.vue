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
                        <span v-if="loading == false"> <span class="fa " :class="is_pause == false ? 'fa-play' : 'fa-pause'"></span> </span>
                        <img v-if="loading == true" :src="play_icon" style="width: 50px;margin-top:-10px;">
                    </a>
                </div>  
                
                <div class="left"></div>
            </center>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicPlayer",
        props: ["playlist", "title", "artist", "play_path"],
        data(){
            return {
                player_mounted: 0,
                loading: false,
                duration: "0.0",
                recorded_count: false,
                audio: null,
                is_pause: false,
                left_position: "65%",
                top_position: "500px",
                is_mounted: false,
                play_icon: "/static/svg/music_loading.svg"
            }
        },
        computed: {
            is_player_active: function(){
                let is_active = this.$store.getters.player_is_active;
                return is_active;
            }
        },
        methods: {
            playMusic: function(){
                let currentScope = this;
                this.loading = true;

                if(this.audio == null){
                    this.audio = new Audio();
                    this.audio.src = this.play_path;
                }
                
                if(this.audio != null){
                    this.is_pause = !this.is_pause;
                }

                if(this.is_pause == true && this.audio != null){
                    this.loading = false;
                    this.audio.play();
                } else {
                    if(this.audio != null){
                        this.loading = false;
                        this.audio.pause();
                    }
                }
                
                this.audio.addEventListener("waiting", function () {
                    currentScope.loading = true;
                }, false);

                this.audio.addEventListener("canplay", function () {
                    currentScope.loading = false;
                }, false);

                this.audio.addEventListener("ended", function(){
                    currentScope.loading = false;
                    currentScope.is_pause = false;
                });

                
            },
            player_position: function(){
                let is_mobile = window.is_mobile();
                
                if(is_mobile == false){
                    if(this.is_player_active == true){
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
                    }
                } else {
                    if(this.is_player_active == true){
                        this.left_position = "0px";
                        
                        let player_height = this.$refs.music_player.clientHeight;
                        let window_height = window.innerHeight;

                        let differenceHeight = window_height - player_height;

                        this.top_position = (differenceHeight - 105) + "px";
                    }
                }

                this.player_mounted++;
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
                    } else {
                        if(this.player_mounted == 1){
                            this.playMusic();
                        }
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

<style scoped>
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