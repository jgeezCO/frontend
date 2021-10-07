<template>
  <div class="mobile-navigation" ref="navigation" :style="'top: ' + top_position" v-if="is_mobile == true">
      <ul>
        <li>
            <router-link to="/music">
                <center>
                    <img src="static/svg/mobile-music.svg" class="mobile-nav-icon"> 
                    <h4>Music</h4>
                </center>
            </router-link>
        </li>
        <li>
            <router-link to="/video">
                <center>
                    <img src="static/svg/mobile-video.svg" class="mobile-nav-icon"> 
                    <h4>Video</h4> 
                </center>
            </router-link>
        </li>
        <li>
            <router-link to="/gist">
                <center>
                    <img src="static/svg/mobile-gist.svg" class="mobile-nav-icon" style="width:30px;"> 
                    <h4>Gist</h4> 
                </center>
            </router-link>
        </li>
        <li>
            <router-link to="/profile">
                <center>
                    <img src="static/svg/mobile-profile.svg" class="mobile-nav-icon"> 
                    <h4>Profile</h4> 
                </center>
            </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "MobileNavigation",
        data(){
            return {
                is_mobile: window.is_mobile(),
                top_position: (window.innerHeight - 120) + "px"
            }
        },
        mounted(){
            if(this.is_mobile == true){
                let window_height = window.innerHeight;
                let dom_height = this.$refs.navigation.clientHeight;

                let difference = (window_height - dom_height) + 27;

                this.top_position = difference + "px !important;"
            }
        }
    }
</script>

<style>
    .mobile-navigation ul{
        margin: 0px;
        padding: 0px;
        list-style: none;
        color: white;
    }
    .mobile-navigation li{
        float: left;
        color: white;
        width: 25%;
    }
    .mobile-navigation li h4{
        font-size: 11px;
        color: white;
        padding: 0px;
        margin: 0px;
    }
    .mobile-navigation{
        width: 100%;
        height: 80px;
        position: fixed;
        top: 88%;
        left: 0%;
        background-color: rgba(23, 23, 26, 1);
        box-shadow: 0px -1px 5px rgba(250,250,250, 0.3);
        padding: 10px 0px;
        z-index: 2 !important;
    }
    .mobile-nav-icon{
        width: 25px;
    }
</style>