<template>
    <div class="vc">
        <div class="left vcard">
            <router-link :to="{path: this.format_url}" style="color:white;">
                <div 
                    class="video_background_cover" 
                    :style="client_style">
                </div> 
                <img 
                    ref="image_ref"
                    class="video_cover" 
                    :src="card.img" 
                >
                
                <div class="vcard_act">
                    <h6>{{card.ftime}} <span class="right exclude">{{card.vtime_frame}}</span></h6>
                    <div class="vcard_act_profile">
                        <img class="left exclude user_profile noSpace" :src="card.user.avatar">
                        <div class="left exclude" style="width:70%;margin-left:10px;">
                            <h6 class="noSpace left exclude" style="width: 90%;height:30px;overflow:hidden;">
                                {{this.process_title}}
                            </h6>
                            <div class="right exclude" style="width: 10%;margin-top:-10px;">
                                <CardActions 
                                    type="video" 
                                    :id="card.id" 
                                    :vtitle="card.title" 
                                    v-on:video_edit="$emit('video_edit', card.id, edit_data)" 
                                    v-on:delete_id="$emit('delete_id', card.id)" 
                                    :profile="profile" 
                                />
                            </div>
                            
                            <div class="userp" style="clear:both;">
                                <h6 class="noSpace left exclude" style="color: rgba(255, 255, 255, 0.72);">{{card.user.name}}</h6>
                                <img 
                                    v-if="card.user.verified == true" 
                                    class="left noSpace exclude" 
                                    style="width:13px;position:relative;top:0px;" 
                                    src="static/svg/verified.svg"
                                >  
                            </div>
                            
                            <div class="right exclude" style="margin-top:7px;">
                                <p class="noSpace" style="font-weight:bold;font-size:12px;margin-top:10px;color: rgba(255, 255, 255, 0.72);">
                                    {{card.views}}
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import CardActions from "./CardActions.vue";

    export default {
        name: "VideoCard",
        props: {
            card: Object,
            component: String,
            profile: {
                type: Boolean,
                default: false
            }
        },
        components: {
            CardActions
        },
        data(){
            return {
                client_style: "",
                video_url: "",
                video_title: "",
            }
        },
        computed: {
            edit_data: function(){
                return this.card;
            },
            cover_style: function(){
                let img_width = this.$refs.image_ref.clientWidth;
                let img_height = this.$refs.image_ref.clientHeight;
                
                return {
                    width: img_width + "px",
                    height:  img_height + "px",
                }
            },
            process_title: function(){
                let newTitle = this.card.title;

                if(newTitle.length > 30){
                    newTitle = newTitle.substr(0, 27) + "..";
                }
                
                return newTitle;
            },
            format_url: function(){
                let url = this.card.id + "";

                if(this.component != "profile"){
                    url = "view/" + url;
                }

                return url;
            }
        },
        mounted(){
            this.client_style = this.cover_style;
        },
        
    }
</script>
