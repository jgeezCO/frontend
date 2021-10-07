<template>
    <div class="follower">
        <br>
        <div class="follower-container" :key="follower.id" v-for="follower in followers">
            <div :class="follower.className">
                <div class="highlighter" :style="'background-image: url(' + follower.bkImg + ')'">
                    <center>
                        <p class="highlighter_cap poppins">{{follower.focus}}</p>
                    </center>
                </div>
                <h4 class="poppins" style="color:white;">
                    {{follower.headline}} <span class="gold-color" style="font-size: 20px;">{{follower.date}}</span>
                </h4>
                <div class="listing">
                    <ul v-bind:key="follower_data.id" v-for="follower_data in follower.data">
                        <FollowerCard 
                            :profile="follower_data" 
                            v-on:is_logged_in="authentication"
                        />
                    </ul>
                    <div class="clear"></div>
                </div>
            </div>
        </div><div class="clear"></div>
        
        <br>

        <Dialog 
            title="Authentication Required" 
            v-if="vdialog == true" 
            v-on:closeDialog="dialogVisible">

            <Display 
                img="static/assets/img/authorized.jpg" 
                text="Oops! Unauthorized Access" 
                desc="Hello there, kindly create an account or login to manage your profile"
            />
        </Dialog>
    </div>
</template>

<script>
    import uuid from "uuid";
    import FollowerCard from "./components/FollowerCard.vue";
    import Dialog from "../../modal/Dialog.vue";
    import Display from "../profile/components/upload/components/Display.vue";

    export default {
        name: "Follower",
        components: {
            FollowerCard, 
            Dialog, Display
        },
        data: function(){
            return {
                vdialog: false,
                followers: [
                    {
                        id: uuid.v1(),
                        className: "artist_container",
                        bkImg: "static/uploads/img/80/artist_focus.png",
                        focus: "Artiste Focus",
                        headline: "Most Followed Artistes",
                        date: "JULY 2021",
                        data: [
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            }
                        ]
                    },

                    {
                        id: uuid.v1(),
                        className: "creators_container",
                        bkImg: "static/uploads/img/80/artist_focus.png",
                        focus: "Creators’ Focus",
                        headline: "Most Followed Creators",
                        date: "JULY 2021",
                        data: [
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            }
                        ]
                    },
                    
                    {
                        id: uuid.v1(),
                        className: "authors_container",
                        bkImg: "static/uploads/img/80/artist_focus.png",
                        focus: "Author's focus",
                        headline: "Most Followed Authors",
                        date: "JULY 2021",
                        data: [
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            },
                            {       
                                id: uuid.v1(),         
                                name: "Bella Shrudder",
                                img: "static/uploads/img/80/1.png",
                                follower: "200k",
                                isFollowing: false
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            dialogVisible: function(type){
                this.vdialog = type == "open" ? true : false;
            },
            authentication: function(payload){
                this.vdialog = !payload;
            }
        }
    }
</script>