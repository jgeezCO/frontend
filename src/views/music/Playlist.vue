<template>
    <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
        <div class="playlist_container clear">
            <div class="header">
                <h4 class="left exclude noSpace">PLAYLIST</h4>
                <div class="right exclude noSpace">
                    <a href="#" @click.prevent="createPlaylistModal" style="color:rgba(250,250,250,0.5);" data-title="Most views playlist">+ Create New Playlist</a>
                </div>
                <div class="clear"></div>
            </div>

            <div class="demarcator" style="margin-bottom:20px;padding-bottom:10px;"></div>

            <div class="body" v-if="playlist_count > 0">
                <div class="playlist_card">
                    <div v-if="playlists.tag == 'playlist'">
                        <div v-for="playlist_data in playlists.data" :key="playlist_data.id">
                            <PlaylistCard  :card="playlist_data" />
                        </div>
                    </div>
                </div>
            </div>

            <Display 
                v-if="this.playlist_count == 0" 
                img="/static/svg/empty.svg" 
                text="NO UPLOAD FOR PLAYLIST"  
                desc="Be the first to create a playlist. Start sharing videos, music, gists and more" 
                :button="false"
            />

            <div class="clear"></div>
        </div>

        <div class="create_new_playlist">
            <Dialog 
                title="Please Select A Playlist" 
                v-if="playlist_dialog == true" 
                v-on:closeDialog="onClosePlaylist"
            >   

                <CreatePlaylist 
                    v-if="new_playlist == true" 
                    :id="-255" 
                    v-on:return_to_playlist="reset_playlist"
                />

                <SelectPlaylist 
                    v-if="new_playlist == false" 
                    :id="-255" 
                    v-on:create_playlist="create_playlist" 
                />
            </Dialog>
        </div>
    </div>
</template>

<script>
    import PlaylistCard from "./components/PlaylistCard.vue";
    import Dialog from '../../modal/Dialog.vue';
    import CreatePlaylist from './components/CreatePlaylist.vue';
    import SelectPlaylist from './components/SelectPlaylist.vue';
    import Display from '../profile/components/upload/components/Display.vue';
    
    export default {
        name: 'Playlist',
        components: {
            PlaylistCard, Dialog, CreatePlaylist, 
            SelectPlaylist, Display
        },
        data: function(){
            return {
                playlist_dialog: false,
                vdialog: false,
                new_playlist: false,
                playlists: {
                    tag: "playlist",
                    data: []
                }
            }
        },
        methods: {
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
            createPlaylistModal: function(){
               this.onClosePlaylist("open");
            },
            onClosePlaylist: function(type){
                this.playlist_dialog = type == "open" ? true : false;
                this.new_playlist = false;
            },
            create_playlist: function(){
                this.new_playlist = true;
            },
            reset_playlist: function(){
                this.new_playlist = false;
            }
        },
        computed: {
            playlist_count: function(){
                return this.playlists.data.length;
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