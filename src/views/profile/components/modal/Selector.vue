<template>
    <div class="select_container">
        <Chooser v-if="selects.selector==true" v-on:changeHandler="changeSelected" />
        <GistBody v-on:dialog_title="handleEmit" v-if="selects.gist==true" />
        <MusicBody v-if="selects.music==true" />
        <VideoBody v-on:dialog_title="handleEmit" v-if="selects.video==true" />
        <RadioBody v-if="selects.radio==true" />
    </div>
</template>

<script>
    import Chooser from "./view/Chooser.vue";
    import GistBody from "./view/GistBody.vue";
    import MusicBody from "./view/MusicBody.vue";
    import VideoBody from "./view/VideoBody.vue";
    import RadioBody from "./view/RadioBody.vue";

    export default {
        name: "Selector",
        components: {
            Chooser, RadioBody, GistBody, 
            MusicBody, VideoBody
        },
        data: function(){
            return {
                selects: {
                    selector: true,
                    music: false,
                    video: false,
                    gist: false,
                    radio: false
                }
            }
        },
        methods: {
            handleEmit: function(payload){
                this.$emit("dialogTitle", payload);
            },
            capitalize(text){
                return text.charAt(0).toUpperCase() + text.slice(1);
            },
            changeSelected: function(selected){
                if(selected == "video"){
                   this.selects.video = true;
                   this.selects.gist = this.selects.radio = this.selects.music = this.selects.selector = false;
                }
                if(selected == "music"){
                   this.selects.music = true;
                   this.selects.gist = this.selects.radio = this.selects.video = this.selects.selector = false;
                }
                if(selected == "gist"){
                   this.selects.gist = true;
                   this.selects.video = this.selects.radio = this.selects.music = this.selects.selector = false;
                }
                if(selected == "radio"){
                   this.selects.radio = true;
                   this.selects.gist = this.selects.video = this.selects.music = this.selects.selector = false;
                }
                this.$emit("dialogTitle", "Upload " + this.capitalize(selected));
            }
        }
    }
</script>

<style scoped>
    .st{
        display: inline-block;
        width: 50px;
        font-size: 13px;
        font-weight: bold;
    }
   .selector{
        display: flex;
        justify-content: center;
        
    }
    .sk_back{
        width: 35%;
        background-color: #E5E5E5;
        padding: 30px;
        margin: 30px 0px 30px 0px;
        clear: both;
        border-radius: 5px;
    }
   .selector ul{
       list-style: none;
       padding:0px;
       margin:0px;
    }
    li{
        margin-top: 20px;
    }
    .cradio .checkmark{ border: 1px solid #A5730E !important;  }
    .cradio .container:hover input ~ .checkmark { background-color: #A5730E; }
    .container input:checked ~ .checkmark { background-color: #A5730E; }

    
</style>

