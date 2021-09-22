<template>
    <div class="app-body-content">
        <Notification />
        <br><br><br>

        <div class="music_container clear">
            <div class="header">
                <h4 class="left exclude noSpace">NEW MUSIC</h4>
                <div class="right exclude">
                    <a href="#" style="color:rgba(250,250,250,0.5);">more ></a>
                </div>
                <div class="clear"></div>
            </div>

            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="body">
                <div class="music_card" v-for="music in music_types" :key="music.tag">
                    <div v-if="music.tag == 'music'">
                        <div v-for="music_data in music.data" :key="music_data.id">
                            <MusicCard  :card="music_data"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="playlist_container clear">
            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="header">
                <h4 class="left noSpace exclude">PLAYLIST</h4>
                <div class="right noSpace exclude">
                    <a href="#" style="color:rgba(250,250,250,0.5);" @click="createPlaylistModal">Create Playlist ></a>
                </div>
                <div class="clear"></div>
            </div>

            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="body">
                <div class="playlist_card" v-for="playlist in music_types" :key="playlist.tag">
                    <div v-if="playlist.tag == 'playlist'">
                        <div v-for="playlist_data in playlist.data" :key="playlist_data.id">
                            <PlaylistCard  :card="playlist_data" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="music_container clear">
            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="header">
                <h4 class="left noSpace">ALBUM <sub style="font-weight:normal;font-size:12px;">Top Album</sub></h4>
                <div class="clear"></div>
            </div>

            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="body">
                <div class="album_card" v-for="album in music_types" :key="album.tag">
                    <div v-if="album.tag == 'album'">
                        <div v-for="album_data in album.data" :key="album_data.id">
                            <AlbumCard  :card="album_data"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>

        <Dialog title="Create Playlist" v-if="vdialog == true" v-on:closeDialog="dialogVisible">
            <CreatePlaylist />
        </Dialog>
    </div>
</template>

<script>
    import uuid from "uuid";
    import MusicCard from "./components/MusicCard.vue";
    import PlaylistCard from "./components/PlaylistCard.vue";
    import AlbumCard from "./components/AlbumCard.vue";

    import Dialog from "../../modal/Dialog.vue";
    import CreatePlaylist from "./components/CreatePlaylist.vue";

    import Notification from "../../components/public/notification/Notification.vue";

    export default {
        name: 'Music',
        components: {
            MusicCard, PlaylistCard, AlbumCard,
            Dialog, CreatePlaylist, Notification
        },
        data: function(){
            return {
                vdialog: false,
                music_types: [
                    {
                        tag: "music",
                        data: [
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                playcount: "1.2M",
                                color: "#D7732E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/2.png",
                                name: "Demi Bealy",
                                playcount: "80.4k",
                                color: "#6600CC"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/3.png",
                                name: "Bryan miles",
                                playcount: "89k",
                                color: "#898081"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/4.png",
                                name: "Femi Koku",
                                playcount: "1.2M",
                                color: "#A5730E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/5.png",
                                name: "Dwight hussel",
                                playcount: "1.2M",
                                color: "#92221D"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/6.png",
                                name: "Kore Ida",
                                playcount: "1.2M",
                                color: "#D7732E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/3.png",
                                name: "Bryan miles",
                                playcount: "1.2M",
                                color: "#898081"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/4.png",
                                name: "Femi Koku",
                                playcount: "1.2M",
                                color: "#6600CC"
                            }
                        ]
                    }, 
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
                            }
                        ]
                    },
                    {
                        tag: "album",
                        data: [
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                title: "Bello Konan",
                                sub_title: "Full Belly",
                                creator: "Bello Konan",
                                verified: true,
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                title: "Bello Konan",
                                sub_title: "Full Belly",
                                creator: "Bello Konan",
                                verified: true,
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                title: "Bello Konan",
                                sub_title: "Full Belly",
                                creator: "Bello Konan",
                                verified: true,
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                title: "Bello Konan",
                                sub_title: "Full Belly",
                                creator: "Bello Konan",
                                verified: true,
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
