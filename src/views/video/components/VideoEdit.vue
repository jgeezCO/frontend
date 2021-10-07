<template>
    <div class="video_edit">
        <Dialog 
            title="Edit Video" 
            v-if="vdialog == true" 
            v-on:closeDialog="dialogVisible">

            <ProfileUploadVideo 
                :edit_data="edit_data" 
                edit 
            />
        </Dialog>
    </div>
</template>

<script>
    import Dialog from '../../../modal/Dialog.vue';
    import ProfileUploadVideo from '../../profile/components/modal/modules/video/ProfileUploadVideo.vue'
    
    export default {
        name: "VideoEdit",
        props: {
            vdialog: {
                type: [String, Boolean]
            },
            edit_data: {
                type: [String, Object],
                default: null
            }
        },
        components: {
            ProfileUploadVideo, 
            Dialog
        },
        methods: {
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
        },
        created(){
            console.log("Hello world");
            console.log(this.edit_data);
        }
    }
</script>

<style>
    
</style>