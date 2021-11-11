<template>
    <div class="app-body-content">
        <h1><b style="color:#a5730e">JGeez</b> Chart</h1>
        <br><br><br>
        <center>
            <img src="/static/svg/mdownload.svg" style="width:100px;">
            <h4>Hello there, <u>chart</u> is not supported on the web. Kindly download the mobile app</h4>
    
            <a href="#" class="upload_btn">
                <img src="/static/svg/mplaystore.svg" style="width:30px;"> 
                <span style="position:relative;top:-10px;left:8px;color:white;display:inline-block;">Android</span>
            </a>
            <a href="#" class="upload_btn">
                <img src="/static/svg/mappstore.svg" style="width:30px;"> 
                <span style="position:relative;top:-10px;left:8px;color:white;display:inline-block;">iOS</span>
            </a>
        </center>
    </div>
</template>

<script>
    
    export default {
        name: 'Chart'
    }
</script>

<style scoped>
    .upload_btn{
        padding: 25px 30px 5px 10px;
    }
</style>