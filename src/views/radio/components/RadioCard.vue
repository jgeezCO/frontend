<template>
    <div class="radio_card left exclude">
        <div class="left exclude radio_card_body" style="background-image: url(static/assets/img/rbk.png);">
            <p style="font-size:12px;">
                {{radio_frequency.desc}}
            </p>
            <RadioController :title="radio_frequency.title" :frequency="radio_frequency.frequency"/>
        </div>
    </div>
</template>

<script>
    import RadioController from "./RadioController.vue";

    export default {
        name: "RadioCard",
        props: ["radio_frequency"],
        components: {
            RadioController
        }
    }
</script>


