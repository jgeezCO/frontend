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
            <div class="left" v-if="edit == false">
                <h3 class="noSpace">&nbsp;</h3>
                <div class="video-uploading" style="padding: 20px 30px 30px 10px;">
                    <div class="video-uploading-content">
                        <b class="faded-text" style="font-size:14px;">{{type == "video" ? "Video" : "Music"}} attached...</b>
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
                    <img v-if="thumbnail != null" :src="thumbnail" style="z-index:0;position:absolute;display:inline-block;width: 220px;height:150px;">
                    <div class="video-uploading-content" style="position:relative;z-index:1;margin-top:20px;width: 100%;height:100% !important;border-radius:10px;background-color:rgba(165,115,14,0.5);">
                        <center style="padding-top:20px;">
                            <input accept="image/*" @change="previewImage" type="file" style="opacity:0;position:absolute;margin-top:0px;width:50px;height:35px;background-color:white;">
                            <img src="static/svg/add.svg">
                            <p style="font-weight:bold;font-size:12px;">Upload content art / thumbnail</p>
                        </center>
                    </div>
                </div>
            </div>
        </div>

        <div class="clear"></div>

        <div class="row" style="margin-top:30px;">
            <div class="left" style="margin-right:20px;">
                <h4 class="noSpace">Visibility and Preview</h4>
                <div class="border-holder">
                    <p style="font-size:12px;margin:0px;padding:0px;padding-bottom:20px;">Make your video <b>public, private or unlisted</b></p>
                    
                    <div class="ccheckbox left">
                        <label style="font-size:12px;margin-right:20px;">
                            <h4 class="noSpace left exclude vis-text">Private &nbsp;&nbsp;</h4>
                            <div class="left exclude">
                                <label class="container">
                                    <input type="radio" value="private" v-model="videos.visibility" name="visibility">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="clear">
                                <p style="position:relative;top:5px;" class="faded-text">Only those you choose can see your content</p>
                            </div>
                        </label>
                    </div>

                    <div class="ccheckbox left">
                        <label style="font-size:12px;margin-right:20px;">
                            <h4 class="noSpace left exclude vis-text">Public &nbsp;&nbsp;</h4>
                            <div class="left exclude">
                                <label class="container">
                                    <input type="radio" value="public" v-model="videos.visibility" checked name="visibility">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="clear">
                                <p style="position:relative;top:5px;" class="faded-text">
                                    {{type == "video" ? 'Anyone can watch your video' : 'Anyone can play your music'}}
                                </p>
                            </div>
                        </label>
                    </div>

                   <div class="ccheckbox left">
                        <label style="font-size:12px;margin-right:20px;">
                            <h4 class="noSpace left exclude vis-text">Unlisted &nbsp;&nbsp;</h4>
                            <div class="left exclude">
                                <label class="container">
                                    <input type="radio" v-model="videos.visibility" value="unlisted" name="visibility">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="clear">
                                <p style="position:relative;top:5px;" class="faded-text">
                                    {{type == "music" ? "Only those that have the link can play your music" : "Only those that have the video link can view"}}
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="clear"></div>

        <br><br>

        <center>
            <button :disabled="btn_disabled == true ? 'disabled' : false" class="upload_btn" @click="handleVideoUpload" style="display:inline-block;width:200px;padding: 10px 50px;border:none;">
                <img v-if="btn_disabled == true" src="static/svg/loading.svg" class="left" style="width:30px;height:30px;"> 
                <p :class="btn_disabled == true ? 'left' : ''" :style="btn_disabled == true ? 'margin-top:-21px;margin-left:28px;' : ''">{{btn_disabled == true ? 'Uploading...' : 'Next' }}</p>
                <div class="clear" style="width:0px;height:0px;position:absolute;top:0px;"></div>
            </button>
        </center>
        <br><br>
    </div>
</template>

