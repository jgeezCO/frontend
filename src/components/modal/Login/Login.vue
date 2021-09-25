<template>
    <div class="sign_in_container" :style="visible == true ? 'display:block;' : 'display:none;'">
        <form action="" @submit="handleForm" method="post">
            <div class="control-style">
                <div style="margin-left:10px;">
                    <input type="text" v-model="profile.username" class="flatinput roboto" placeholder="Username">
                </div> 
            </div>

            <div class="control-style">
                <div class="left exclude flatinput-container" style="width:80%;margin-left:10px;">
                    <input :type="passvision.password == false ? 'password' : 'text'" v-model="profile.password" class="flatinput roboto" placeholder="Password (Atleast 6 characters)">
                </div> 
                <div class="right exclude" style="margin-top:6px;">
                    <a href="#" @click="tooglePasswordVisibility()" class="eyes-open" style="font-size: 12px;color: rgba(7, 17, 251, 1);">
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
                <input type="submit" :disabled="submit_props.disabled" :value="submit_props.value" style="color:white;font-size:12px;padding:15px;" class="roboto app-btn-block" :class="submit_props.disabled == true ? 'disabled' : ''">
            </center>

            <div v-if="submit_props.status_report.dialog == true" class="alert" :class="submit_props.status_report.type == 'success' ? 'alert-success' : 'alert-danger'">
                <div class="alert-content">
                    {{submit_props.status_report.msg}}
                </div>
            </div>

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
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Login",
        props: ["visible", "email_address"],
        data(){
            return {
                submit_props: {
                    disabled: false,
                    value: "Login",
                    status_report: {
                        dialog: false,
                        type: "success",
                        msg: ""
                    }
                },
                profile: {
                    username: "",
                    password: ""
                },
                passvision: {
                    password: false,
                }
            }
        },
        components: {
            SocialLogin
        },
        computed: {
            ...mapGetters(["getProfile"]), 
        },
        methods: {
            ...mapActions(["authenticate"]),
            redirect: function(){
                this.submit_props.value = "Logged In";
            },
            tooglePasswordVisibility: function(){
                this.passvision.password = !this.passvision.password;
            },
            formRequestResponse: function(report){
                this.submit_props.disabled = report[0];
                this.submit_props.value = report[1];

                this.submit_props.status_report.dialog = report[2];
                this.submit_props.status_report.type = report[3];
                this.submit_props.status_report.msg = report[4];
            },
            handleForm: function(e){
                e.preventDefault();

                let str_username = this.profile.username;
                let str_password = this.profile.password;
                this.submit_props.status_report.dialog = false;

                if(str_username.length <= 0 || str_password.length <= 0){
                    alert("Password cannot be empty");
                } else {
                    this.submit_props.disabled = true;
                    this.submit_props.value = "Signing in...";
                    
                    let form_data = new FormData();
                    form_data.append("username", str_username);
                    form_data.append("password", str_password);

                    window.localStorage.removeItem("login");
                    this.authenticate(form_data);
                }
            }
        }
    }
</script>