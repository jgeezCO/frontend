<template>
    <div class="action_menu">
        <ul class="noStyle">
            <li>
                <a href="#">
                    <span class="picons-thin-icon-thin-0036_share_facebook_social"></span> Share 
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ActionMenu"
    }
</script>

<style scoped>
    .action_menu{
        width: 100px;
        padding: 10px;
        background-color: #666666;
        position: absolute;
        border: 1px solid rgba(250,250,250,0.1);
        box-shadow: 0px 0px 5px rgba(0,0,0,0.4);;
    }
    .action_menu a{
        font-size: 11px;
        color:white;
    }
</style>

