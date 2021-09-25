<template>
    <div class="sign_up_container" key="signup-modal" :style="visible == true ? 'display:block;' : 'display:none;'">
        <form action="" @submit="handleForm">
            <div class="control-style">
                <div class="left exclude" style="margin-top:5px;width:80px;border-right:2px solid rgba(255, 255, 255, 0.74)">
                    <img src="../assets/nigeria.svg" style="width:20px;height:20px;">
                    <select v-model="profile.numCode" class="roboto flat-select" style="font-size:11px;position:relative;top:-5px;">
                        <option>+234</option>
                    </select>
                </div>
                <div class="left exclude phone-no-input" style="margin-left:10px;margin-top:4px;">
                    <input type="text" v-model="profile.mobile" class="flatinput roboto" placeholder="Enter phone number">
                </div> 
                <div class="clear"></div>
            </div>

            <div class="control-style">
                <div style="margin-left:10px;">
                    <input type="text" v-model="profile.username" class="flatinput roboto" placeholder="Username">
                </div> 
            </div>

            <div class="control-style">
                <div style="margin-left:10px;">
                    <input type="text" v-model="profile.email" class="flatinput roboto" placeholder="Email Address">
                </div> 
            </div>

            <!-- <div class="control-style">
                <div class="left exclude" style="margin-left:10px;">
                    <input type="text" class="flatinput roboto" placeholder="Enter Verification Code">
                </div> 
                <div class="right exclude" style="margin-top:6px;">
                    <a href="#" style="font-size: 11px;margin-top:0px;color: #349dd9;">Get Code</a>
                </div>
                <div class="clear"></div>
            </div> -->

            <div class="control-style">
                <div class="left exclude" style="width:80%;margin-left:10px;">
                    <input :type="passvision.password == false ? 'password' : 'text'" v-model="profile.password" class="flatinput roboto" placeholder="Password (Atleast 6 characters)">
                </div> 
                <div class="right exclude" style="margin-top:6px;">
                    <a href="#" class="eyes-open" @click="tooglePasswordVisibility('password')" style="font-size: 12px;color: rgba(7, 17, 251, 1);">
                        <img src="../assets/eye-hide.svg" style="width:20px;"> 
                    </a>
                </div>
                <div class="clear"></div>
            </div>
            
            <div class="control-style">
                <div class="left exclude" style="width:80%;margin-left:10px;">
                    <input :type="passvision.cpassword == false ? 'password' : 'text'" v-model="profile.cpassword" class="flatinput roboto" placeholder="Confirm Password">
                </div> 
                <div class="right exclude" style="margin-top:6px;">
                    <a href="#" @click="tooglePasswordVisibility('cpassword')" class="eyes-open" style="font-size: 12px;color: rgba(7, 17, 251, 1);">
                        <img src="../assets/eye-hide.svg" style="width:20px;"> 
                    </a>
                </div>
                <div class="clear"></div>
            </div>

            <div class="cradio">
                <label style="font-size:12px;color:rgba(255, 255, 255, 0.51);margin-right:20px;">Gender: </label>
                
                <label style="font-size:12px;margin-right:20px;">
                    Male &nbsp;&nbsp;
                    <label class="container">
                        <input type="radio" v-model="profile.gender" value="male" checked name="gender">
                        <span class="checkmark"></span>
                    </label>
                </label>

                <label style="font-size:12px;">
                    Female &nbsp;&nbsp;
                    <label class="container">
                        <input type="radio" v-model="profile.gender" value="female" name="gender">
                        <span class="checkmark"></span>
                    </label>
                </label>
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

            <center class="cradio">
                <label class="container" style="font-size:11px;color:#eeeeee"> 
                    <span style="position:relative;top:4px;">I have read and agreed with the <a href="#" style="color:#349dd9;">Terms and Conditions</a></span>
                    <input type="radio" name="agreement" required>
                    <span class="checkmark"></span>
                </label>
            </center>

            <br>

            <center>
                <p style="font-size:12px;padding: 10px 0px;"> - Or Sign Up with - </p>
                <div style="margin-left:-5px;">
                    <SocialLogin key="signup-social-login" />
                </div>
            </center>
            
            <br> <br>

        </form>
    </div>
</template>

<script>
    import SocialLogin from "../../public/SideBar/components/SocialLogin.vue";
    import axios from "axios";

    export default {
        name: "Signup",
        props: ["visible", "email_address"],
        components: {
            SocialLogin
        },
        data(){
            return {
                submit_props: {
                    disabled: false,
                    value: "Sign Up",
                    status_report: {
                        dialog: false,
                        type: "success",
                        msg: ""
                    }
                },
                profile: {
                    numCode: "+234",
                    mobile: "",
                    username: "",
                    email: this.email_address,
                    password: "",
                    cpassword: "",
                    gender: "male"
                },
                passvision: {
                    password: false,
                    cpassword: false
                }
            }
        },
        methods: {
            tooglePasswordVisibility: function(type){
                if(type == "password"){
                    this.passvision.password = !this.passvision.password;
                } else {
                    this.passvision.cpassword = !this.passvision.cpassword;
                }
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
                this.submit_props.status_report.dialog = false;

                if(this.profile.password !== this.profile.cpassword){
                    alert("Alert password does not match");
                } else {
                    let form_data = {
                        phone_number: this.profile.numCode + this.profile.mobile,
                        email: this.profile.email,
                        username: this.profile.username,
                        password: this.profile.password,
                        country: this.profile.numCode,
                        gender: this.profile.gender
                    }

                    this.submit_props.disabled = true;
                    this.submit_props.value = "Signing up...";

                    let headers = {
                        "Content-Type": "application/json"
                    };

                    axios({
                       method: "POST",
                       url: "https://api.jgeez.co/auth/users/",
                       data: form_data
                    }, headers)
                    .then(response => {
                        this.formRequestResponse([
                            true, "Sign Up", true, "success", "Account created successfully. Kindly login"
                        ]);

                        this.profile.numCode = "+234";
                        this.profile.mobile = "";
                        this.profile.username = "";
                        this.profile.email = "";
                        this.profile.password = "";
                        this.profile.cpassword = "";
                        this.profile.gender = "male";
                        
                        console.log(response.data);
                    })
                    .catch(error => {      
                        this.formRequestResponse([
                            false, "Try again...", true, "failed", "Failed while creating account... Try again"
                        ]);

                        console.log(error);
                    });
                }
            }
        }
    }
</script>

<style>
    .eyes-open{
        position:absolute;
        margin-top:-4px;
        margin-left:-20px;
    }
</style>