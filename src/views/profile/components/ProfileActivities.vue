<template>
    <div class="profile-activities">
        <div class="inner">
            <div class="left exclude" v-if="this.$store.getters.isLoggedIn == true" >
                <img :src="avatar" class="left proimg">
                <div class="left exclude profile-img-body" style="margin-left: 8px;margin-top:5px;">
                    <h5 class="noSpace">{{profile}}</h5>
                    <p class="noSpace" style="font-size: 12px;">{{follower}} followers</p>
                </div>
            </div>
            
            <div class="left exclude" v-if="this.$store.getters.isLoggedIn == false">
                <a href="#" style="display:inline-block;margin-top:10px;" class="upload_btn">Sign In / Sign up</a>
            </div>

            <div class="right exclude" style="margin-top:10px;">
                <a href="#" class="upload_btn" @click="$emit('open-dialog', 'open')">Upload</a> 
                <a href="#" class="upload_btn" @click="$emit('manage-profile')">Manage</a> 
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileActivities",
        data(){
            return {
                profile: this.$store.getters.getProfile.name,
                avatar: this.$store.getters.getProfile.avatar,
                follower: "0"
            }
        }
    }
</script>

<style>
    .upload_btn{
        padding: 5px 20px;
        background-color: #A5730E;
        font-size: 14px;
        color: white;
        margin-left: 15px;
        border-radius: 5px;
        font-size: 12px;
    }
    .profile-activities{
        background-color: black;
        width: 100%;
        position: relative;
        top: -20px;
        z-index: 0;
    }
    .inner{
        width: 90%;
        margin: 5px auto;
        padding: 25px 0px;
    }
    .proimg{
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 900px) {
        .profile-img-body{
            margin-left: 0px !important;
        }
    }
</style>