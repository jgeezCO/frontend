<template>
    <div class="trend_card bimg left exclude rubik" :style="'background-image: url(' + card.img + ')'">
        <div class="media_control right">
            <div class="category_icon">
                <img :src="card.icon" style="width:15px;">
            </div>
        </div> <div class="clear"></div>

        <div class="trend_count">
            <h4 class="rubik trend_title">
                {{card.name}}
            </h4>

            <div class="left exclude">
                <div class="pcount rubik" :style="'background-color:' + card.color">
                    <img src="static/svg/play.svg" style="width:13px;"> <span class="rubik" style="font-size:12px;">{{card.playcount}}</span>
                </div>
            </div>
            <div class="right exclude">
                <div class="cat_download">
                    <img src="static/svg/download.svg" :style="'width:12px;height:12px;background-color:' + card.color">
                </div>
            </div> <div class="clear"></div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: "MusicCard",
        props: {
            card: {
                type: Object
            }
        }
    }
</script>