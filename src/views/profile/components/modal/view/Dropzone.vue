<template>
    <vue-dropzone
        ref="myVueDropzone"
        :include-styling="false"
        :useCustomSlot="true"
        id="dropzone"
        @vdropzone-upload-progress="uploadProgress"
        :options="dropzoneOptions"
        @vdropzone-file-added="fileAdded"
        @vdropzone-sending-multiple="sendingFiles"
        @vdropzone-success-multiple="success">
        <img src="static/svg/upload.svg" style="width:40px;height:40px;">
        <h5 style="font-weight:bold;" class="noSpace">Drag and drop your files here to upload</h5>
        <p style="font-size:13px;margin-top:2px;padding:0px;">{{title}}</p>
    </vue-dropzone>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone';
    import 'vue2-dropzone/dist/vue2Dropzone.min.css';

    export default{
        name: "Dropzone",
        props: ["title"],
        data: function () {
            return {
                dropzoneOptions: {
                    url: `https://httpbin.org/post`,
                    maxFilesize: 102400000,
                    dictDefaultMessage: "Drag and drop your files here to upload",
                    includeStyling: false,
                    previewsContainer: false,
                    thumbnailWidth: 250,
                    thumbnailHeight: 140,
                    uploadMultiple: true,
                    parallelUploads: 20
                }
            }
        },
        components: {
            vueDropzone: vue2Dropzone
        }
    }
</script>
