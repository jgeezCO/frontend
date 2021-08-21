<template>
    <a :href="id" class="artist-follow">{{isFollowing == true ? "Followed" : "Follow"}}</a>
</template>

<script>
    export default {
        name: "FollowerButton",
        props: ["id", "isFollowing"]
    }
</script>