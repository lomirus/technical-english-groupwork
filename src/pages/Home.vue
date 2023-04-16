<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchIcon from '../assets/Search.vue'
import { links } from '../constants';
import Campus from '../assets/campus.jpg'
</script>

<template>
    <main>
        <div class="left">
            <div class="top">
                <span>Explore websites, people, and locations</span>
                <div>
                    <SearchIcon />
                    <input placeholder="What are you looking for?">
                </div>
            </div>
            <div class="spacer"></div>
            <footer>
                <span class="name">School of Software Engineer of CQUPT</span>
                <span class="address">No. 2, Chongwen Road, Nan'an District, Chongqing</span>
                <nav>
                    <RouterLink v-for="{ name, url } in links" :to="url">{{ name }}</RouterLink>
                </nav>
            </footer>
        </div>
        <div class="right">
        </div>
    </main>
</template>

<style scoped lang="less">
main {
    display: flex;
}
.left {
    width: 36%;
    max-width: 480px;
    min-height: calc(100vh - 85px);
    display: flex;
    flex-direction: column;

    .top {
        padding: 0 35px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-height: auto;
        margin-top: 180px;

        span {
            font-family: MessinaSans;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 13px;
        }

        div {
            height: 84px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 35px 0px;
            display: flex;

            svg {
                color: rgb(157, 15, 13);
                margin: 0 18px 0 24px;
                width: 30px;
                flex-shrink: 0;
            }

            input {
                flex-grow: 1;
                border: none;
                outline: none;
                font-size: 21px;
                width: calc(36vw - 70px - 84px)
            }
        }
    }

    .spacer {
        flex-grow: 1;
    }

    footer {
        font-family: MessinaSans;
        font-size: 14px;
        padding: 0 30px 15px 20px;

        span {
            display: block;
        }

        .name {
            font-weight: bold;
        }

        .address {
            margin-top: 5px;
        }

        nav {
            a {
                color: #000;
                text-decoration-color: rgb(157, 15, 13);
                margin: 4px 10px 0 0;
                display: inline-block;
            }
        }
    }
}

.right {
    background-image: url("../assets/campus.jpg");
    background-size: cover;
    height: calc(100vh - 85px);
    width: max(calc(64% - 85px), calc(100% - 480px - 85px));
    
}
</style>
