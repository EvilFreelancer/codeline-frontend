<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">Codeline Task 9771</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto"></ul>
                <form class="form-inline my-2 my-lg-0" @submit.prevent="doSomething()">
                    <input class="form-control mr-sm-2" type="text" ref="my_search" placeholder="Search"
                           aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import {serverBus} from '../main';

    export default {
        name: 'Navbar',
        methods: {
            doSomething() {
                let keywords = this.$refs.my_search.value;
                this.$router.push('/search/' + keywords);
                this.$router.go();
            }
        },
        created() {
            // Using the service bus
            serverBus.$on('searchKeyword', (text) => {
                this.$refs.my_search.value = text;
            });
        }
    }
</script>
