<template>
    <div class="profile_upload">
        <div class="row">
            <div class="left" style="margin-right:20px;">
                <h4 class="noSpace">Visibility and Preview</h4>
                <div class="border-holder">
                    <p style="font-size:12px;margin:0px;padding:0px;padding-bottom:20px;">Make your video <b>public, private or unlisted</b></p>
                    <div class="row">
                        <div class="ccheckbox">
                            <label style="font-size:12px;margin-right:20px;">
                                <h4 class="noSpace left vis-text">Private &nbsp;&nbsp;</h4>
                                <div class="left">
                                    <label class="container">
                                        <input type="radio" value="private" checked name="visibility">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="clear">
                                    <p style="position:relative;top:5px;" class="faded-text">Only those you choose can see your content</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ccheckbox">
                            <label style="font-size:12px;margin-right:20px;">
                                <h4 class="noSpace left vis-text">Public &nbsp;&nbsp;</h4>
                                <div class="left">
                                    <label class="container">
                                        <input type="radio" value="public" name="visibility">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="clear">
                                    <p style="position:relative;top:5px;" class="faded-text">Anyone can watch your video</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ccheckbox">
                            <label style="font-size:12px;margin-right:20px;">
                                <h4 class="noSpace left vis-text">Unlisted &nbsp;&nbsp;</h4>
                                <div class="left">
                                    <label class="container">
                                        <input type="radio" value="unlisted" name="visibility">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="clear">
                                    <p style="position:relative;top:5px;" class="faded-text">Only those that have the video link can view</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right" style="margin-right:50px;">
                <h4 class="noSpace">&nbsp;</h4>
                <div class="row">
                    <p class="faded-text noSpace">Video Link</p>
                    <div class="left">
                        <a style="font-size:13px;" :href="vprops.url">{{vprops.url}}</a>
                    </div>
                    <div class="left" style="font-size:12px;margin-left:10px;">
                        <img class="noSpace" src="static/svg/copy.svg" style="width:20px;"> 
                        <span style="position:relative;top:-12px;left:3px;">copy</span>
                    </div>
                </div>

                <div class="row clear">
                    <p class="faded-text noSpace">File name</p>
                    <div>
                        <b style="font-size:12px;">{{vprops.title}}</b>
                    </div>
                </div>
                
                <br>
                <div class="row clear">
                    <div class="thumbnail-cover" :style="'background-image:url(' + thumbnail + ')'">
                        <div class="thumbnail-cover-content">
                            <div class="row rcontent" style="padding: 5px 20px;">
                                <center>
                                    <img src="static/svg/play.svg">
                                </center>
                                
                                <br>

                                <p class="left" style="font-size:13px;color:white;font-weight:bold;">
                                    {{vprops.title}}
                                </p>
                                <p class="right" style="font-size:13px;color:white;font-weight:bold;">
                                    {{vprops.length}}
                                </p>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <div class="clear"></div>
        
        <br><br><br>
        <center>
            <a href="#" @click="$emit('switch_dialog', 1)" class="upload_btn upload_btn_back" style="background-color:white !important;display:inline-block;width:150px;padding: 10px 50px;">Back</a> &nbsp;&nbsp;&nbsp;
            <a href="#" @click="$emit('switch_dialog', 3)" class="upload_btn" style="display:inline-block;width:150px;padding: 10px 50px;">Next</a>
        </center>

        <br>
    </div>
</template>

<script>
    export default {
        name: "ProfileUploadCompleted",
        props: ["vprops", "who"],
        data(){
            return {
                thumbnail: null
            }
        },
        mounted(){
            this.$emit("dialog_title", "Video Published!")
        },
        methods:{
            calculateLength: function(){
                if(this.vprops.length > 0){
                    let duration = this.vprops.length;
                    if(duration > 60){
                        duration = duration / 60;
                        this.duration_title = "mins";
                        if(duration > 60.9){
                            duration = duration / 60;
                            this.duration_title = "hrs";
                        }
                    }
                    this.vprops.length = this.video_length = duration.toFixed(2);
                }
            },
            createPoster: function() {
                // var canvas = document.createElement("canvas");
                // canvas.width = 350; canvas.height = 200;
                // canvas.getContext("2d").drawImage(video_binary, 0, 0, canvas.width, canvas.height);
                // this.thumbnail = canvas.toDataURL("image/jpeg");
            }
        },
        created(){
            this.calculateLength();
            // this.createPoster();
        }
    }
</script>

<style>
    .vis-text{
        width: 60px;
    }
    .border-holder{
        border: 2px solid rgba(0, 0, 0, 0.4);
        padding: 2px 70px 40px 5px;
        margin-top: 10px;
    }
    .thumbnail-cover{
        width: 250px;
        height: 150px;
        border-radius:10px;
        background-size: cover;
        
    }
    .thumbnail-cover-content{
        width: 250px;
        height: 150px;
        position: absolute;
        background-color: rgba(255,255,255,0.6);
    }
    .upload_btn_back{
        color: var(--gold-color);
        border: 1px solid var(--gold-color);
    }
    .rcontent{
        margin-top: 50px;
    }
</style>