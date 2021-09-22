<template>
    <div class="container_holder">
        <center>
            <br>
            
            <Dropzone title="Your video will be private until it is published by you." />

            <br><br>

            <a href="#" class="upload_btn" style="padding: 5px 50px;">Select file</a>

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
        name: "VideoBody",
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

