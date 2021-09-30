<template>
    <div class="card_container">
        <a href="#" @click.prevent="toggleDropdown">...</a>
        <div v-if="dropdown == true" class="card_actions" @focus="handleFocus">
            <ul class="noStyle">
                <li><a href="#" @click.prevent="$emit('video-edit', id)">&#128394; Edit</a></li>
                <li style="border: .2px solid rgba(250,250,250,0.2);margin: 3px 0px;"></li>
                <li><a href="#" @click.prevent="handleDelete">&times; Delete</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardActions",
        props: ["id"],
        data(){
            return {
                dropdown: false
            }
        },
        methods: {
            toggleDropdown: function(){
                this.dropdown = !this.dropdown;
            },
            handleFocus: function(e){
                console.log(e);
                console.log("Hello");
            },
            handleEdit: function(){

            },
            handleDelete: function(){
                
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
    }
</style>