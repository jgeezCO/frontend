<template>
    <div class="video_edit">
        <Dialog 
            title="Edit Video" 
            v-if="vdialog == true" 
            v-on:closeDialog="dialogVisible">

            <ProfileUploadVideo 
                :data="editting_data" 
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
        props: ["vdialog", "edit_data"],
        components: {
            ProfileUploadVideo, 
            Dialog
        },
        methods: {
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
        },
        computed: {
            editting_data: function(){
                console.log(this.edit_data);
                return this.edit_data;
            }
        }
    }
</script>

<style>
    
</style>