<template>
    <li class="list-group-item">
        <div class="row">
            <div class="col-4"><small>{{ this.getDayname(temp.applicable_date) }}</small></div>
            <div class="col-2">
                <img :title="temp.weather_state"
                     :src="'https://www.metaweather.com/static/img/weather/' + temp.weather_state_abbr + '.svg'"/>
            </div>
            <div title="AVG" class="col-2">{{ Math.round(temp.the_temp) }}</div>
            <div title="MIN" class="col-2">{{ Math.round(temp.min_temp) }}</div>
            <div title="MAX" class="col-2">{{ Math.round(temp.max_temp) }}</div>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'Temp',
        props: {
            temp: Object,
        },
        methods: {
            getDayname: function (date) {
                return this.DateFns.format(new Date(date), 'dddd');
            }
        },
    }
</script>
