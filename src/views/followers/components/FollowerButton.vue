<template>
    <a href="#" 
        @click.prevent="toggleFollow(id)" 
        class="artist-follow"
    >
        {{isFollowing == true ? "Followed" : follow_status}}
    </a>
</template>

<script>
    import axios from "axios";
    export default {
        name: "FollowerButton",
        props: ["id", "isFollowing"],
        data(){
            return {
                follow_status: "Follow"
            }
        },
        methods: {
            toggleFollow: function(id){
                let is_logged_in = this.$store.getters.isLoggedIn;
                if(is_logged_in == true){
                    this.handleRequest(id);
                } else {
                    this.$emit("is_logged_in", false);
                }
            },
            async handleRequest(id){
                this.follow_status = "Following...";
                let currentScope = this;
                let url = this.isFollowing == true
                ? 'https://api.jgeez.co/auth/users/unfollow' 
                : 'https://api.jgeez.co/auth/users/follow/';

                await axios({
                    method: 'put',
                    url: url + id,
                    data:  {
                        user_id: id
                    },
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + this.$store.getters.getProfile.token
                    }
                })
                .then(response => { 
                    currentScope.follow_status = "Followed";
                    alert(response.data + "=== response data from follow")
                })
                .catch(error => {
                    currentScope.follow_status = "Follow";
                    alert(error);
                });
            }
        }
    }
</script>