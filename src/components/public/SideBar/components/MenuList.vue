<template>
    <div class="ml">
        <router-link :to="{path: list.url}">
            <img :src="'/static/svg/' + list.icon" class="left menu_icon"> 
            <span class="left roboto" style="margin-top:15px;margin-left:10px;font-size:11px;">
                {{list.title}}
            </span>
        </router-link>
        <div class="clear clear-both"></div>
    </div>
</template>

<script>
    export default {
        name: "MenuList",
        props: {
            list: {
                type: Object
            }
        }
    }
</script>

