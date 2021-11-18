<template>
    <div class="card_container">
        <div style="position:relative;left:-15px;top:10px;">
            <a href="#" @click.prevent="toggleDropdown">
                <img class="card_menu" src="/static/svg/card_menu.svg" style="width: 30px;">
            </a>
        </div>

        <div v-if="dropdown == true" class="card_actions" @mouseleave="handleFocus">
            <ul class="noStyle">
                <li><a href="#" @click.prevent="createPlaylistModal">Add to Playlist</a></li>
                <li v-if="profile == true" style="border: .2px solid rgba(250,250,250,0.2);margin: 3px 0px;"></li>
                <li v-if="profile == true"><a href="#" @click.prevent="handleEdit">&#128394; Edit</a></li>
                <li v-if="profile == true" style="border: .2px solid rgba(250,250,250,0.2);margin: 3px 0px;"></li>
                <li v-if="profile == true"><a href="#" @click.prevent="handleDelete">&times; Delete</a></li>
            </ul>
        </div>
        
        <Delete 
            header="Delete Video" 
            :message="'Do you want to delete'" 
            :title="vtitle" 
            :del_url="delete_url"
            :id="id" 
            :vdialog="vdialog" 
            v-on:delete_id="$emit('delete_id', id)"
        />

        <Dialog 
            title="Please Select A Playlist" 
            v-if="playlist_dialog == true" 
            v-on:closeDialog="onClosePlaylist"
        >   

            <CreatePlaylist 
                v-if="new_playlist == true" 
                :id="id" 
                v-on:return_to_playlist="reset_playlist"
            />

            <SelectPlaylist 
                v-if="new_playlist == false" 
                :id="id" 
                v-on:create_playlist="create_playlist" 
            />
        </Dialog>
    </div>
</template>

<script>
    import Delete from '../../../modal/Delete.vue';
    import Dialog from '../../../modal/Dialog.vue';
    import CreatePlaylist from '../../music/components/CreatePlaylist.vue';
    import SelectPlaylist from '../../music/components/SelectPlaylist.vue';
    
    export default {
        name: "CardActions",
        props: ["id", "vtitle", "type", "profile"],
        data(){
            return {
                playlist_dialog: false,
                vdialog: false,
                dropdown: false,
                delete_url: "",
                new_playlist: false
            }
        },
        components: {
            Delete, SelectPlaylist, Dialog, CreatePlaylist
        },
        methods: {
            toggleDropdown: function(){
                this.dropdown = !this.dropdown;
            },
            handleFocus: function(){
                this.dropdown = false;
            },
            handleDelete: function(){
                this.vdialog = true;
            },
            handleEdit: function(){
                this.$emit("" + this.type + "_edit", this.id);
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
        created(){
            if(this.type == "video"){
                this.delete_url = "https://api.jgeez.co/api/post/video/delete/";
            } else if(this.type == "music"){
                this.delete_url = "https://api.jgeez.co/api/post/audio/delete/"
            } else {
                this.delete_url = "https://api.jgeez.co/api/post/gist/delete/";
            }
            if(this.delete_url.length > 0){
                this.delete_url += this.id
            }
        }
    }
</script>

<style>
    .noStyle{
        padding: 0px;
        margin:0px;
        list-style: none;
    }
    .card_container a{
        font-size: 12px;
        color: white;

    }
    .card_actions{
        background-color: #a5730e;
        padding: 10px;
        position: absolute;
        width: 100px !important;
        margin-left: -100px;
        z-index: 1;
    }
</style>