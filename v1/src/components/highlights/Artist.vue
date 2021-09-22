<template>
    <div class="artist_container">
        <center class="highlighter" style="background-image: url(../static/uploads/img/80/artist_focus.png);">
            <p class="highlighter_cap poppins">Artiste Focus</p>
        </center>

        <h4 class="poppins" style="color:white;">
            Most Followed Artistes <span class="gold-color" style="font-size: 20px;">JULY 2021</span>
        </h4>
            
        <div class="listing">
            <ul>
                <ArtistCard id="1" img="" name="Okafor Princewill" follower="200k"/>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import ArtistCard from "./components/ArtistCard.vue";
    
    export default {
        name: "Artist",
        components: {
            ArtistCard
        },
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
        data(){
            return {
                artists: [
                    {
                        id: 1,
                        img: "http://localhost/jgeez:8080/static/uploads/img/80/1.png",
                        name: "Bella Shrudder",
                        follower: "200k"
                    },
                    {
                        id: 2,
                        img: "http://localhost/jgeez:8080/static/uploads/img/80/1.png",
                        name: "Bella Shrudder",
                        follower: "200k"
                    },
                    {
                        id: 3,
                        img: "http://localhost/jgeez:8080/static/uploads/img/80/1.png",
                        name: "Bella Shrudder",
                        follower: "200k"
                    },
                    {
                        id: 4,
                        img: "http://localhost/jgeez:8080/static/uploads/img/80/1.png",
                        name: "Bella Shrudder",
                        follower: "200k"
                    },
                    {
                        id: 5,
                        img: "http://localhost/jgeez:8080/static/uploads/img/80/1.png",
                        name: "Bella Shrudder",
                        follower: "200k"
                    },
                    {
                        id: 6,
                        img: "http://localhost/jgeez:8080/static/uploads/img/80/1.png",
                        name: "Bella Shrudder",
                        follower: "200k"
                    }
                ]
            }
        }
    }
</script>