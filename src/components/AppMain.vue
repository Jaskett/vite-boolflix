<script>
import SearchResults from './SearchResults.vue';

export default {
    name: "AppMain",
    components: {
        SearchResults
    }
}
</script>

<template>
    <div id="site_main" class="pt-5">
        <div class="my_container">
            <div class="my_row d-flex flex-wrap justify-content-evenly">
                <SearchResults />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>