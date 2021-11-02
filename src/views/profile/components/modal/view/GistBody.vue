<template>
    <div class="gistbody">
        <div class="container_holder">
            <div class="row" v-if="preview == false">
                <div class="left" style="margin-right:20px;">
                    <h3 class="noSpace">Details</h3>
                    <div class="simple-input">
                        <p class="faded-text noSpace">Title</p>
                        <textarea cols="40" rows="3" v-model="dialogTitle"></textarea>
                    </div>
                </div>
                <div class="left">
                    <div class="video-uploading" style="margin-top:8px;width: 190px;height:100px !important;">
                        <img v-if="thumbnail != null" :src="thumbnail" style="background-size:contain;z-index:0;position:absolute;display:inline-block;width: 190px;height:100px;">
                        <div class="video-uploading-content" style="position:relative;z-index:1;margin-top:20px;width: 100%;height:100% !important;border-radius:10px;background-color:rgba(204, 210, 227, 0.56);">
                            <center style="padding-top:20px;">
                                <input accept="image/*" @change="previewImage" type="file" style="opacity:0;position:absolute;margin-top:0px;width:50px;height:35px;background-color:white;">
                                <img src="static/svg/add.svg">
                                <p style="font-weight:bold;font-size:12px;">Upload photos</p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="clear"></div>

            <div class="row" style="margin-top:30px;">
                <div class="left">
                    <div class="simple-input">
                        <div v-if="preview == false">
                            <p class="faded-text noSpace"><b>Description</b></p>
                            <p class="faded-text noSpace">Tell viewers about your video</p>
                        </div>
                        <div v-if="preview == true" style="width: 100%;">
                            <div class="img_container" style="width:100%;max-height:200px;overflow:hidden;">
                                <img :src="thumbnail" style="display: block;width: 100%;">
                            </div>
                            <div class="preview-content">                
                                <div class="left" style="width: 80%;overflow:hidden;">
                                    <h3>{{dialogTitle}}</h3>
                                </div>
                                <div class="right" style="width:15%;overflow:hidden;">
                                    <h5 style="font-size:12px;color:rgba(0, 0, 0, 0.6)">By Ben Igwe</h5>
                                </div>

                                <div class="clear"></div>
                            </div>
                        </div>
                        <textarea v-model="gist.desc" cols="65" rows="20" @keyup="handleTextCount"></textarea>
                        <p class="right noSpace" style="font-size:12px;">
                            <span class="text_counter">{{current_count}}</span> / {{desc_total_count}}
                        </p>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            
            <div class="clear"></div>
            
            <br><br>

            <center>
                <button :disabled="btn_disabled == true ? 'disabled' : false" class="upload_btn" @click="handleGistPreview" style="display:inline-block;width:200px;padding: 0px 50px;border:none;">
                    <img v-if="btn_disabled == true" src="static/svg/loading.svg" class="left" style="width:30px;height:30px;"> 
                    <p :class="btn_disabled == true ? 'left' : ''" :style="btn_disabled == true ? 'margin-top:-21px;margin-left:28px;' : ''">{{btn_disabled == true ? 'Sharing Gist...' : 'Next' }}</p>
                    <div class="clear" style="width:0px;height:0px;position:absolute;top:0px;"></div>
                </button>
            </center>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import axios from "axios";

    export default {
        name: "GistBody",
        data(){
            return {
                preview: false,
                btn_disabled: false,
                thumbnail: null,
                binary: null,
                dialogTitle: "",
                desc_total_count: 1000,
                current_count: 0,
                gist: {
                    url: "",
                    desc: "",
                    poster: null
                }
            }
        },
        methods:{
            ...mapActions(["logout"]),
            handleTextCount: function(){
                let description = this.gist.desc;
                this.current_count = description.length;

                if(this.current_count <= this.desc_total_count){
                    this.gist.prev_desc = description;
                } else {
                    let cutpost = this.gist.desc.substr(0, this.desc_total_count - 1);
                    this.gist.desc = cutpost;
                }
            },
            previewImage: function(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                this.profileImgRaw = image;
                reader.onload = e =>{
                    this.gist.poster = image;
                    this.thumbnail = e.target.result;
                };
            },
            handleGistPreview: function(){
                if(this.preview == true){
                    this.submitGist();
                } else {
                    this.$emit("dialog_title", "Content Preview");
                    this.preview = true;
                }
            },
            submitGist: function(){
                var currentScope = this;
                var post_url = "https://api.jgeez.co/api/post/gist/create/";
                this.btn_disabled = true;

                var form_data = new FormData();
                form_data.append("title", this.dialogTitle);
                form_data.append("text", this.gist.desc);
                // form_data.append("featuredImg", this.gist.poster);
                
               
                axios({
                    method: 'post',
                    url: post_url,
                    withCredentials: true,
                    data:  form_data,
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
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
                            response.data.post.created
                        );
                    }
                })
                .catch(error => {
                    let status = error.response.status;
                    this.btn_disabled = false;

                    if(status == 401){
                        alert("Kindly login again");
                        this.logout();
                    } else {
                        alert("Oops! Something went wrong");
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .container_holder{
        padding: 10px;
    }
</style>

