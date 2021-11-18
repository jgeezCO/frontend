<template>
    <div class="music_card_container">
        <div ref="trend_card" class="trend_card bimg left exclude rubik" :style="'background-image: url(' + card.img + ')'">
            <div class="right exclude" style="width: 10%;margin-top:-10px;">
                <CardActions 
                    :id="card.id" 
                    :vtitle="card.name" 
                    :profile="profile" 
                    type="music" 
                    v-on:video_edit="$emit('music_edit', card.id, edit_data)" 
                    v-on:delete_id="$emit('delete_id', card.id)" 
                />
            </div>

            <div class="media_control right">
                <div class="category_icon">
                    <img :src="card.icon" style="width:15px;">
                </div>
            </div> <div class="clear"></div>

            <div 
                class="trend_count" 
                :style="tcstyle.length > 0 ? tcstyle : ''" 
                ref="trend_count" 
            >
                <h4 class="rubik trend_title" @click.prevent="handlePlay" style="cursor:pointer">
                    {{card.name}}
                </h4>

                <div class="left exclude">
                    <a href="#" @click.prevent="handlePlay" style="color:white;">
                        <div class="pcount rubik" :style="'background-color:' + card.color">
                            <img src="static/svg/play.svg" style="width:13px;"> 
                            <span class="rubik" style="font-size:12px;">{{play_counter}}</span>
                        </div>
                    </a>
                </div>
                
                <div class="right exclude">
                    <div class="cat_download">
                        <a href="#" @click.prevent="downloadMusic">
                            <img src="static/svg/download.svg" class="svg-download" :style="'width:10px;height:10px;background-color:' + card.color">
                        </a>
                    </div>
                </div> <div class="clear"></div>
            </div> 
        </div> 
        
        <Dialog 
            :title="dialog_data.title" 
            v-if="vdialog == true" 
            v-on:closeDialog="onCloseAuthorized">   

            <Display 
                :img="dialog_data.display.img" 
                :reduceSize="true"
                :text="dialog_data.display.text"  
                :desc="dialog_data.display.desc" 
                :button="false" 
            />
        </Dialog>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import Dialog from '../../../modal/Dialog.vue';
    import Display from '../../profile/components/upload/components/Display.vue';
    import CardActions from '../../video/components/CardActions.vue'
             
    export default {
        name: "MusicCard",
        props: {
            card: Object, 
            profile: {
                type: Boolean,
                default: false
            }
        },
        components: {
            CardActions, Dialog, Display
        },
        data(){
            return{
                vdialog: false,
                record_count: false,
                play_counter: this.card.playcount,
                tcstyle: "",
                dialog_data: {
                    title: "Unauthorized: Sign In",
                    display: {
                        img: "/static/assets/img/authorized.jpg",
                        text: "LOGIN TO STREAM",
                        desc: "Sign in / Sign up to stream. Start sharing videos, music, gists and more"
                    }
                }
            }
        },
        methods: {
            ...mapActions(["set_music_params"]),
            handlePlay: function(){
                if(this.card.url != null && this.card.url.length > 0){
                    let music_object = {
                        music_url: this.card.url,
                        music_artist: this.card.artist,
                        music_name: this.card.name
                    };
                    
                    this.set_music_params(music_object);
                    
                    if(this.record_count == false){
                        this.play_counter = this.play_counter + 1;
                        this.record_count = true;
                    }
                } else {
                    this.showAuthorization();
                }
            },
            remove_pixel: function(style){
                if(style.length > 0){
                    return style.replace("px", "").trim();
                }
                return style;
            },
            showAuthorization: function(){
                this.dialog_data.title = "Unauthorized: Sign In";
                this.dialog_data.display.img = "/static/assets/img/authorized.jpg";
                this.dialog_data.display.text = "LOGIN TO STREAM";
                this.dialog_data.display.desc = "Sign in / Sign up to stream. Start sharing videos, music, gists and more";
                
                this.onCloseAuthorized("open");
            },
            downloadMusic: function(){
                this.dialog_data.title = "Download Mobile App";
                this.dialog_data.display.img = "/static/svg/mdownload.svg";
                this.dialog_data.display.text = "NOT SUPPORTED ON BROWSER";
                this.dialog_data.display.desc = "This feature is only available on Jgeez app. Start sharing musics, video, gist and more";

                this.onCloseAuthorized("open");
            },
            onCloseAuthorized:  function(type){
                this.vdialog = type == "open" ? true : false;
            }
        },
        mounted(){
            let trend_card = this.$refs.trend_card.clientHeight;

            let trend_count = window.getComputedStyle(this.$refs.trend_count);
            let tc_margin = this.remove_pixel(trend_count.marginTop);

            let mtl = this.card.name.length - 5;
            let computed_margin = (tc_margin - mtl) + "px";

            if(trend_card <= 100){
                this.tcstyle = "margin-top:" + computed_margin + " !important;";
            }
        }
    }
</script>

<style scoped>
    .menu_icon_option{
        color: black !important;
        background-color: white;
        text-align: right;
        border-radius: 360px;
        padding: 0px 7px;
        margin: 2px 5px;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    }
    .menu_icon_option span{
        display: inline-block;
        position:relative;
        top:-3px;
    }
</style>