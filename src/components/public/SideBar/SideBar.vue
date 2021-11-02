<template>
    <div>
        <div class="sidebar">
            <div class="demarcator">
                <div class="sidebar_pad" style="margin-left:20px;">
                    <div class="left exclude">
                        <router-link to="/">
                            <h2 class="desktop-only poppins brand_name">JGeez<img src="/static/svg/gsound.svg"></h2>
                        </router-link>
                        
                        <h3 class="mobile-only">
                            <div class="left exclude" style="margin-right: 20px;">
                                <span class="b-active">
                                    <a href="#">
                                        Explore 
                                        <span class="b-ball">&nbsp;</span>
                                    </a>
                                </span>
                            </div>
                            <div class="left exclude">
                                <span class="b-inactive">
                                    <a href="#">Brand new</a>
                                    <span class="b-ball">&nbsp;</span>
                                </span>
                            </div>
                        </h3>
                    </div>
                    <div class="clear"></div>

                    <div class="mobile-only">
                        <div class="search-bar-holder" style="margin-left:-10px;">
                            <SearchBar visible="true" />
                        </div>
                    </div>
                </div>
            </div>

            <perfect-scrollbar>
                <div class="sidebar_pad">
                    <Reminder 
                        v-if="this.$store.getters.isLoggedIn == false"
                        v-on:authorization="authorization" 
                        v-on:create_account="account" 
                    />

                    <div v-if="this.$store.getters.isLoggedIn == true" class="desktop-only" style="margin:10px 0px;">
                        <img class="noSpace left user-avatar" style="width:50px;height:50px;" 
                            :src="profile.avatar"
                        >
                        <div class="left user-profile-data" style="margin-top:7px;margin-left:8px;">
                            <a href="/profile" style="font-size:13px;color:rgba(250,250,250,0.8);">{{profile.name}}</a>
                            <p class="noSpace"><a href="#" @click="logout(profile.token)" style="font-size:11px;color:#f14336;font-weight:bold;">Logout</a></p>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <img src="/static/svg/line.svg" class="noSpace" style="width:90%;height:10px;">
                    
                    <div class="scroll-bar">
                        <SideMenu v-bind:menus="menus" />
                    </div>
                    <div class="sb"><br><br><br><br><br><br></div>
                </div>

                <img src="/static/svg/line.svg" class="noSpace mobile-only" style="width:90%;height:10px;">
            </perfect-scrollbar>
        </div>

        <transition name="signin" 
            enter-active-class="animate__animated animate__zoomIn" 
            leave-active-class="animate__animated animate__zoomOut" 
            tag="div"
        >           
            <Authorization key="authorization-modal" :email="profile.email" :authorization="visible" :login="isLogin" v-on:close-modal="closeModal"/>
        </transition>
    </div>
</template>

<script>
    import SideMenu from "./components/SideMenu.vue";
    import Authorization from "../Authorization.vue";
    import Reminder from "./components/Reminder.vue";
    import SearchBar from "../SearchBar.vue";
    import { mapGetters } from "vuex";

    export default {
        name: "SideBar",
        components: {
            SideMenu, Authorization, Reminder, SearchBar
        },
        data(){
            return {
                visible: false,
                isLogin: false,
                profile: {
                    id: "", 
                    token: "",
                    email: "", 
                    name: "",
                    avatar: "",
                    isverified: false
                },
                menus: {
                    id: 1,
                    title: "Music",
                    data: [
                        {
                            id: 1,
                            url: "playlist",
                            icon: "playlist.svg",
                            title: "Playlist"
                        },
                        {
                            id: 2,
                            url: "library",
                            icon: "library.svg",
                            title: "Library"
                        },
                        {
                            id: 3,
                            url: "chart",
                            icon: "chart.svg",
                            title: "Chart"
                        },
                        {
                            id: 4,
                            url: "genre",
                            icon: "genre.svg",
                            title: "Genre"
                        },
                        {
                            id: 5,
                            url: "artist",
                            icon: "artist.svg",
                            title: "Artist"
                        }
                    ]
                }
            }
        },
        methods: {
            ...mapGetters(["getProfile", "isLoggedIn"]),
            authorization: function(type){
                this.visible = true;
                this.isLogin = type == "login" ? true : false;
            },
            closeModal: function(){
                this.visible = false;
            },
            account: function(email_address){
                this.profile.email = email_address;
                this.visible = true;
            },
            logout: function(token){
                if(token.length > 0){
                    window.localStorage.clear();
                    setTimeout(() => {
                        location.reload();
                    }, 100);
                }
            }
        },
        created(){
            this.profile = this.getProfile();
            this.isLogin = this.isLoggedIn();
            
            console.log(this.getProfile());
        }
    }
</script>

<style>
    .ps { height: 700px; }
</style>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>