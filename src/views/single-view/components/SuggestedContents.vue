<template>
    <div class="suggested-videos">
        <div class="suggested-video-container" v-if="media == 'video'">
            <div class="suggested-video" v-for="suggestion in suggestions" :key="suggestion.id">
                <VideoCard 
                    :card="suggestion"
                />
            </div>
        </div>
        
        <div class="suggested-gist-container" v-if="media == 'gist'">
            <div class="suggested-gist" v-for="suggestion in suggestions" :key="suggestion.id">
                <GistCard 
                    :gist="suggestion" 
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import GistCard from '../../gist/components/GistCard.vue';
    import VideoCard from '../../video/components/VideoCard.vue';
    
    export default {
        name: "SuggestedContents",
        props: ["media"], 
        components: {
            VideoCard, GistCard
        },
        data: function(){
            return {
                suggestions: []
            }
        },
        methods: {
            ...mapActions(["fetch_video", "fetch_gist"])
        },
        created(){
            let token = this.$store.getters.getProfile.token;
            if(this.media == "video"){
                this.fetch_video(token, null);
            }
            if(this.media == "gist"){
                this.fetch_gist(token, null);
            }
        },
        mounted(){
            if(this.media == "video"){
                this.suggestions = this.$store.getters.get_videos;
            }
            if(this.media == "gist"){
                this.suggestions = this.$store.getters.get_gist;
            }
        }
    }
</script>

<style>
    .vcard{
        width: 236px;
    }
</style>