<template>
    <Card button="Follow" id="1" img="" name="Okafor Princewill" follower="200k" />
</template>

<script>
    import Card from "./Card.vue";
    
    export default{
        name: "ArtistCard",
        props: {
            id: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            follower: {
                type: String,
                required: true
            }
        },
        components: {
            Card
        }
    }
</script>

<style>

</style>
