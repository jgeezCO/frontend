<template>
    <div class="gist_card">
        <div class="bkimg" :style="'background-image: url(' + gist.img + ')'"></div>
        <div class="read_more right">
            <router-link :to="{path: gist.url}">
                <a href="#" style="font-size:12px;padding: 5px 9px;color:white;background-color:#DB1A1A;border-radius:5.62px;">Read more</a>
            </router-link>
        </div>

        <div style="padding:10px;">
            <h5 class="poppins noSpace clear">
                {{format_title.title}}
                <p 
                    v-if="format_title.block != 0" 
                    style="padding:0px;margin:0px;" 
                    :style="format_title.block"
                ></p>
            </h5>
            <div class="gist_action poppins">
                <div class="left" style="margin-top:5px;">
                    <p class="noSpace" style="font-size:11px;">{{gist.owner}}</p>
                </div>
                <div class="right">
                    <span style="margin-right:5px;">
                        <img src="/static/svg/heart.svg" style="width:12px;position:relative;top:3px;margin-right:3px;"><span style="font-size:10px;" class="poppins">{{gist.fav}}</span> 
                    </span>
                    <span style="margin-right:5px;">
                        <img src="/static/svg/comment.svg" style="width:9px;position:relative;top:3px;margin-right:3px;"><span style="font-size:10px;" class="poppins">{{gist.comment}}</span> 
                    </span>
                    <span style="margin-right:5px;">
                        <img src="/static/svg/eye.svg" style="width:13px;position:relative;top:3px;margin-right:3px;"><span style="font-size:10px;" class="poppins">{{gist.view}}</span> 
                    </span>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "SimpleGistCard",
        props: ["gist"],
        computed: {
            format_title: function(){
                let title = this.gist.title;
                let title_block_size = 0;

                if(title != null && title.length > 0){
                    if(title.length > 40){
                        title = title.substr(0, 37) + "...";
                    } else {
                        title_block_size = "height: 18px;";
                    }
                }

                return {
                    title,
                    block: title_block_size
                };
            }
        },
        created(){
            console.log(this.gist);
        }
    }
</script>

<style scoped>
    .bkimg{
        width: 100%;
        height: 160px;
        background-size: cover;
        border-radius: 10px 10px 0px 0px;
    }
    .gist_card{
        padding:0px;
        width: 224px;
        background-color: rgb(67, 67, 67) !important;
    }
    .read_more{
        margin-top: -35px;
        margin-right: 10px;
    }
    @media screen and (max-width: 900px){
        .gist_card{
            width: 95% !important;
        }
    }
</style>