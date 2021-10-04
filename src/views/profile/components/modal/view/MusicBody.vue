<template>
    <div class="container_holder">
        <center v-if="upload_progress == 0">
            <br>
            
            <Dropzone 
                title="Your video will be private until it is published by you." 
            />

            <br><br>

            <input type="file" @change="handleMusicUpload" accept="audio/*" style="opacity:0;height:30px;background-color:Red;position:absolute;margin-top:-6px;">
            <a href="#" class="upload_btn" style="padding: 5px 50px;">Select file</a>

            <p style="width:80%;font-size:12px;">
                By uploading your music to Jgeez, 
                you acknowledge that you agree with our Terms of service and Privacy statement.
            </p>
        </center>

        <ProfileUploadVideo 
            v-on:dialog_title="handleEmit" 
            v-on:vprops="handleVProps" 
            :who="upload_progress" 
            v-if="upload_progress == 1" 
            type="music"
        />
         <ProfileUploadPublish 
            v-on:dialog_title="handleEmit" 
            :vprops="music_attr" 
            :who="upload_progress" 
            v-if="upload_progress == 2" 
            type="music"
        />
        <ProfileUploadCompleted 
            v-on:switch_dialog="switch_dialog" 
            :vprops="music_attr" 
            :who="upload_progress" 
            v-if="upload_progress == 3" 
            type="music" 
        />
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import Dropzone from "./Dropzone.vue";
    import ProfileUploadVideo from "../modules/video/ProfileUploadVideo.vue";
    import ProfileUploadCompleted from "../modules/video/ProfileUploadCompleted.vue";
    import ProfileUploadPublish from "../modules/video/ProfileUploadPublish.vue";

    export default {
        name: "VideoBody",
        data(){
            return {
                upload_progress: 0,
                upload_endpoint: "",
                music_attr: {
                    url: "",
                    title: "",
                    length: "",
                    poster: "",
                    created: ""
                }
            }
        },
        components: {
            Dropzone, ProfileUploadVideo, ProfileUploadCompleted, 
            ProfileUploadPublish
        },
        methods: {
            ...mapActions(["updateVideoState"]),
            handleEmit: function(payload){
                this.$emit("dialog_title", payload);
            },
            switch_dialog: function(prev){
                this.upload_progress = prev;
            },
            handleVProps: function(title, poster, url, length, created){
                this.$emit("dialog_title", title);

                this.music_attr.url = url;
                this.music_attr.title = title;
                this.music_attr.length = length;
                this.music_attr.created = created;
                this.music_attr.poster = poster;
                this.upload_progress = 2;
            },
            handleMusicUpload: function(e){
                let music_binary = e.target.files[0];
                setTimeout(() => {
                    this.updateVideoState(music_binary);
                    this.upload_progress = 1;
                }, 30);
            }
        }
    }
</script>

<style scoped>
    .container_holder{
        padding: 10px;
    }
    
</style>

