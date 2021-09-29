<template>
    <div class="dropper">
        <img src="static/svg/upload.svg" style="width:40px;height:40px;">
        <h5 style="font-weight:bold;" class="noSpace">Select the files here to upload</h5>
        <p style="font-size:13px;margin-top:2px;padding:0px;">{{title}}</p>
    </div>
</template>

<script>

    export default{
        name: "Dropzone",
        props: ["title"],
        data: function () {
            return {
                
            }
        }
    }
</script>
