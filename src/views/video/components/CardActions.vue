<template>
    <div class="card_container">
        <a href="#" @click.prevent="toggleDropdown" style="margin-right:10px;font-size:20px;letter-spacing:2px;">
            <span>...</span>
        </a>
        <div v-if="dropdown == true" class="card_actions" @mouseleave="handleFocus">
            <ul class="noStyle">
                <li><a href="#" @click.prevent="handleEdit">&#128394; Edit</a></li>
                <li style="border: .2px solid rgba(250,250,250,0.2);margin: 3px 0px;"></li>
                <li><a href="#" @click.prevent="handleDelete">&times; Delete</a></li>
            </ul>
        </div>
        
        <Delete 
            header="Delete Video" 
            :message="'Do you want to delete'" 
            :title="vtitle" 
            :del_url="delete_url"
            :id="id" 
            :vdialog="vdialog" 
            v-on:delete_id="$emit('delete_id', id)"
        />
    </div>
</template>

<script>
    import Delete from '../../../modal/Delete.vue';

    export default {
        name: "CardActions",
        props: ["id", "vtitle", "type"],
        data(){
            return {
                vdialog: false,
                dropdown: false,
                delete_url: ""
            }
        },
        components: {
            Delete
        },
        methods: {
            toggleDropdown: function(){
                this.dropdown = !this.dropdown;
            },
            handleFocus: function(){
                this.dropdown = false;
            },
            handleDelete: function(){
                this.vdialog = true;
            },
            handleEdit: function(){
                this.$emit("" + this.type + "_edit", this.id);
            }
        },
        created(){
            if(this.type == "video"){
                this.delete_url = "https://api.jgeez.co/api/post/video/delete/";
            } else if(this.type == "music"){
                this.delete_url = "https://api.jgeez.co/api/post/audio/delete/"
            } else {
                this.delete_url = "https://api.jgeez.co/api/post/gist/delete/";
            }
            if(this.delete_url.length > 0){
                this.delete_url += this.id
            }
        }
    }
</script>

<style>
    .noStyle{
        padding: 0px;
        margin:0px;
        list-style: none;
    }
    .card_container a{
        font-size: 12px;
        color: white;

    }
    .card_actions{
        background-color: #a5730e;
        padding: 10px;
        position: absolute;
        width: 80px !important;
        z-index: 1;
    }
</style>