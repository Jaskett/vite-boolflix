<script>
import { store } from '../store.js';
import SingleMovie from './SingleMovie.vue';

export default {
    name: 'MovieList',
    components: {
        SingleMovie
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <input type="text">
        <button>Search</button>

        <div class="movies">
            <SingleMovie v-for="(movie, index) in store.movieList" :key="index" :details="movie" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.movies {
    display: flex;
    flex-wrap: wrap;
}
</style>