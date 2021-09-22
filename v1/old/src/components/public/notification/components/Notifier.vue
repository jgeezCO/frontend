<template>
    <div class="notifier" ref="notifier" :style="'margin-top:40px;left:' + notifier_width + 'px'">
        <div class="header">
            <center class="poppins" style="font-size:14px;">My Notifications</center>
            <div class="right">
                <img src="static/svg/gear.svg" style="position:relative;top:-20px;width:15px;height:15px;">
            </div>
            <div class="clear"></div>
        </div>
        <div class="body">
            <ul class="notify_list noStyle" v-for="list in notification_lists" :key="list.id">
                <li>
                    <div class="left" style="width:70%;">
                        {{list.text}}
                    </div>
                    <div class="right">
                        {{list.time}}
                    </div>
                    <div class="clear"></div>
                </li>
            </ul>
        </div>
        <br><br><br>
    </div>
</template>

<script>
    import uuid from "uuid";

    export default {
        name: "Notifier",
        props: ["parent"],
        data: function(){
            return {
                notifier_width: 0,
                notification_lists: [
                    {
                        id: uuid.v1(),
                        text: "You just gained 20 new subscribers",
                        time: "1 hour ago"
                    },
                    {
                        id: uuid.v1(),
                        text: "Bailys hub and 12 others liked your video",
                        time: "1 hour ago"
                    },
                    {
                        id: uuid.v1(),
                        text: "You have recieved 23 downloads to the song “Joy of the holyghost”",
                        time: "1 hour ago"
                    },
                    {
                        id: uuid.v1(),
                        text: "You just gained 20 new subscribers",
                        time: "1 hour ago"
                    },
                    {
                        id: uuid.v1(),
                        text: "Bailys hub and 12 others liked your video",
                        time: "1 hour ago"
                    },
                    {
                        id: uuid.v1(),
                        text: "You have recieved 23 downloads to the song “Joy of the holyghost”",
                        time: "1 hour ago"
                    }
                ]
            }
        },
        mounted: function(){
            this.alignNotifier();
        },
        methods: {
            alignNotifier: function(){
                let nw = this.$refs.notifier.clientWidth;
                let windowSize = window.innerWidth;
                let diff = Math.abs(windowSize - nw);
                this.notifier_width = diff - 40;
            }
        }
    }
</script>

<style scoped>
    .notifier{
        position: absolute;
        width: 350px;
        min-height: 300px;
        background-color: #1e1e1e;
        z-index: 9999;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .header{
        background: rgba(196, 196, 196, 0.13);
        padding: 16px;
        height: 20px;
    }
    .notify_list li{
        clear:both;
        padding: 15px;
        font-size: 13px;
        border-bottom: 1px solid rgba(255,255,255,0.3);
    }
    .notify_list:last-child li{
        border-bottom: 0px;
    }
</style>