<template>
    <div class="album_container left exclude">
        <div class="img-container" :style="'background-image: url(' + card.img + ')'"></div>
        <div class="alb-container" style="padding:5px;">
            <a href="#" style="color:black;">
                <h4 class="noSpace">{{card.title}}</h4>
                <p class="noSpace" style="font-size:11px;">{{card.sub_title}}</p>

                <p style="font-size:13px;margin-top:10px;">
                    By <b>{{card.creator}}</b> &nbsp;
                    <img src="static/svg/verified-g.svg" style="width:15px;position:relative;top:4px;">
                </p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlbumCard",
        props: {
            card: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .album_container{
        width: 220px;
        height: 284px;
        margin-right: 20px;
        margin-top: 20px;
        background-color: white;
        color: black;
    }
    .img-container{
        width: 100%;
        height:200px;
        background-size: cover;
    }
    @media screen and (max-width: 900px) {
        .album_container{
            width: 46%;
            height: 240px;
        }
        .img-container{
            width: 100%;
            height:150px;
        }
        .album_container:not(:nth-child(2)){
            margin-right: 10px;
        }
    }
</style>