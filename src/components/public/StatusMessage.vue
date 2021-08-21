<template>
    <div :class="'message_display ' + (status == 'success' ? 'success' : 'error') ">
        <div class="message_display_content">
            <span v-html="message"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatusMessage",
        props: ["message", "status", "link"]
    }
</script>

<style scoped>
    .message_display_content{
        width: 90%;
        padding: 15px 0px;
        font-size: 12px;
    }
    .message_display{
        display: flex;
        justify-content: center;
        width: 100%;
        border: .5px solid rgba(252, 249, 250, 0.3);
        box-shadow: 0px 0px 1px #fcf9fa;
        border-radius: 5px;
        margin-bottom: 25px;
    }
    .message_display.success{
        background-color: #8ddf84;
    }
    .message_display.error{
        background-color: #f27330;
    }
</style>