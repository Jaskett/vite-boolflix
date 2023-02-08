<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <div class="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" v-model="store.searchTitle">
            <button type="submit" @click.prevent="$emit('searchMovie')">Search</button>
        </div>      
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/main.scss" as *;
@use "../styles/partials/reset.scss" as *;
@use "../styles/partials/mixins.scss" as *;

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50000;
    background-color: $bg-color;
    height: 70px;
    @include flex (both);
    padding: 0 15px;

    h1 {
        font-size: 40px;
        color: $red-color;
        font-weight: bolder;
    }

    .search {
        @include flex("center");

        .fa-magnifying-glass,
        input,
        button {
            height: 30px;
            padding: 0 10px;
        }

        .fa-magnifying-glass {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: 1px solid $black-color;
            line-height: 30px;
        }

        input {
            display: inline-block;
            width: 300px;
            margin-right: 10px;
        }

        button {
            background-color: $red-color;
            border: 1px solid $red-color;
            color: $white-txt;
            border-radius: 10px;
            font-weight: bolder;

            &:hover {
                background-color: #ed575f;
            }
        }
    }
}
</style>