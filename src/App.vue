<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import './styles/app.scss';
import Header from './components/Header.vue';

export default {
    name: 'app',
    components: {
        Header,
    }
}
</script>

<style>

</style>
