<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {
        searchFunction() {
            store.validSearch = true;
            store.results = [];
            let searchQuery = store.searchText;
            let seriesUrl = `${store.api_series_url}api_key=${store.api_key}&query=${searchQuery}`;
            let movieUrl = `${store.api_movie_url}api_key=${store.api_key}&query=${searchQuery}`;
            store.callApi(seriesUrl);
            store.callApi(movieUrl);
            store.searchText = ""
            setTimeout(() => {
                store.validSearch = false;
            }, 1000);
        }
    }
}
</script>

<template>
    <div id="site_header" class="d-flex justify-content-between aling-items-center">
        <div class="my_navbar">
            <h1>Boolflix</h1>
            <span class="nav_links"><a href="#">Home</a></span>
            <span class="nav_links"><a href="#">Serie TV</a></span>
            <span class="nav_links"><a href="#">Film</a></span>
            <span class="nav_links"><a href="#">Nuovi e popolari</a></span>
            <span class="nav_links"><a href="#">La mia lista</a></span>
            <span class="nav_links"><a href="#">Sfoglia per lingua</a></span>
        </div>

        <div class="search_bar">
            <input placeholder="Search" v-model="store.searchText" @keyup.enter="searchFunction">
            <button class="ms-2 rounded" @click="searchFunction">Search</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/reset.scss" as *;

#site_header {
    padding: 0 20px 0 20px;

    .my_navbar {
        h1 {
            padding-right: 24px;
            color: $red-color;
        }

        span {
            padding-left: 16px;

            a {
                text-decoration: none;
                color: $white-txt;

                &:hover {
                    color: gray;
                }
            }
        }
    }

    .search_bar {
        margin-top: 24px;
    }
}
</style>