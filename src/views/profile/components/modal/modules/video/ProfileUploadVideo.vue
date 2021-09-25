<template>
    <div class="profile_upload">
        <div class="row">
            <div class="left" style="margin-right:20px;">
                <h3 class="noSpace">Details</h3>
                <div class="simple-input">
                    <p class="faded-text noSpace">Title</p>
                    <textarea cols="40" rows="3" v-model="dialogTitle"></textarea>
                </div>
            </div>
            <div class="left">
                <h3 class="noSpace">&nbsp;</h3>
                <div class="video-uploading">
                    <div class="video-uploading-content">
                        <b class="faded-text" style="font-size:14px;">Video attached...</b>
                    </div>
                </div>
            </div>
            <div class="left" style="margin-left:10px;">
                <!-- <h3 class="noSpace">&nbsp;</h3>
                <p class="faded-text noSpace">Video Link</p>
                <div class="left">
                    <a v-if="videos.url.length > 5" style="font-size:13px;" :href="videos.url">{{videos.url}}</a>
                    <span style="font-size:12px;" v-if="videos.url.length < 5"><i><u>waiting for url</u></i></span>
                </div>
                <div class="left" style="font-size:12px;margin-left:10px;">
                    <img class="noSpace" src="static/svg/copy.svg"> 
                    <span style="position:relative;top:-12px;left:3px;">copy</span>
                </div> -->
                <br>
                <p class="faded-text noSpace">File name</p>
                <div class="left">
                    <b style="font-size:12px;">{{dialogTitle.length == 0 ? 'empty' : dialogTitle}}</b>
                </div>
                
            </div>
        </div>
        
        <div class="clear"></div>

        <div class="row" style="margin-top:30px;">
            <div class="left" style="margin-right:30px;">
                <div class="simple-input">
                    <p class="faded-text noSpace"><b>Description</b></p>
                    <p class="faded-text noSpace">Tell viewers about your video</p>
                    <textarea v-model="videos.desc" cols="65" rows="10" @keyup="handleTextCount"></textarea>
                    <p class="right noSpace" style="font-size:12px;">
                        <span class="text_counter">{{current_count}}</span> / {{desc_total_count}}
                    </p>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="left">
                <div class="video-uploading" style="margin-top:8px;width: 220px;height:150px !important;">
                    <div class="video-uploading-content" style="margin-top:20px;width: 100%;height:auto !important;">
                        <center>
                            <img src="static/svg/add.svg">
                            <p style="font-weight:bold;font-size:12px;">Upload content art / thumbnail</p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>

        <br><br><br>

        <center>
            <a href="#" class="upload_btn" @click="$emit('vprops', dialogTitle, videos.url, videos.length)" style="display:inline-block;width:200px;padding: 10px 50px;">Next</a>
        </center>
        <br><br>
    </div>
</template>

<script>
    export default {
        name: "ProfileUploadVideo", 
        props: ["binary"],
        data(){
            return {
                dialogTitle: "",
                desc_total_count: 100,
                current_count: 0,
                videos: {
                    url: "",
                    length: "7:30",
                    desc: "",
                    prev_desc: ""
                }
            }
        },
        methods:{
            handleTextCount: function(){
                let description = this.videos.desc;
                this.current_count = description.length;

                if(this.current_count <= this.desc_total_count){
                    this.videos.prev_desc = description;
                } else {
                    this.videos.desc = this.videos.prev_desc;
                }
            }
        }
    }
</script>

<style>
    .video-uploading{
        height: 50px;
        background-color: rgba(107, 102, 102, 0.2);
        border-radius: 20px;
        padding: 20px 30px 30px 10px;
        width: 200px;
    }
    .video-uploading-content{
        width: 80%;
        margin: 20px auto;
        font-size: 12px;
        text-align: center;
    }
    .dialog-content{
        display: inline-block;
        width: auto !important;
        height: auto !important;
    }
</style>