<template>
    <div class="placeholder" id="account_placeholder" style="background-image: url(./static/assets/img/sbd.png);">
        <p class="poppins" style="margin:20px;text-align:center;font-size:12px;">Create a <b>JGeez</b> Account</p>
        
        <form method="post" @submit.prevent="$emit('create_account', email_address);">
            <input type="email" v-model="email_address" placeholder="email address" style="font-size:11px;" name="app_email" class="poppins flat_input">
        </form>

        <br>
        
        <a href="#" @click="$emit('authorization','signup')">
            <p class="poppins" style="color:rgba(255,255,255,0.7);font-size:11px;font-weight:normal;text-align:center">Sign Up</p>
        </a>

        <center>
            <SocialLogin />
            
            <p class="poppins" style="font-size:11px;"> If you have an account? 
                <a href="#" @click="$emit('authorization','login')" style="color: #5abb79;">Sign In here</a>
            </p>
        </center>
    </div>
</template>

<script>
    import SocialLogin from "./SocialLogin.vue";

    export default{
        name: "Reminder",
        data: function(){
            return {
                email_address: ""
            }
        },
        components: {
            SocialLogin
        }
    }
</script>