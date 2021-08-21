<template>
    <div class="profile-background">
        <img :src="background" class="img">
    </div>
</template>

<script>
    export default {
        name: "ProfileBackground",
        props: ["background"]
    }
</script>

<style scoped>
    .img{
        width: 100%;
        height: 200px;
        margin-top: 20px;
    }
    @media screen and (max-width: 900px) {
        .img{
            width: 100%;
            height: auto !important;
        }
    }
</style>