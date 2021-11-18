<template>
    <div>
        <br>
        <ul class="noStyle">
            <li>
                <a href="#" @click.prevent="$emit('create_playlist')">
                    <img class="left exclude" src="/static/svg/add-plus.svg" style="width:60px;"> 
                    <h3 class="left exclude" style="font-size: 15px;color:black;margin-top:17px;padding-top:0px;margin-left:10px;font-weight:600;">Create New Playlist</h3>
                </a>
                <div class="clear"></div>
            </li> 
        </ul>
        <ul class="noStyle" v-for="playlist in playlists" :key="playlist.id">
            <li>
                <a href="#" @click.prevent="add_to_playlist(playlist.id, id)">
                    <img class="left exclude" :src="playlist.img" style="width:60px;height:60px;"> 
                    <h3 class="left exclude" style="font-size: 15px;color:black;margin-top:17px;padding-top:0px;margin-left:10px;font-weight:600;">
                        {{playlist.title}}
                    </h3>
                </a>
                <div class="clear"></div>
            </li> 
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SelectPlaylist",
        props: ["id"],
        data(){
            return {
                playlists: [
                    {
                        id: 1,
                        img: "https://res.cloudinary.com/binary-solutions/image/upload/v1633948795/test101_1633948793_background.png.png",
                        title: "My Blue Musics",
                    },
                    {
                        id: 2,
                        img: "https://res.cloudinary.com/binary-solutions/image/upload/v1635767457/Jionerd_1635767456_sddefault%20%281%29.jpg.jpg",
                        title: "Personal Music"
                    },
                    {
                        id: 3,
                        img: "https://res.cloudinary.com/binary-solutions/image/upload/v1635767675/Jionerd_1635767674_Joeboy-Alcohol.jpeg.jpg",
                        title: "Pop Hits"
                    }
                ]
            }
        },
        methods: {
            add_to_playlist(playlist_id, media_id){
                console.log(playlist_id + " == " + media_id);
            }
        }
    }
</script>

<style scoped>
    a{
        color: black !important;
    }
    li:hover, a:hover{
        background-color: #e6f1ff;
    }
    li{
        clear: both;
        margin-bottom: 20px;
    }
</style>