<template>
    <div id="app">
        <navbar/>
        <div class="container mt-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar.vue"

    export default {
        name: 'App',
        components: {
            Navbar
        },
    }
</script>
