<template>
    <div class="create_playlist">
        <div>
            <input 
                type="text" 
                v-model="playlist_title" 
                class="poppins flat_input" 
                placeholder="Enter title"
            >

            <div class="cradio" style="margin-left:-20px;">
                <label style="font-size:12px;color:rgba(255, 255, 255, 0.51);margin-right:20px;">Gender: </label>
                
                <label style="font-size:12px;margin-right:20px;">
                    Set as public &nbsp;&nbsp;
                    <label class="container">
                        <input type="radio" v-model="publicity"  value="public" checked name="publicity">
                        <span class="checkmark" style="background-color:#a5730e;"></span>
                    </label>
                </label>

                <label style="font-size:12px;">
                    Set as private &nbsp;&nbsp;
                    <label class="container" >
                        <input type="radio" v-model="publicity" value="private" name="publicity">
                        <span class="checkmark" style="background-color:#a5730e;"></span>
                    </label>
                </label>
            </div>

            <div class="clear"></div>
            
            <button type="button" @click.prevent="handle_new_playlist" class="upload_btn" style="width: 100%;text-align:center;">
                Done
            </button>

            <a href="#" @click.prevent="$emit('return_to_playlist')" style="font-size:12px;color:black;font-weight:bold;"> 
                <span class="fa fa-arrow-left"></span> 
                Return to playlist
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreatePlaylist",
        props: ["id"],
        data(){
            return {
                playlist_title: "",
                publicity: "public"
            }
        },
        methods: {
            handle_new_playlist: function(){
                let post_id = this.id;
                if(post_id != -255){
                    console.log(post_id);
                }
            }
        }
    }
</script>

<style scoped>
    .flat_input{
        background-color: rgba(34,39,50,0.5) !important;
        padding: 15px 8px;
        width: 95%;
        border-radius: 3px;
        color: black !important;
        margin-bottom: 10px;
    }
    .upload_btn{
        padding:10px 0px;
        margin:0px;
        margin-top:23px;
        border: none;
    }
</style>