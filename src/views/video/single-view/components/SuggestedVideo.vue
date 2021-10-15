<template>
    <div class="suggested-videos">
        <div class="suggested-video" v-for="suggestion in suggestions" :key="suggestion.id">
            <VideoCard :card="suggestion"/>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import VideoCard from "../../components/VideoCard.vue";
    
    export default {
        name: "SuggestedVideos",
        components: {
            VideoCard
        },
        data: function(){
            return {
                suggestions: []
            }
        },
        methods: {
            ...mapActions(["fetch_video"])
        },
        created(){
            let token = this.$store.getters.getProfile.token;
            this.fetch_video(token, null);
        },
        mounted(){
            this.suggestions = this.$store.getters.get_videos;
        }
    }
</script>

<style>
    .vcard{
        width: 236px;
    }
</style>