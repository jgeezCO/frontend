<template>
    <div class="radio_station">
        <div class="app-body-content">  
            <Notification />
            <div class="radio_con app-background-image" style="background-image: url(static/svg/dots.svg) !important;">
                <h3>RADIO STATIONS</h3>
                <div class="radio_freqency" style="background-image:url(static/svg/frequency.svg);">
                    <div class="radio_freqency_center">
                        <center>
                            <h4 style="color: rgba(255, 255, 255, 0.78);">Now Playing</h4>
                            <h2>{{fms[0].title}}</h2>
                        </center>

                        <br><br>
                        <div class="left exclude">
                            <img style="width: 40px;" src="static/svg/turn-left.svg">
                            <h6>Tune Radio</h6>
                        </div>

                        <div class="right exclude">
                            <img style="width: 40px;" src="static/svg/turn-right.svg">
                            <h6>Tune Radio</h6>
                        </div>

                        <div class="clear"></div>

                        <center>
                            <a href="#">
                                <img style="width: 80px;" src="static/svg/radio-play.svg">
                            </a>
                        </center>
                    </div>
                </div>

                <br><br>
                <h3 style="color:white" class="poppins">
                    Top Radio Stations &nbsp;
                </h3>
                <div v-for="radio in fms" :key="radio.id">
                    <RadioCard :radio_frequency="radio"/>
                </div>

                <div class="clear"></div>

                <br><br>

                <h3 style="color:white" class="clear poppins">
                    Most Listened &nbsp;
                </h3>
                <div v-for="radio in fms" :key="radio.id">
                    <RadioCard :radio_frequency="radio"/>
                </div>

                <div class="clear"></div>

                <br><br><br><br>
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import Notification from "../../components/public/notification/Notification.vue";
    import RadioCard from "./components/RadioCard.vue";

    export default {
        name: "RadioStation",
        components: {
            Notification, RadioCard
        },
        data(){
            return {
                fms: [
                    {
                        id: uuid.v1(),
                        frequency: "99.2 FM",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        title: "UNILAG FM  99.2 FM"
                    },
                    {
                        id: uuid.v1(),
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus ac elementum cras ultrices eleifend. Eu facilisis dui id nulla vulputate.",
                        frequency: "99.2 FM",
                        title: "UNILAG FM  99.2 FM"
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

<style scoped>
    .radio_freqency{
        width: 100%;
        height: 400px;
        background-color: black;
        border-radius: 30px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .radio_freqency_center{
        width: 80%;
        margin: 20px auto;
        position: relative;
        top: 30px;
    }
</style>

