<template>
    <div class="ml">
        <router-link :to="{path: list.url}">
            <img :src="'/static/svg/' + list.icon" class="left menu_icon"> 
            <span class="left roboto" :class="active == true ? 'menu-active' : ''"  style="margin-top:15px;margin-left:10px;font-size:11px;">
                {{list.title}}
            </span>
        </router-link>
        <div class="clear clear-both"></div>
    </div>
</template>

<script>
    export default {
        name: "MenuList",
        props: {
            list: {
                type: Object
            }
        },
        data(){
            return {
                active: false
            }
        },
        watch:{
            $route (to){
                let to_params = to.name;
                let current_menu = this.list.title.trim().toLowerCase();

                if(to_params.trim().toLowerCase() == current_menu){
                    this.active = true;
                } else {
                    if(to_params == "view-genre" && current_menu == "genre"){
                        this.active = true;
                    } else if(to_params == "video" && current_menu == "recent videos"){
                        this.active = true;
                    } else if(to_params == "gist" && current_menu == "hot gist"){
                        this.active = true;
                    }  else if(to_params == "music" && current_menu == "hot musics"){
                        this.active = true;
                    } else this.active = false;
                }
            }
        },
        created(){
            var currentUrl = window.location.pathname.trim().toLowerCase();
            var list_lowercase = this.list.title.trim().toLowerCase();

            if(currentUrl != undefined && currentUrl.length > 0){
                currentUrl = currentUrl.replace("/", "");
                if(currentUrl == list_lowercase){
                    this.active = true;
                } else {
                    if(currentUrl.indexOf("genre") != -1 && list_lowercase == "genre"){
                        this.active = true;
                    } else if(currentUrl == "video" && list_lowercase.indexOf("video") != -1){
                        this.active = true;
                    } else if(currentUrl == "gist" && list_lowercase.indexOf("gist") != -1){
                        this.active = true;
                    } else if(currentUrl == "music" && list_lowercase.indexOf("music") != -1){
                        this.active = true;
                    } else this.active = false;
                }
            }
        }
    }
</script>

<style scoped>
    .menu-active{
        color: #a5730e;
        font-weight: 900;
    }
</style>