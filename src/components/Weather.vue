<template>
    <div class="col-4 mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">
                    {{ all.title }} <small>({{ woeid }})</small>
                </h5>
                <router-link v-if="!is_today" :to="'/weather/' + woeid">Details about city</router-link>
            </div>
            <ul class="list-group list-group-flush">
                <temp v-for="temp in weather" :temp="temp"/>
            </ul>
        </div>
    </div>
</template>

<style>
    .card .card-img-top {
        max-width: 50%;
        margin: 20px;
    }
</style>

<script>
    import Temp from "./Temp.vue"

    export default {
        name: 'Weather',
        data() {
            return {
                all: [],
                today: this.DateFns.format(new Date(), "YYYY-MM-DD"),
                weather: [],
            };
        },
        props: {
            woeid: String,
            is_today: Boolean
        },
        methods: {
            getWeather: function () {
                this.$http.get(`${this.API}/weather.php?command=location&woeid=${this.woeid}`)
                    .then(response => {
                        this.all = response.data;
                        let ret = this.all.consolidated_weather;
                        let self = this;
                        ret.forEach(function (e) {
                            // Check if item in array has current date
                            if (e.applicable_date === self.today && self.is_today !== true) {
                                self.weather.push(e);
                            }
                            // If today is undefined, the for all days
                            if (self.is_today === true) {
                                self.weather.push(e);
                            }
                        });
                    })
            }
        },
        components: {
            Temp
        },
        mounted() {
            this.getWeather()
        },
    }
</script>
