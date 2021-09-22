<template>
    <div class="left vcard">
        <img class="video_cover" :src="card.img">
        <div class="vcard_act">
            <h6>{{card.time}} <span class="right exclude">{{card.vtime_frame}}</span></h6>
            <div class="vcard_act_profile">
                <img class="left exclude user_profile noSpace" :src="card.user.avatar">
                <div class="left exclude" style="width:70%;margin-left:10px;">
                    <h6 class="noSpace">{{card.title}}</h6>

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
    </div>
</template>

<script>
    export default {
        name: "VideoCard",
        props: ["card"]
    }
</script>
