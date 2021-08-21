<template>
    <div class="playlist_container-item left exclude">
        <div class="playlist-img-container" :style="'background-image: url(' + card.img + ')'"></div>
        <a href="#" style="color:white;">
            <h4 class="noSpace">{{card.name}}</h4>
            <p class="noSpace" style="font-size:11px;color:rgba(250,250,250,0.5);">{{card.time}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "PlaylistCard",
        props: {
            card: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .playlist_container-item{
        width: 19%;
        height: 200px;
        margin-right: 10px;
        margin-top: 10px;
    }
    .playlist-img-container{
        width: 100%;
        height:150px;
        background-size: cover;
        border-radius: 4px;
    }
    @media screen and (max-width: 900px) {
        .playlist_container-item{
            width: 46%;
        }
        
    }
</style>

