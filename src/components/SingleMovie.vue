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
                    img: "img/italy.png",
                    lang: "it"
                },
                {
                    img: "img/france.png",
                    lang: "fr"
                },
                {
                    img: "img/united_kingdom.png",
                    lang: "en"
                },
                {
                    img: "img/spain.png",
                    lang: "es"
                },
                {
                    img: "img/germany.png",
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
        },

        getVote() {
            return Math.round(this.details.vote_average / 2);
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
        <div class="stars">
            <span>Voto:</span>
            <div v-for="star in getVote">
                <i class="fa-solid fa-star"></i>
            </div>
            <div v-for="star in 5 - getVote">
                <i class="fa-regular fa-star"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie {
    width: calc(100% / 5);
}

.bandiera {
    width: 40px;
}

.stars {
    display: flex;
}
</style>