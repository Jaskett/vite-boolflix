<script>
export default {
    name: 'SingleMovie',
    props: {
        details: Object
    },
    data() {
        return {
            listFlags: [
                {
                    img: 'img/italy.svg',
                    lang: "it"
                },
                {
                    img: 'img/france.svg',
                    lang: "fr"
                },
                {
                    img: 'img/united_kingdom.svg',
                    lang: "en"
                },
                {
                    img: 'img/spain.svg',
                    lang: "es"
                },
                {
                    img: 'img/germany.svg',
                    lang: "de"
                }
            ]
        }
    },
    computed: {
        assignFlags() {
            for(let i = 0; i < this.listFlags.length; i++) {
                if(this.listFlags[i].lang.includes(this.details.original_language)) {
                    return this.listFlags[i].img;
                }
            }
            return this.listFlags[this.listFlags.length - 1].img;
        }
    }
}
</script>

<template>
    <!-- Template singola card -->
    <div class="movie">
        <img :src="`https://image.tmdb.org/t/p/w200/${details.poster_path}`" alt="">
        <div v-if="details.title">
            <div>Titolo Film: {{ details.title }}</div>
            <div>Titolo originale film: {{ details.original_title }}</div>
        </div>
        <div v-else-if="details.name">
            <div>Titolo serie tv: {{ details.name }}</div>
            <div>Titolo originale serie tv : {{ details.original_name }}</div>
        </div>
        <div>
            <img :src="assignFlags" alt="" class="bandiera">
        </div>
        <div>Language: {{ details.original_language }}</div>
        <div>{{ details.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    width: calc(100% / 5);
}

.bandiera {
    width: 40px;
}
</style>