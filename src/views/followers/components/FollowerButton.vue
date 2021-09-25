<template>
    <a href="#" @click.prevent="toggleFollow(id)" class="artist-follow">{{isFollowing == true ? "Followed" : "Follow"}}</a>
</template>

<script>
    import axios from "axios";
    export default {
        name: "FollowerButton",
        props: ["id", "isFollowing"],
        methods: {
            toggleFollow: function(id){
                id = 6;
                this.handleRequest(id);
            },
            async handleRequest(id){
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
                    alert(response.data + "=== response data from follow")
                })
                .catch(error => {
                    alert(error)
                });
            }
        }
    }
</script>