<template>
    <div class="row">
        <weather
                v-for="city in cities"
                v-bind:woeid="city"
        />
    </div>
</template>

<script>
    import Weather from "./Weather.vue"

    export default {
        name: 'Cities',
        data() {
            return {
                cities: [
                    "2344116",
                    "638242",
                    "565346",
                    "560743",
                    "44418",
                    "9807",
                ]
            };
        },
        components: {
            Weather
        }
    }
</script>
