<template>
    <div class="vc">
        <div class="left vcard">
            <router-link :to="{path: 'view/' + card.id}">
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
                    <h6>{{card.time}} <span class="right exclude">{{card.vtime_frame}}</span></h6>
                    <div class="vcard_act_profile">
                        <img class="left exclude user_profile noSpace" :src="card.user.avatar">
                        <div class="left exclude" style="width:70%;margin-left:10px;">
                            <h6 class="noSpace left exclude" style="width: 88%;">{{card.title}}</h6>
                            <div class="right exclude" style="width: 10%;margin-top:-10px;">
                                <CardActions 
                                    type="video" 
                                    :id="card.id" 
                                    :vtitle="card.title"
                                    v-on:video_edit="$emit('video_edit', card.id, edit_data)" 
                                    v-on:delete_id="$emit('delete_id', card.id)"
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
        props: ["card"],
        components: {
            CardActions
        },
        data(){
            return {
                client_style: ""
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
                    height: (img_height + 0.2) + "px",
                }
            }
        },
        mounted(){
            this.client_style = this.cover_style;
        }
    }
</script>
