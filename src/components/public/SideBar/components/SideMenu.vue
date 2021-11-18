<template>
    <div id="sidemenu">
        <h4  class="desktop-only">{{menus.title}}</h4> 
        <div class="menu-bar-container noSpace">
            <div class="menu-bar-container-list noSpace">
                <ul class="noStyle noSpace menu-holder" v-bind:key="menu.id" v-for="menu in menus.data">
                    <li :key="menu.id">
                        <MenuList v-bind:list="menu" />
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>

        <div class="sb" v-if="menus.title == 'Gist'"><br><br><br> <br><br><br></div>
    </div>
</template>

<script>
    import MenuList from "./MenuList.vue";

    export default {
        name: "SideMenu",
        props: ["menus"],
        components: {
            MenuList
        }
    }
</script>


