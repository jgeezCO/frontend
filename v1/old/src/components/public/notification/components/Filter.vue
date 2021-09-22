<template>
    <div class="filter-body app-background-image" style="border-bottom:0.5px solid rgba(255,255,255,0.2);background-image: url(static/svg/dots.svg) !important;">
        <h3 class="roboto" style="border-bottom:0.5px solid rgba(255,255,255,0.2);padding-bottom:8px;">
            Filter 
            <img src="static/svg/filter-gold.svg" style="position:relative;top:5px;width: 18px;"> 
        </h3>

        <div class="row">
            <div class="left exclude">
                <h5>UPLOAD DATE</h5>
                <ul class="noStyle">
                    <li>
                        <a href="#">Hours ago</a>
                    </li>
                    <li>
                        <a href="#">This week</a>
                    </li>
                    <li>
                        <a href="#">This month</a>
                    </li>
                    <li>
                        <a href="#">This year</a>
                    </li>
                </ul>
            </div>
            <div class="left exclude">
                <h5>TYPE</h5>
                <ul class="noStyle">
                    <li>
                        <a href="#">Video</a>
                    </li>
                    <li>
                        <a href="#">Channel</a>
                    </li>
                    <li>
                        <a href="#">Playlist</a>
                    </li>
                    <li>
                        <a href="#">Movie</a>
                    </li>
                </ul>
            </div>
            <div class="left">
                <h5>DURATION</h5>
                <ul class="noStyle">
                    <li>
                        <a href="#">Under 4 minutes</a>
                    </li>
                    <li>
                        <a href="#">4-20 minutes</a>
                    </li>
                    <li>
                        <a href="#">Over 20 minutes</a>
                    </li>
                </ul>
            </div>
            <div class="left">
                <h5>FEATURES</h5>
                <ul class="noStyle">
                    <li>
                        <a href="#">Live</a>
                    </li>
                    <li>
                        <a href="#">HD</a>
                    </li>
                    <li>
                        <a href="#">Subtitles</a>
                    </li>
                    <li>
                        <a href="#">Creative commons</a>
                    </li>
                    <li>
                        <a href="#">360 “</a>
                    </li>
                    <li>
                        <a href="#">VR 180</a>
                    </li>
                    <li>
                        <a href="#">3D</a>
                    </li>
                    <li>
                        <a href="#">HDR</a>
                    </li>
                    <li>
                        <a href="#">Location</a>
                    </li>
                    <li>
                        <a href="#">Purchased</a>
                    </li>
                </ul>
            </div>
            <div class="left">
                <h5>SORT BY</h5>
                <ul class="noStyle">
                    <li>
                        <a href="#">Relevance</a>
                    </li>
                    <li>
                        <a href="#">Upload date</a>
                    </li>
                    <li>
                        <a href="#">View count</a>
                    </li>
                    <li>
                        <a href="#">Creative commons</a>
                    </li>
                    <li>
                        <a href="#">Rating</a>
                    </li>
                </ul>
            </div>

            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterBody"
    }
</script>

<style scoped>
    .row .left{
        margin-right: 60px;
        margin-bottom: 30px;
    }
    .row .left li{
        margin-bottom: 15px;
    }
    .row .left li a{
        color: rgba(255, 255, 255, 0.49);
    }
</style>