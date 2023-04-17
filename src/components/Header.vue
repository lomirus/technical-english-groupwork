<script setup lang="ts">
import { links } from '../constants';
import logo from '../assets/logo.png'
import SearchIcon from '../assets/Search.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <RouterLink to="/" class="logo">
            <img :src="logo">
        </RouterLink>
        <nav>
            <RouterLink v-for="{ name, url } in links" :to="url"
                :class="$route.path.split('/')[1] === url.split('/')[1] ? 'active' : 'inactive'">{{ name }}</RouterLink>
        </nav>
        <div class="search">
            <SearchIcon />
        </div>
    </header>
</template>

<style scoped lang="less">
@font-face {
    font-family: MessinaSans;
    src: url("../assets/fonts/MessinaSansWeb-Regular.woff2");
}

header {
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);

    .logo {
        padding: 0 32px;
        height: 100%;
        display: flex;
        align-items: center;

        img {
            height: 50px;
        }
    }

    .logo:hover {

        background-color: rgba(157, 15, 13, 0.1);
    }

    nav {
        display: flex;
        column-gap: 28px;
        height: 100%;

        a {
            font-family: MessinaSans, sans-serif;
            font-size: 16px;
            font-weight: 400;
            text-decoration: none;
            color: #000;
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
        }

        a:hover::after,
        a.active::after {
            content: '';
            display: block;
            position: absolute;
            top: 56px;
            height: 2px;
            width: 100%;
            background-color: rgb(157, 15, 13);
        }
    }

    .search {
        border-left: solid 1px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 84px;
        height: 84px;
        cursor: pointer;

        svg {
            color: rgb(157, 15, 13);
        }
    }

    .search:hover {
        background-color: rgb(157, 15, 13);

        svg {
            color: #fff;
        }
    }
}</style>
