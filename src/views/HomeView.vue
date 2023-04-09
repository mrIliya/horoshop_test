<script setup>
import DesignsList from '../components/Designs/DesignsList.vue'
import MainHeader from '../components/Header/MainHeader.vue'
</script>

<template>
    <section class="home">
        <MainHeader page="Home"/>
        <DesignsList />
    </section>
</template>

<style lang="scss" scoped>
.home {
    width: calc(100% - 40px);
    padding: 0 32px;
}
</style>
