<template>
    <div class="container_holder">
        <center>
            <br>
            
            <Dropzone title="Your music will be private until it is published by you." />

            <br><br>

            <a href="#" class="upload_btn" style="padding: 5px 30px;">Select file</a>
            <a href="#" class="upload_btn" style="padding: 5px 30px;">Start writing</a>

            <p style="width:80%;font-size:12px;">
                By uploading your video to Jgeez, 
                you acknowledge that you agree with our Terms of service and Privacy statement.
            </p>
        </center>
    </div>
</template>

<script>
    import Dropzone from "./Dropzone.vue";

    export default {
        name: "MusicBody",
        components: {
            Dropzone
        }
    }
</script>

<style scoped>
    .container_holder{
        padding: 10px;
    }
    
</style>

