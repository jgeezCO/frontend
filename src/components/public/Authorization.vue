<template>
    <div class="modal" id="modal-open" :style="authorization == true ? 'display:block' : 'display:none'">
        <br><br>

        <center>
            <a href="#" @click="$emit('close-modal')" style="font-size:12px;color:red;padding:5px;text-align:center;">&times; Close</a>
        </center>
        
        <div class="modal-container">
            <div class="inner-modal">
                <h5 class="noSpace">
                    <a href="#" @click="toggleSign('signup')" class='authent-con' :class="visibility.login == false ? 'mactive' : 'minactive'">SIGN UP</a> &nbsp;
                    <a href="#" @click="toggleSign('login')" class='authent-con' :class="visibility.login == true ? 'mactive' : 'minactive'">LOGIN IN</a>
                </h5>

                <br><br>

                <Login key="trans-login" :email_address="email" :visible="visibility.login" />
                <Signup key="trans-signup" :email_address="email" :visible="visibility.signup" />
            </div>
        </div>
    </div>
</template>

<script>
    import Login from '../modal/Login/Login.vue'
    import Signup from '../modal/Signup/Signup.vue'

    export default {
        name: "Authorization",
        components: {
            Login, Signup
        },
        props: {
            authorization: {
                type: Boolean
            },
            login: {
                type: Boolean
            },
            email: {
                type: String
            }
        },
        data(){
            return {
                visibility: {
                    login: true,
                    signup: false
                }
            }
        },
        methods: {
            toggleSign: function(type){
                this.visibility.login = type == "login" ? true : false;
                this.visibility.signup = type == "signup" ? true : false;
            }
        }
    }
</script>

<style>
    .inner-modal{
        width: 90%;
        margin: 5px auto;
    }

</style>