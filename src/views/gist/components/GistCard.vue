<template>
    <div class="grid_card_container">
        <div class="gist_card" :style="'background-image: url(' + gist.img + ')'">
            <h4 class="poppins noSpace">
                {{format_title.title}} 
            </h4>
            <p 
                v-if="format_title.block != 0" 
                style="padding:0px;margin:0px;" 
                :style="format_title.block"
            ></p>

            <p class="poppins noSpace" style="font-weight:normal;color:#f1f1f1;font-size:12px;">
                {{format_desc.desc}}
            </p>
            <p 
                v-if="format_desc.block != 0" 
                style="padding:0px;margin:0px;" 
                :style="format_desc.block"
            ></p>

            <div class="gist_action poppins">
                <div class="left exclude">
                    <img src="/static/svg/eye.svg" style="width:15px;"> <span style="font-size:12px;" class="poppins">{{gist.view}}</span> &nbsp;&nbsp;
                    <img src="/static/svg/heart.svg" style="width:15px;"> <span style="font-size:12px;" class="poppins">{{gist.fav}}</span>    
                </div>
                <div class="right exclude">
                    <router-link :to="{path: this.format_url}">
                        <a href="#" style="font-size:11px;padding: 5px 9px;color:white;background-color:#DB1A1A;border-radius:5.62px;">Read more</a>
                    </router-link>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "GistCard",
        props: ["gist", "component"],
        computed: {
            format_title: function(){
                let title = this.gist.title;
                let title_block_size = "0";

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
            },
            format_desc: function(){
                let desc = this.gist.desc;
                let desc_block_size = "0";

                if(desc != null && desc.length > 0){
                    if(desc.length > 50){
                        desc = desc.substr(0, 47) + "...";
                    } else {
                        if(this.component == "profile"){
                            desc_block_size = "height: 50px;";
                        } else {
                            desc_block_size = "height: 25px;";
                        }
                    }
                }

                return {
                    desc,
                    block: desc_block_size
                }
            },
            format_url: function(){
                let url = this.gist.url;

                if(this.component == "profile"){
                    url = url.replace("view/", "");
                }

                return url;
            }
        }
    }
</script>
