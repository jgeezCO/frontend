<template>
    <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
        <h4>{{trends.title}}</h4>
        <div class="view-genre" v-for="trend in trends.data" :key="trend.id">
            <MusicCard :card="trend"/>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import MusicCard from "./components/MusicCard.vue";

    export default {
        name: "ViewGenre",
        components: {
            MusicCard
        },
        data: function(){
            return {
                trends: {
                    title: "AFROBEATS",
                    data: [
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/1.png",
                            name: "Reekado Banks",
                            playcount: "1.2M",
                            color: "#D7732E"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/2.png",
                            name: "Demi Bealy",
                            playcount: "80.4k",
                            color: "#6600CC"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/3.png",
                            name: "Bryan miles",
                            playcount: "89k",
                            color: "#898081"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/4.png",
                            name: "Femi Koku",
                            playcount: "1.2M",
                            color: "#A5730E"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/5.png",
                            name: "Dwight hussel",
                            playcount: "1.2M",
                            color: "#92221D"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/6.png",
                            name: "Kore Ida",
                            playcount: "1.2M",
                            color: "#D7732E"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/3.png",
                            name: "Bryan miles",
                            playcount: "1.2M",
                            color: "#898081"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/4.png",
                            name: "Femi Koku",
                            playcount: "1.2M",
                            color: "#6600CC"
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>