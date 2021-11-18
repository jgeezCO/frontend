<template>
    <div class="display" :style="reduceSize == true ? 'margin-top:50px;' : ''">
        <center>
            <img v-if="img.length > 0" :src="img" class="display-img" :style="reduceSize == true ? 'width:100px;' : ''">
            <h3 class="noSpace">{{text}}</h3>
            <p class="noSpace" style="width: 300px;font-size:12px;">{{desc}}</p>
            
            <div style="margin-top:20px;" v-if="button == true">
                <a href="#" v-if="this.$store.getters.isLoggedIn == false" class="upload_btn">
                    Sign-Up / Sign-In
                </a>
                
                <a href="#" v-if="this.$store.getters.isLoggedIn == true" class="upload_btn">
                    Upload
                </a>
            </div>
        </center>
        <br><br><br>
    </div>
</template>

<script>
    export default {
        name: "Display",
        props: {
            img: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            },
            button: {
                type: Boolean,
                default: true
            },
            reduceSize: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            triggerAuthentication: function(){
                // var element = document.getElementsByClassName("authent-con");
                // if(element.length > 0){
                //     element.click();
                // }
            }
        }
    }
</script>

<style scoped>
    .display{
        margin-top: 100px;
    }
    .display-img{
        width: 200px;
        border-radius:5px;
    }
</style>