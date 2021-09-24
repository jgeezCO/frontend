<template>
    <div class="music-player">
        <h1>Hello world {{getProfile.name}} </h1>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "MusicPlayer",
        computed: mapGetters(["getProfile"])
    }
</script>

<style>

</style>