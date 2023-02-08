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
        <div class="poster-main">
            <img :src="`https://image.tmdb.org/t/p/w500/${details.poster_path}`" alt="" class="poster">

            <div class="layover">
                <div v-if="details.title">
                    <div>
                        <span class="title">
                            Titolo Film:
                        </span>
                        {{ details.title }}
                    </div>
                    <div v-if="details.original_title !== details.title">
                        <span class="title">Titolo originale film:</span>
                        {{ details.original_title }}
                    </div>
                </div>

                <div v-else-if="details.name">
                    <div>
                        <span>Titolo serie TV:</span>
                        {{ details.name }}
                    </div>
                    <div v-if="details.original_name !== details.name">
                        <span class="title">Titolo originale serie TV:</span>
                        {{ details.original_name }}
                    </div>
                </div>

                <div class="language">
                    <span class="title">Lingua:</span>
                    <!-- {{ details.original_language }} -->
                    <img :src="assignFlags" alt="" class="flag-image">
                </div>

                <div class="star">
                    <span class="title">Voto:</span>
                    <div v-for="star in getVote" class="star">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-for="star in 5 - getVote">
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div>
                    <span class="title">Overview: </span>
                    {{ details.overview }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/reset.scss' as *;
@use "../styles/partials/mixins.scss" as*;

.movie {
    width: calc(100% / 5 - 10px);
    margin: 5px;
    height: 420px;

    .poster-main {
        position: relative;

        .poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .layover {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            padding: 5px 8px;
            background-color: rgba(0, 0, 0, 0.849);
            border: 1px solid $red-color;
            overflow: auto;

            div,
            span {
                padding: 3px 0;
            }

            .title {
                font-weight: bolder;
                color: $red-color;
            }

            .language {
                @include flex (center);

                .flag-image {
                    width: 40px;
                    margin-left: 10px;
                }
            }

            .stars {
                display: flex;

                span {
                    display: inline-block;
                    margin-right: 10px;
                }
                
                i {
                    color: $red-color;
                }
            }
        }

        &:hover .layover {
            display: block;
        }
    }
}
</style>