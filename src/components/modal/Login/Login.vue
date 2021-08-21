<template>
    <div class="sign_in_container" :style="visible == true ? 'display:block;' : 'display:none;'">
        <form action="">
            <div class="control-style">
                <div class="left exclude" style="margin-top:5px;width:80px;border-right:2px solid rgba(255, 255, 255, 0.74)">
                    <img src="../assets/nigeria.svg" style="width:20px;height:20px;">
                    <select class="roboto flat-select" style="font-size:11px;position:relative;top:-5px;">
                        <option>+234</option>
                    </select>
                </div>
                <div class="left exclude phone-no-input" style="margin-left:10px;margin-top:4px;">
                    <input type="text" class="flatinput roboto" placeholder="Enter phone number">
                </div> 
                <div class="clear"></div>
            </div>

            <div class="control-style">
                <div class="left exclude flatinput-container" style="width:80%;margin-left:10px;">
                    <input type="text" class="flatinput roboto" placeholder="Password (Atleast 6 characters)">
                </div> 
                <div class="right exclude" style="margin-top:6px;">
                    <a href="#" class="eyes-open" style="font-size: 12px;color: rgba(7, 17, 251, 1);">
                        <img src="../assets/eye-hide.svg" style="width:20px;"> 
                    </a>
                </div>
                <div class="clear"></div>
            </div>

            <div style="margin-top:10px;margin-bottom:10px;">
                <a href="#" style="color:#349dd9;font-size:12px;">Forgot Password?</a>
            </div>

            <br><br><br>

            <center>
                <input type="submit" value="Login" style="color:white;font-size:12px;padding:15px;" class="roboto app-btn-block">
            </center>

            <br>

            <center>
                <p style="font-size:12px;padding: 10px 0px;"> - Or Sign Up with - </p>
                <div style="margin-left:-5px;">
                    <SocialLogin key="login-social-modal" />
                </div>
            </center>
            
            <br> <br>
        </form>
    </div>
</template>

<script>
    import SocialLogin from "../../public/SideBar/components/SocialLogin.vue";
    import { mapGetters } from "vuex";

    export default {
        name: "Login",
        props: ["visible", "email_address"],
        components: {
            SocialLogin
        },
        computed: mapGetters(["user_profile"])
    }
</script>