<template>
    <div class="row">
        <weather
                v-bind:woeid="woeid"
                v-bind:is_today="true"
        />
    </div>
</template>

<script>
    import Weather from "./Weather.vue"

    export default {
        name: 'City',
        components: {
            Weather
        },
        props: ['woeid']
    }
</script>
