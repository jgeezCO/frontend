<template>
    <div class="app-body-content">
        <div class="playlist_container clear">
            <div class="header">
                <h4 class="left exclude noSpace">PLAYLIST</h4>
                <div class="right exclude noSpace">
                    <a href="#" style="color:rgba(250,250,250,0.5);" data-title="Most views playlist">Hotlist ></a>
                </div>
                <div class="clear"></div>
            </div>

            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="body">
                <div class="playlist_card" v-for="playlist in playlists" :key="playlist.tag">
                    <div v-if="playlist.tag == 'playlist'">
                        <div v-for="playlist_data in playlist.data" :key="playlist_data.id">
                            <PlaylistCard  :card="playlist_data" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import PlaylistCard from "./components/PlaylistCard.vue";

    export default {
        name: 'Playlist',
        components: {
            PlaylistCard,
        },
        data: function(){
            return {
                vdialog: false,
                playlists: [
                    {
                        tag: "playlist",
                        data: [
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                time: "Created 1month ago",
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
            createPlaylistModal: function(){
                this.dialogVisible("open");
            }
        }
    }
</script>

<style>
    @media only screen and (max-width: 900px){
        .header{
            margin-top: 15px;
            padding-right: 10px;
        }
    }
</style>