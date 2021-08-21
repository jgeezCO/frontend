<template>
    <div class="display">
        <center>
            <img v-if="img.length > 0" :src="img" class="display-img">
            <h3 class="noSpace">{{text}}</h3>
            <p class="noSpace" style="width: 300px;font-size:12px;">{{desc}}</p>
            <div style="margin-top:20px;">
                <a href="#" class="upload_btn">Upload</a>
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