<template>
    <div class="reaction">
         <div style="position:relative;top:30px;border-bottom:1px solid rgba(255, 255, 255, 0.25);">
            <div class="mobile-left">
                <h3 class="poppins noSpace video-title">{{attr.title}}</h3>
                <p class="noSpace poppins video-desc" style="font-size:13px;">{{attr.views}} views   .   {{attr.date}}</p>
            </div>
            <div class="mobile-only mobile-right">
                <img src="/static/svg/expand-down.svg">
            </div>
            
            <span class="mobile-clear"></span>

            <div class="right exclude vreaction" style="margin-right:30px;">
                <a :href="attr.id"> 
                    <img class="thumbs-up" src="/static/svg/thumbs-up.svg" style="width:15px;"> 
                </a> 
                &nbsp;&nbsp;&nbsp;
                <a :href="attr.id"> 
                    <img class="thumbs-down" src="/static/svg/thumbs-down.svg" style="width:15px;"> 
                </a> 
                &nbsp;
                <a href="#" :data-id="attr.id" @click.prevent="menu" style="padding:0px 20px;"> 
                    <img class="menu-icon" src="/static/svg/menu.svg"> 
                </a> 
                <ActionMenu v-if="action_menu_is_active == true"/>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import ActionMenu from "./ActionMenu.vue";

    export default {
        name: "VideoReaction",
        components: {
            ActionMenu
        },
        props: ["attr"],
        data: function(){
            return {
                action_menu_is_active: false
            }
        },
        methods: {
            menu: function(){
                this.action_menu_is_active = !this.action_menu_is_active;
            }
        }
    }
</script>

<style>
    @media only screen and (max-width: 900px){
        .mobile-left{
            float: left;
        }
        .mobile-right{
            float: right;
        }
        .mobile-clear{
            display: block;
            clear:both;
            border-bottom: .5px solid rgba(255, 255, 255, 0.25);
            padding:8px 0px;
            margin: 15px 0px;
        }
        .thumbs-up, .thumbs-down{
            width: 10px;
        }
        .menu-icon{
            width: 3.5px;
            display: inline-block;
            margin-left: -10px;
        }
        .vreaction{
            margin-right:0px !important;
            margin-bottom: 10px;
        }
    }
</style>