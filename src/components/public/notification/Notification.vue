<template>
    <div class="notification">
        <div class="right exclude">
            <div class="left exclude" :style="filter_active == false ? 'display:none;' : ''">
                <a href="#" @click="toggleFilter" class="left exclude notification-icons" ref="notify_handler" style="margin-right: 15px;color:white;font-size:12px;">
                    <center ref="notifier_parent">
                        <img src="static/svg/filter.svg" style="margin-top:13px;width:18px;">
                    </center>
                </a>

                <a href="#">
                    <h1 class="left exclude noSpace" style="font-weight:normal;color:white;">
                        | &nbsp;
                    </h1>
                </a>
            </div>

            <transition name="notify" 
                enter-active-class="animate__animated animate__zoomIn" 
                leave-active-class="animate__animated animate__zoomOut" tag="div"
            >
                <Notifier v-if="notifyVisible == true"/>
            </transition>

            <a href="#" @click="toggleNotifier" class="left exclude notification-icons" ref="notify_handler" style="margin-right: 15px;color:white;font-size:12px;">
                <center ref="notifier_parent">
                    <img src="static/svg/notify.svg" style="width:18px;">
                    <p class="noSpace profile_cap">Notification</p>
                </center>
            </a>

            <a href="/profile" class="left exclude notification-icons" style="margin-right: 15px;color:white;font-size:12px;">   
                <center> 
                    <img src="static/svg/avatar.svg" style="width:18px;">
                    <p class="noSpace profile_cap">My Profile</p>
                </center>
            </a>
        </div>  <div class="clear"></div>

        <FilterBody v-if="filterVisible == true"/>
    </div>
</template>

<script>
    import Notifier from "./components/Notifier.vue";
    import FilterBody from "./components/Filter.vue";

    export default {
        name: "Notification",
        props: {
            filter_active: {
                type: Boolean,
                default: false
            }
        },
        data: function(){
           return {
               notifyVisible: false,
               filterVisible: false
           }
        },
        components: {
            Notifier, FilterBody
        },
        methods: {
            toggleNotifier: function(){
                this.notifyVisible = !this.notifyVisible;
            },
            toggleFilter: function(){
                this.filterVisible = !this.filterVisible;
            }
        }
    }
</script>