<template>
    <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
        <div class="genre_container">
            <h3 class="poppins">Genre</h3>
            <div class="genre_container" :key="genre.id" v-for="genre in genres">
                <router-link :to="genre.url">
                    <a href="#">
                        <div class="left genre_card" :style="'background-image: url(' + genre.img + ')'">
                            <h3 class="poppins card_title">{{genre.title}}</h3>
                        </div> 
                    </a>
                </router-link>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";

    export default {
        name: 'Genre',
        data: function(){
            return {
                genres: [
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_rb.png",
                        title: "R&B/SOUL",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_jazz.png",
                        title: "JAZZ",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_afrobeat.png",
                        title: "AFROBEAT",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_gospel.png",
                        title: "GOSPEL",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_country.png",
                        title: "COUNTRY",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_reggae.png",
                        title: "REGGAE",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_world.png",
                        title: "WORLD",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_fuji.png",
                        title: "FUJI",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_mood.png",
                        title: "MOOD",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/2.png",
                        title: "REGGAE",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/genre_pop.png",
                        title: "POP",
                        url: "/view-genre",
                    },
                    {
                        id: uuid.v1(),
                        img: "static/assets/img/1.png",
                        title: "JAZZ",
                        url: "/view-genre",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .genre_card{
        width: 18%;
        border-radius: 15px;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 30px;
        margin-right: 10px;
        margin-top: 10px;
    }
    .card_title{
        position: relative;
        top: 50%;
    }
    .genre_container a{
        color: white !important;
        text-decoration: none;
    }

    @media screen and (min-width: 1100px) {
        .genre_card{
            width: 17%;
        }
    }
    @media screen and (max-width: 1090px) {
        .genre_card{
            width: 75%;
            margin-bottom: 20px;
        }
        .card_title{
            font-size: 23px;
            padding: 10px !important;
            margin: 0px !important;
            position:relative;
            top:30px;
            left:-30px;
        }
    }
</style>