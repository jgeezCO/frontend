<template>
    <div class="delete-container">
        <Dialog 
            :title="header" 
            v-if="vdialog == true" 
            v-on:closeDialog="dialogVisible"
        >
            {{message}} <b>{{title}}?</b>

            <br><br>

            <center>
                <a href="#" 
                    @click.prevent="cancelHandler" 
                    class="del-con" 
                    style="background-color:#e7663f;" 
                >&times; Cancel</a> &nbsp;
                <a href="#" 
                    @click.prevent="handleDelete" 
                    class="del-con"
                >Contiue</a> &nbsp;
            </center>
            <br>
        </Dialog>
    </div>
</template>

<script>
    import axios from 'axios';  
    import Dialog from './Dialog.vue'
    
    export default {
        name: "Delete",
        props: {
            vdialog: [Boolean, String],
            header: String,
            title: String,
            id: [Number, String],
            message: {
                type: String,
                default: "Do you really want to delete?"
            },
            del_url: String
        },
        components: {
            Dialog
        },
        methods: {
            cancelHandler: function(){
                this.vdialog = false;
            },
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
            handleDelete: function(){
                let post_id = this.id;
                let post_url = this.del_url;
                let currentScope = this;

                const headers = {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + this.$store.getters.getProfile.token
                }
                
                axios({
                    method: "DELETE",
                    url: post_url,
                }, headers)
                .then(response => {
                    console.log(response.data);
                    currentScope.$emit("delete_id", post_id);
                    currentScope.vdialog = false;
                })
                .catch(error => {      
                    console.log(error);
                    alert("Failed");
                });
            }
        }
    }
</script>

<style>
    .dialog-content{
        min-height: 100px !important;
    }
    .del-con{
        padding: 8px 15px;
        background-color: rgb(14, 107, 14);
    }
</style>