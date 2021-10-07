<template>
    <li class="left exclude">
        <div class="left exclude">
            <img class="himg" :src="profile.img"> 
        </div>
        <div class="right exclude">
            <h5 class="noSpace poppins" style="color:white;">{{profile.name}}</h5>
            <p class="noSpace poppins" style="color:white;font-size:12px;">
                <b class="gold-color">{{profile.follower}}</b> new fans
            </p>
            
            <FollowerButton 
                v-on:is_logged_in="$emit('is_logged_in', is_logged_in)" 
                :id="profile.id" 
                :isFollowing="profile.isFollowing" 
            />
        </div>
    </li>
</template>

<script>
    import FollowerButton from "./FollowerButton.vue";
    export default {
        name: "FollowerCard",
        props: ["profile"],
        data(){
            return {
                is_logged_in: this.$store.getters.isLoggedIn
            }
        },
        components: {
            FollowerButton
        }
    }
</script>