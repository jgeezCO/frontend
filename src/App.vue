<template>
    <div>
        <Header />
        
        <div class="app-body">
            <TopBar />
            <router-view></router-view>

            <MusicPlayer 
                :title="title" 
                :artist="artist" 
                :play_path="url"
            />
            <MobileNavigation />
            <Footer copyright="©2021 EntainHub Nig. Ltd. All rights reserved" />
        </div>
    </div>
</template>

<script>
    import Header from "./components/public/Header.vue";
    import Footer from "./components/public/Footer.vue";
    import TopBar from "./components/public/TopBar.vue";
    import MobileNavigation from "./components/public/MobileNavigation.vue";
    import MusicPlayer from './views/music/Player.vue';
    
    export default {
        name: 'App',
        components: {
            Header, Footer, TopBar, 
            MusicPlayer, MobileNavigation
        },
        computed: {
            title: function(){
                return this.$store.getters.get_music_name
            },
            artist: function(){
                return this.$store.getters.get_artist_name
            },
            url: function(){
                return this.$store.getters.get_music_path
            }
        }
    }
</script>
