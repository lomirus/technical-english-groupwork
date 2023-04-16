<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { about } from '../constants'
</script>

<template>
    <main>
        <div class="left">
            <RouterLink v-for="{ name, url } in about" :to="url">{{ name }}</RouterLink>
        </div>
        <div class="right">
            <RouterView></RouterView>
        </div>
    </main>
</template>

<style scoped lang="less">
@import url("../styles/page.less");
</style>
