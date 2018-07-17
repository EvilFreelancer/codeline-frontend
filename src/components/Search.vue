<template>
    <div class="row">
        <weather v-for="city in cities"
                 v-bind:woeid="city"/>
        <div class="col-12" v-show="!found">
            <h2>No results were found. Try changing the keyword!</h2>
        </div>
    </div>
</template>

<script>
    import Weather from "./Weather.vue"
    import {serverBus} from '../main';

    export default {
        name: 'Search',
        data() {
            return {
                all: [],
                cities: [],
                found: true
            };
        },
        props: {
            keyword: String,
        },
        methods: {
            getSearch: function () {
                serverBus.$emit('searchKeyword', this.keyword);
                this.$http.get(`${this.API}/weather.php?command=search&keyword=${this.keyword}`)
                    .then(response => {
                        let self = this;
                        if (response.data.length < 1) self.found = false;
                        this.all = response.data;
                        response.data.forEach(function (e) {
                            self.cities.push(e.woeid + '');
                        });
                    })
            }
        },
        components: {
            Weather
        },
        created() {
            this.getSearch()
        },
    }
</script>
