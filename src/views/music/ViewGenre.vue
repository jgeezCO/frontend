<template>
    <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
        <h4><span style="color:#a5730e;font-weight:bold;">GENRE: </span> {{this.category}}</h4>
        
        <Display 
            v-if="music_list.length == 0"
            img="/static/svg/empty.svg" 
            :text="'NO UPLOAD FOR ' + this.category" 
            desc="Be the first to upload this genre. Start sharing videos, music, gists and more" 
            :button="false"
        />

        <div class="genre_container" v-if="music_list.length > 0">
            <div class="view-genre" v-for="trend in music_list" :key="trend.id">
                <MusicCard :card="trend"/>
            </div>
        </div>
        
        <div class="clear"></div>
    </div>
</template>

<script>
    import Display from '../profile/components/upload/components/Display.vue';
    import MusicCard from "./components/MusicCard.vue";
    
    export default {
        name: "ViewGenre",
        components: {
            MusicCard, Display
        },
        data: function(){
            return {
                music_list: []
            }
        },
        computed:{
            category: function(){
                let category = this.$route.params.category;
                return category.toUpperCase();
            }
        }
    }
</script>

<style scoped>

</style>