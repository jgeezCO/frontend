<template>
    <div class="container_holder">
        <center v-if="upload_progress == 0">
            <br>
            
            <Dropzone 
                title="Your video will be private until it is published by you." 
            />

            <br><br>

            <input type="file" @change="handleVideoUpload" accept="video/*" style="opacity:0;height:30px;background-color:Red;position:absolute;margin-top:-6px;">
            <a href="#" class="upload_btn" style="padding: 5px 50px;">Select file</a>

            <p style="width:80%;font-size:12px;">
                By uploading your video to Jgeez, 
                you acknowledge that you agree with our Terms of service and Privacy statement.
            </p>
        </center>

        <ProfileUploadVideo 
            v-on:dialog_title="handleEmit" 
            v-on:vprops="handleVProps" 
            :who="upload_progress" 
            v-if="upload_progress == 1" 
            :binary="video_binary"
        />
        <ProfileUploadCompleted 
            v-on:switch_dialog="switch_dialog" 
            :vprops="video_attr" 
            :who="upload_progress" 
            v-if="upload_progress == 2"
        />
        <ProfileUploadPublish 
            v-on:dialog_title="handleEmit" 
            :vprops="video_attr" 
            :who="upload_progress" 
            v-if="upload_progress == 3"
        />
    </div>
</template>

<script>
    import Dropzone from "./Dropzone.vue";
    import ProfileUploadVideo from "../modules/video/ProfileUploadVideo.vue";
    import ProfileUploadCompleted from "../modules/video/ProfileUploadCompleted.vue";
    import ProfileUploadPublish from "../modules/video/ProfileUploadPublish.vue";

    export default {
        name: "VideoBody",
        data(){
            return {
                upload_progress: 0,
                video_binary: null,
                upload_endpoint: "",
                video_attr: {
                    url: "",
                    title: "",
                    length: ""
                }
            }
        },
        components: {
            Dropzone, ProfileUploadVideo, ProfileUploadCompleted, 
            ProfileUploadPublish
        },
        methods: {
            handleEmit: function(payload){
                this.$emit("dialog_title", payload);
            },
            switch_dialog: function(prev){
                this.upload_progress = prev;
            },
            handleVProps: function(title, url, length){
                this.$emit("dialog_title", title);

                this.video_attr.url = url;
                this.video_attr.title = title;
                this.video_attr.length = length;

                this.upload_progress = 2;
            },
            handleVideoUpload: function(e){
                this.video_binary = e.target.files[0];
                setTimeout(() => {
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

