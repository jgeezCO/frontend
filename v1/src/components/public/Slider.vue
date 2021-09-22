<template>
    <div class="jgeez-slider">
        <hooper :itemsToShow="1.80" :centerMode="true">
            <slide>
                <img src="static/uploads/img/500/01.png" class="slider_img">
            </slide>
            <slide>
                <img src="static/uploads/img/500/2.jpg" class="slider_img">
            </slide>
            <slide>
                <img src="static/uploads/img/500/3.jpg" class="slider_img">
            </slide>
            
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
</template>

<script>
    import { 
        Hooper, Slide, 
        Pagination as HooperPagination, 
        Navigation as HooperNavigation 
    } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: 'Slider',
        components: {
           Hooper, Slide, HooperPagination, HooperNavigation
        }
    }
</script>

<style scoped>
    .jgeez-slider{
        margin: 30px auto;
    }

    .hooper-slide.is-current {
        transform: scale(1.2);
    }
    
    .hooper{
        height: 300px;
    }

    .slider_img{
        width: 100% !important;
        height: 100% !important;
    }

    @media screen and (max-width: 900px){
        .hooper{
            height: 150px !important;
            width: auto;
        }
    }
</style>