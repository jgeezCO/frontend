<template>
    <div class="music_upload">
        <div class="loading-placeholder" v-if="music_loading == true">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <div class="clear"></div>
        </div>
        
        <div v-if="music_loading == false">
            <Display 
                v-if="uploads.length == 0" 
                img="static/assets/img/upload.png" 
                text="UPLOAD CONTENT TO GET STARTED" 
                desc="Start sharing videos, music, gists and more. Get expression here!"
            />
            
            <div v-for="upload in uploads" :key="upload.tag">
                <div class="clear">
                    <h4><br><br> {{upload.title}}</h4>
                    <div v-for="upload_data in upload.data" :key="upload_data.id">
                        <MusicCard 
                            v-if="upload.tag == 'music'" 
                            :card="upload_data" 
                            :profile="true" 
                        />
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import Display from "./components/Display.vue";
    import MusicCard from "../../../music/components/MusicCard.vue";
    import Placeholder from '../../../../components/public/Placeholder.vue';
    
    export default {
        name: "MusicUpload",
        components: {
            Display, MusicCard, Placeholder
        },
        data: function(){
            return {
                music_loading: true,
                uploads: [
                    {
                        tag: "music",
                        title: "My Music",
                        data: []
                    }
                ]
            }
        },
        methods: {
            ...mapActions(["fetch_music"]),
            loadMusic: function(){
                let user_token = this.$store.getters.getProfile.token;
                if(user_token != null && user_token.length > 0){
                    this.fetch_music(user_token);
                    this.uploads[0].data = this.$store.getters.get_music;
                }
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

