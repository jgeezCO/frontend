<template>
    <div class="home">
        <div class="home_slider">
            <Slider />
        </div>
        
        <br><br><br><br><br>
        <div class="app-background-image" style="background-image:url(static/svg/triangle.svg) !important;">
            <div class="remove_padding_on_mobile container_padding">
                <Category />
                <div class="clear"></div>
            </div>
            
            <div class="clear demarcator"></div>

            <div class="app-body-content">
                <div class="square-container" v-bind:key="trend.id" v-for="trend in trends">
                    <div class="trend_body">
                        <h3 class="poppins left exclude" style="font-weight:bold;color:white;font-weight:normal !important">
                            {{trend.headline}}
                        </h3> 
                        <div class="right exclude">
                            <a href="#" class="montserrat" style="color: rgba(255, 255, 255, 0.5);">
                                <h4 class="noSpace">more <img src="static/svg/extend-right.svg" style="width:30px;position:relative;top:10px;left:-8px;"></h4>
                            </a>
                        </div>
                        <div class="clear"></div>
                        <div class="square-card" v-bind:key="trend_card.id" v-for="trend_card in trend.data">
                            <MusicCard :card="trend_card"/>
                        </div> <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="app-body-content" style="background-image: url(static/svg/dots.svg) !important;">
            <Gist mainGist=false moreGistTitle="Latest Gist" />

            <Follower />
        </div>

        <div class="demarcator"></div>

        <div class="app-body-content">
            <h3 style="color:white" class="poppins">
                Top Radio Stations &nbsp;
                <!-- <img src="static/svg/radio.svg" style="width:30px;position:relative;top:8px;"> -->
            </h3>
            
            <div v-for="radio in radios" :key="radio.id">
                <RadioCard :radio_frequency="radio"/>
            </div>

            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import Category from "../../components/public/Category.vue"
    import MusicCard from "../music/components/MusicCard.vue";
    import Gist from "../gist/Gist.vue";
    import Follower from "../followers/Follower.vue";
    import RadioCard from "../radio/components/RadioCard.vue";
    import Slider from "../../components/public/Slider.vue";

    export default {
        name: 'Home',
        components: {
            Category, MusicCard, Gist, Follower, RadioCard,
            Slider
        },
        data: function(){
            return {
                trends:[
                    {
                        id: uuid.v1(),
                        headline: "Latest Music",
                        icon: "static/svg/music_list.svg",
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
                    },

                    {
                        id: uuid.v1(),
                        headline: "Latest Videos",
                        icon: "static/svg/video_list.svg",
                        data: [
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/v1.png",
                                name: "Vera Lang",
                                playcount: "1.2M",
                                color: "#6600CC"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/v2.png",
                                name: "Brook eddy",
                                playcount: "80.4k",
                                color: "#898081"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/v3.png",
                                name: "Brook eddy",
                                playcount: "89k",
                                color: "#A5730E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/v3.png",
                                name: "Brook eddy",
                                playcount: "1.2M",
                                color: "#6600CC"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/v4.png",
                                name: "Brook eddy",
                                playcount: "1.2M",
                                color: "#D7732E"
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
                                color: "#D7732E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/4.png",
                                name: "Femi Koku",
                                playcount: "1.2M",
                                color: "#D7732E"
                            },
                        ]
                    }
                ],
                radios: [
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "Brilla FM 91.7",
                        frequency: "91.7"
                    }
                ]
            }
        }
    }
</script>