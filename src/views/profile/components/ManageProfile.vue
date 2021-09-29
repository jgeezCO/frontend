<template>
    <div>
        <Display 
            v-if="this.$store.getters.isLoggedIn == false" 
            img="static/assets/img/authorized.jpg" 
            text="Oops! Unauthorized Access" 
            desc="Hello there, kindly create an account or login to manage your profile"
        />

        <div v-if="this.$store.getters.isLoggedIn == true" >
            <br>
            <center>
                <h2>Manage Profile</h2>
            </center>
            <div class="manage-profile">
                <form method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <div class="left">
                            <img :src="profile.avatar != null  
                                ?  profile.avatar 
                                : './static/svg/avatar.svg'" class="profileimg"
                            >
                        </div>
                        <div class="left">
                            <input @change="previewImage" accept="image/*" type="file" class="transfile">
                            <a href="#" style="font-weight:bold;font-size:12px;color:#a5730e;display:inline-block;margin-top:20px;">
                                {{
                                    this.$store.getters.getProfile.avatar == null 
                                    ? 'Upload Avatar' : 'Change Avatar'
                                }}
                            </a>
                            <div v-if="save_btn.visible == true" class="confirm-upload" style="margin-top:5px;">
                                <a @click.prevent="handleProfileUpload" disabled="disabled" href="#" style="display:inline-block;margin-top:4px;padding: 1px 8px;font-size:12px;background-color:white;border:2px solid #a5730e;color:#a5730e;">
                                    {{save_btn.title}}
                                </a>
                            </div>
                        </div>
                        <div class="clear"></div>

                        <img style="margin:20px auto;display:block;width:100%;" src="static/svg/line.svg">

                    </div>
                    <div class="form-group">
                        <label>Fullname</label>
                        <input type="text" v-model="profile.name" placeholder="Fullname" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input readonly v-model="profile.email" placeholder="Email address" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input placeholder="Mobile number" v-model="profile.phone" readonly type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="profile.password" placeholder="Change password" class="form-control">
                    </div>
                    <br>

                    <div>
                        <input type="submit" class="subbtn" value="Update Profile">
                    </div>
                </form>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
    import axios from "axios";
    import Display from "./upload/components/Display.vue";

    export default {
        name: "ManageProfile",
        components: {
            Display
        },
        data(){
            return {
                upload_success: false,
                profileImgRaw: null,
                profileImgString: null,
                previousImg: null,
                save_btn: {
                    title: "Save",
                    visible: false,
                    disabled: false,
                },
                profile: {
                    name: this.$store.getters.getProfile.name,
                    phone: this.$store.getters.getProfile.phone,
                    email: this.$store.getters.getProfile.email,
                    avatar: this.$store.getters.getProfile.avatar,
                    password: ""
                }
            }
        },
        methods: {
            previewImage: function(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                this.profileImgRaw = image;
                reader.onload = e =>{
                    this.profile.avatar = e.target.result;
                    this.profileImgString = e.target.result;
                    this.save_btn.visible = true;
                    this.save_btn.disabled = false;
                };
            },
            handleProfileUpload: function(){
                var currentScope = this;
                var form_data = new FormData();

                currentScope.upload_success == false
                form_data.append("profile_picture", this.profileImgRaw);
                
                this.previousImg = this.$store.getters.getProfile.avatar;
                this.save_btn.title = "Saving...";
                this.save_btn.disabled = true;

                axios({
                    method: 'post',
                    url: 'https://api.jgeez.co/auth/users/profile/picture/upload/',
                    withCredentials: false,
                    data:  form_data,
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'content-type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + currentScope.$store.getters.getProfile.token
                    }
                })
                .then(response => { 
                    let status_code = response.status == 204 ? true : false;
                    if(status_code == true){
                        currentScope.upload_success = status_code;
                    }
                    currentScope.update_savebtn_state(status_code, currentScope.profileImgString);
                })
                .catch(error => {
                    if(currentScope.upload_success == false){
                        console.log(error);
                        currentScope.update_savebtn_state(false);
                    }
                });
            },
            update_savebtn_state: function(status, profileRawString){
                this.save_btn.title = status == true ? "Saved" : "Failed! Try again...";
                this.save_btn.disabled = status == true ? true : false;

                if(status == true){
                    let newState = this.$store.getters.getProfile;
                    newState.avatar = profileRawString;
                    this.$store.commit('updateProfileState', newState);
                }
            },
        }
    }
</script>

<style scoped>
    .transfile{
        opacity:0;
        width: 100px;
        margin-top:20px;
        position:absolute;
        height: 30px;
        cursor:pointer;
    }
    .profileimg{
        width: 80px;
        height: 80px;
        border-radius: 360px;
        border: 1px solid white;
        margin-right: 10px;
    }

    .form-group{
        display: block;
        width: 100%;
        margin-bottom: 10px;
    }

    .form-group label{
        width: 90%;
        font-size: 12px;
    }

    .form-control{
        width: 96.5%;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }

    .manage-profile{
        width: 60%;
        background-color: #000000;
        padding: 10px;
        border-radius: 3px;
        margin: 20px auto;
        border: 1px solid rgba(255,255,255,0.3);
    }

    .subbtn{
        width: 99.5%;
        display: block;
        background-color: #a5730e;
        color: white;
        padding: 10px;
        border: none;
    }
    @media screen and (max-width: 900px) {

    }
</style>