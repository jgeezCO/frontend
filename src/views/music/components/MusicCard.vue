<template>
    <div class="trend_card bimg left exclude rubik" :style="'background-image: url(' + card.img + ')'">
        <div class="right exclude" style="width: 10%;margin-top:-10px;">
            <CardActions 
                :id="card.id" 
                :vtitle="card.name" 
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

        <div class="trend_count">
            <h4 class="rubik trend_title">
                {{card.name}}
            </h4>

            <div class="left exclude">
                <a href="#" @click.prevent="handlePlay" style="color:white;">
                    <div class="pcount rubik" :style="'background-color:' + card.color">
                        <img src="static/svg/play.svg" style="width:13px;"> <span class="rubik" style="font-size:12px;">{{play_counter}}</span>
                    </div>
                </a>
            </div>

            <div class="right exclude">
                <div class="cat_download">
                    <a :href="this.card.url">
                        <img src="static/svg/download.svg" class="svg-download" :style="'width:10px;height:10px;background-color:' + card.color">
                    </a>
                </div>
            </div> <div class="clear"></div>
        </div> 
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import CardActions from '../../video/components/CardActions.vue'

    export default {
        name: "MusicCard",
        props: {
            card: {
                type: Object
            }
        },
        components: {
            CardActions
        },
        data(){
            return{
                record_count: false,
                play_counter: this.card.playcount
            }
        },
        methods: {
            ...mapActions(["set_music_params"]),
            handlePlay: function(){
                let music_object = {
                    music_url: this.card.url,
                    music_artist: this.card.artist,
                    music_name: this.card.name
                };
                
                this.set_music_params(music_object);
                
                if(this.record_count == false){
                    this.play_counter = this.play_counter++;
                    this.record_count = true;
                }
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