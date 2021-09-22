<template>
    <div class="gist_card" :style="'background-image: url(' + gist.img + ')'">
        <h4 class="poppins noSpace">{{gist.title}}</h4>
        <p class="poppins noSpace" style="font-weight:normal;color:#f1f1f1;font-size:12px;">
            {{gist.desc}}
        </p>
        <div class="gist_action poppins">
            <div class="left exclude">
                <img src="static/svg/eye.svg" style="width:15px;"> <span style="font-size:12px;" class="poppins">{{gist.view}}</span> &nbsp;&nbsp;
                <img src="static/svg/heart.svg" style="width:15px;"> <span style="font-size:12px;" class="poppins">{{gist.fav}}</span>    
            </div>
            <div class="right exclude">
                <router-link :to="{path: gist.url}">
                    <a href="#" style="font-size:11px;padding: 5px 9px;color:white;background-color:#DB1A1A;border-radius:5.62px;">Read more</a>
                </router-link>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "GistCard",
        props: ["gist"]
    }
</script>
