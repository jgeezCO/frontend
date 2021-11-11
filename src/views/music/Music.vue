<template>
    <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
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
                <div class="loading-placeholder" v-if="music_loading == true">
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <div class="clear"></div>
                </div>
                
                <div class="music_card_wrapper" v-if="music_loading == false">
                    <div class="music_card" v-for="music in music_types" :key="music.tag">
                        <div v-if="music.tag == 'music'">
                            <div v-for="music_data in music.data" :key="music_data.id">
                                <MusicCard 
                                    :card="music_data"
                                />
                            </div>
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
                <div class="loading-placeholder" v-if="playlist_loading == true">
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <div class="clear"></div>
                </div>

                <div class="playlist_wrapper" v-if="playlist_loading == false">
                    <div class="playlist_card" v-for="playlist in music_types" :key="playlist.tag">
                        <div v-if="playlist.tag == 'playlist'">
                            <div v-for="playlist_data in playlist.data" :key="playlist_data.id">
                                <PlaylistCard  :card="playlist_data" />
                            </div>
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

            <div class="loading-placeholder" v-if="album_loading == true">
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <div class="clear"></div>
            </div>

            <div class="body">
                <div class="album_card_wrapper" v-if="album_loading == false">
                    <div class="album_card" v-for="album in music_types" :key="album.tag">
                        <div v-if="album.tag == 'album'">
                            <div v-for="album_data in album.data" :key="album_data.id">
                                <AlbumCard  :card="album_data"/>
                            </div>
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
    //import uuid from "uuid";
    
    import {mapActions} from "vuex";
    import MusicCard from "./components/MusicCard.vue";
    import PlaylistCard from "./components/PlaylistCard.vue";
    import AlbumCard from "./components/AlbumCard.vue";

    import Dialog from "../../modal/Dialog.vue";
    import CreatePlaylist from "./components/CreatePlaylist.vue";

    import Notification from "../../components/public/notification/Notification.vue";
    import Placeholder from '../../components/public/Placeholder.vue';

    export default {
        name: 'Music',
        components: {
            MusicCard, PlaylistCard, AlbumCard,
            Dialog, CreatePlaylist, Notification,
            Placeholder
        },
        data: function(){
            return {
                user_token: this.$store.getters.isLoggedIn == true 
                    ? this.$store.getters.getProfile.token 
                    : null,
                music_loading: true,
                playlist_loading: true,
                album_loading: true,
                vdialog: false,
                music_types: [
                    {
                        tag: "music",
                        data: []
                    }, 
                    {
                        tag: "playlist",
                        data: []
                    },
                    {
                        tag: "album",
                        data: []
                    }
                ]
            }
        },
        methods: {
            ...mapActions(["fetch_music"]),
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
            createPlaylistModal: function(){
                this.dialogVisible("open");
            },
            loadMusic: function(){
                this.fetch_music(null);
                this.music_types[0].data = this.$store.getters.get_music;

                setTimeout(() => {
                    this.music_loading = false;
                }, 1000);
            },
            loadPlaylist: function(){
                setTimeout(() => {
                    this.playlist_loading = false;
                }, 1000);

                // let playlist_placeholder_data = [
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         name: "Reekado Banks",
                //         time: "Created 1month ago",
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         name: "Reekado Banks",
                //         time: "Created 1month ago",
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         name: "Reekado Banks",
                //         time: "Created 1month ago",
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         name: "Reekado Banks",
                //         time: "Created 1month ago",
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         name: "Reekado Banks",
                //         time: "Created 1month ago",
                //     }
                // ];

                // console.log(playlist_placeholder_data);
            },
            loadAlbum: function(){
                setTimeout(() => {
                    this.album_loading = false;
                }, 1000);

                // let album_placeholder_data =  [
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         title: "Bello Konan",
                //         sub_title: "Full Belly",
                //         creator: "Bello Konan",
                //         verified: true,
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         title: "Bello Konan",
                //         sub_title: "Full Belly",
                //         creator: "Bello Konan",
                //         verified: true,
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         title: "Bello Konan",
                //         sub_title: "Full Belly",
                //         creator: "Bello Konan",
                //         verified: true,
                //     },
                //     {
                //         id: uuid.v1(),
                //         url: "",
                //         img: "static/uploads/img/80/1.png",
                //         title: "Bello Konan",
                //         sub_title: "Full Belly",
                //         creator: "Bello Konan",
                //         verified: true,
                //     }
                // ];
            }
        },
        created(){
            this.loadMusic();
            this.loadPlaylist();
            this.loadAlbum();
        }
    }
</script>
