<template>
    <div class="profile_upload">
        <div class="row">
            <div class="left" style="margin-right:20px;">
                <div class="left">
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

            <div class="left">
                <div class="video-uploading pupload">
                    <div class="video-uploading-content published-content">
                        <b class="faded-text" style="font-size:12px;">File name</b>
                        <p style="margin: 5px 0px 0px 0px;"><b>{{vprops.title}}</b></p>
                        <br>
                        <p>{{publishedOn}}</p>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div> 
        
        <div class="clear"></div><br>

        <div class="row">
            <h3><b>Share Video Link</b></h3>
            <div class="social-media">
                <a href="#">
                    <img src="static/svg/social/facebook.svg" class="social-handle"> 
                </a> 
                <a href="#">
                    <img src="static/svg/social/instagram.svg" class="social-handle">
                </a> 
                <a href="#">
                    <img src="static/svg/social/twitter-squared.png" class="social-handle">
                </a>
            </div>
        </div>

        
        <div class="row" style="margin-top:10px;">
            <h3 class="noSpace">&nbsp;</h3>
            <p class="faded-text noSpace">Video Link</p>
            <div class="left">
                <a style="font-size:13px;" :href="vprops.url">{{vprops.url}}</a>
            </div>
            <div class="left" style="font-size:12px;margin-left:20px;">
                <img class="noSpace" src="static/svg/copy.svg"> 
                <span style="position:relative;top:-12px;left:3px;">copy</span>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "ProfileUploadPublish",
        props: ["vprops", "who"],
        data(){
            return {
                duration_title: "",
                thumbnail: "",
                publishedOn: ""
            }
        },
        methods:{
            
        },
        created(){
            console.log(this.vprops);
            this.thumbnail = this.vprops.poster;
            this.publishedOn = this.vprops.created;
        }
    }
</script>

<style>
    .published-content{
        text-align: left !important;
        margin: 0px !important;
    }
    .pupload{
        border-radius: 0px !important;
        padding: 20px;
        height: 100%;
        margin-top: 10px;
    }
</style>

<style scoped>
    .social-handle{
        border-radius: 10px;
        width: 45px !important;
        margin-right: 5px !important;
    }
</style>