<script>
    import axios from "axios";
    import {mapActions} from "vuex";
    export default {
        name: "ProfileUploadVideo", 
        props: {
            type: String,
            edit: {
                type: Boolean,
                default: false
            },
            edit_data: {
                type: Object,
                default: null
            }
        },
        data(){
            return {
                btn_disabled: false,
                thumbnail: null,
                binary: null,
                dialogTitle: "",
                desc_total_count: 100,
                current_count: 0,
                videos: {
                    url: "",
                    length: "0.0",
                    desc: "",
                    prev_desc: "",
                    visibility: "public",
                    poster: null
                }
            }
        },
        methods:{
            ...mapActions(["updatePosterState"]),
            handleTextCount: function(){
                let description = this.videos.desc;
                this.current_count = description.length;

                if(this.current_count <= this.desc_total_count){
                    this.videos.prev_desc = description;
                } else {
                    let cutpost = this.videos.desc.substr(0, this.desc_total_count - 1);
                    this.videos.desc = cutpost;
                }
            },
            getVideoLength: function(){
                var video = document.createElement('video');
                video.preload = 'metadata';

                var currentScope = this;

                video.onloadedmetadata = function() {
                    window.URL.revokeObjectURL(video.src);
                    currentScope.videos.length = video.duration;
                    currentScope.calculateLength(video.duration);
                }                

                video.src = URL.createObjectURL(currentScope.binary);
            },
            previewImage: function(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                this.profileImgRaw = image;
                reader.onload = e =>{
                    this.videos.poster = image;
                    this.thumbnail = e.target.result;
                    this.updatePosterState(this.thumbnail);
                };
            },
            calculateLength: function(duration){
                let duration_title = "sec";

                if(duration > 60){
                    duration = duration / 60;
                    duration_title = "mins";
                    if(duration > 60.9){
                        duration = duration / 60;
                        duration_title = "hrs";
                    }
                }

                this.videos.length = duration.toFixed(2) + duration_title;
            },
            handleVideoUpload: function(){
                var form_data = new FormData();
                var currentScope = this;
                var post_url = this.type == "music" 
                    ? "https://api.jgeez.co/api/post/audio/create/" 
                    : "https://api.jgeez.co/api/post/video/create";

                this.btn_disabled = true;
                form_data.append("title", this.dialogTitle);
                form_data.append("text", this.videos.desc);
                form_data.append("category_id", 1);
                form_data.append("albumArt", this.videos.poster);

                if(this.type == "video")
                    form_data.append("videoFile", this.binary);
                else form_data.append("audioFile", this.binary);  
                
                form_data.append("visibility", this.videos.visibility);
                form_data.append("duration", this.videos.length);

                axios({
                    method: 'post',
                    url: post_url,
                    withCredentials: true,
                    data:  form_data,
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'content-type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + currentScope.$store.getters.getProfile.token
                    }
                })
                .then(response => { 
                    if(response.status == 200){
                        console.log(response);
                        currentScope.$emit('vprops', 
                            currentScope.dialogTitle, 
                            response.data.post.video.album_art,
                            response.data.post.video.post_url, 
                            currentScope.videos.length,
                            response.data.post.created
                        );
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.btn_disabled = false;
                    alert("Oops! Something went wrong");
                });
            }
        },
        created(){
            if(this.edit == false){
                this.binary = this.$store.getters.getVideo;
                setTimeout(() => {
                    this.getVideoLength();
                }, 100);
            }
        },
        mounted(){
            if(this.edit_data != null){
                this.videos.title = this.edit_data.title;
                this.videos.desc = this.edit_data.desc;
                this.thumbnail = this.edit_data.poster;

                console.log(this.edit_data);
            }
        }
    }
</script>

<style>
    .video-uploading{
        height: 50px;
        background-color: rgba(107, 102, 102, 0.2);
        border-radius: 20px;
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
    .upload_btn:disabled{
        background-color: rgba(165,115,14, 0.6);
        cursor: not-allowed;
    }
    .ccheckbox{
        margin-right:20px;
    }
</style>