<template>
    <div class="profile">
        <br>
        
        <Notification />

        <div class="profiling">
            <ProfileBackground background="static/assets/img/ub.png"/>
            <ProfileActivities v-on:open-dialog="dialogVisible"/>

            <center class="clickable_act">
                <a href="#" @click="video_menu" data-type="all" :class="upload_switch.all == true ? 'highlight' : ''">ALL UPLOADS</a> 
                <a href="#" @click="video_menu" data-type="video" :class="upload_switch.video == true ? 'highlight' : ''">VIDEOS</a> 
                <a href="#" @click="video_menu" data-type="music" :class="upload_switch.music == true ? 'highlight' : ''">MUSIC</a> 
                <a href="#" @click="video_menu" data-type="gist" :class="upload_switch.gist == true ? 'highlight' : ''">GIST</a> 
                <a href="#">
                    <img src="static/svg/search.svg" style="width:15px;color:white;">
                </a>
            </center> 
            <div class="clear"></div>
        </div>

        <div class="profile-display app-body-content">
            <AllUpload v-if="upload_switch.all == true" :idle="!upload_switch.all" />
            <VideoUpload v-if="upload_switch.video == true" :idle="!upload_switch.video" />
            <MusicUpload v-if="upload_switch.music == true" :idle="!upload_switch.music" />
            <GistUpload v-if="upload_switch.gist == true" :idle="!upload_switch.gist" />
        </div>
        
        <Dialog :title="dialog_title" v-if="vdialog == true" v-on:closeDialog="dialogVisible">
            <Selector v-on:dialogTitle="dialogTitle" />
        </Dialog>
    </div>
</template>

<script>
    import ProfileBackground from "./components/ProfileBackground.vue";
    import ProfileActivities from "./components/ProfileActivities.vue";
    
    import AllUpload from "./components/upload/AllUpload.vue";
    import VideoUpload from "./components/upload/VideoUpload.vue";
    import MusicUpload from "./components/upload/MusicUpload.vue";
    import GistUpload from "./components/upload/GistUpload.vue";
    
    import Dialog from "../../modal/Dialog.vue";
    import Selector from "./components/modal/Selector.vue";

    import Notification from "../../components/public/notification/Notification.vue";

    export default {
        name: "Profile",
        components: {
            ProfileBackground, ProfileActivities, 
            AllUpload,VideoUpload, MusicUpload, GistUpload,
            Selector, Dialog,
            Notification
        },
        data: function(){
            return {
                vdialog: false,
                dialog_title: "Choose content to upload",
                upload_switch: {
                    all: true,
                    video: false,
                    music: false,
                    gist: false
                }
            }
        },
        methods: {
            dialogTitle: function(title){
                this.dialog_title = title;
            },
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
            video_menu: function(event){
                event.preventDefault();
                let attribute = event.target.getAttribute("data-type");
                if(attribute == "all"){
                    this.upload_switch.all = true;
                    this.upload_switch.video = this.upload_switch.music = this.upload_switch.gist = false;
                } else if(attribute == "video"){
                    this.upload_switch.video = true;
                    this.upload_switch.all = this.upload_switch.music = this.upload_switch.gist = false;
                } else if(attribute == "music"){
                    this.upload_switch.music = true;
                    this.upload_switch.all = this.upload_switch.video = this.upload_switch.gist = false;
                } else if(attribute == "gist"){
                    this.upload_switch.gist = true;
                    this.upload_switch.all = this.upload_switch.video = this.upload_switch.music = false;
                }
            }
        }
    }
</script>

<style scoped>
    .profile a{
        margin-right: 15px;
    }
    .profile_cap{
        color: white;
        font-size: 12px;
    }
    .clickable_act{
        width: 100%;
        margin: 5px auto;
        clear:both;
        background-color: black;
        padding: 10px 0px;
        position:relative;
        top:-25px;
    }
    .clickable_act a{
        display: inline-block;
        color: white;
        border-bottom: 3px solid black;
        font-size: 13px;
        font-weight:bold;
        position:relative;
        top:10px;
    }
    .clickable_act a:not(:last-child){
        width: 120px;
    }
    .clickable_act a:hover{
        border-bottom-color: #A5730E;
    }
    .clickable_act .highlight{
        border-bottom-color: #A5730E;
    }
    .profile-display{
        position:relative;
        top:-50px;
    }
    .profiling{
        margin:0px;
        padding:0px;
    }

    @media screen and (max-width: 900px){
        .profile a{
            margin-right: 5px !important;
        }
        .clickable_act a{
            width: auto !important;
            margin-right: 20px !important;
        }
    }
</style>