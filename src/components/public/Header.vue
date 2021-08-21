<template>
    <div id="header">
        <SideBar />
    </div>
</template>

<script>
    import SideBar from "./SideBar/SideBar.vue";
    
    export default {
        name: "Header",
        components: {
            SideBar
        }
    }
</script>
