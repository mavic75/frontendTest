<template>
    <div id="app">
        <PageNavbar/>
        <router-view />
        <PageFooter/>
    </div>
</template>

<script>
import PageNavbar from './components/PageNavBar.vue'
import PageFooter from './components/PageFooter.vue'
export default {
  name: "App",
  components: {
    PageFooter,
    PageNavbar
  },
};
</script>

<style>

</style>
