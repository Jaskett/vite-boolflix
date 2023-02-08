import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    apiUrl: "https://api.themoviedb.org/3/movie/550?api_key=f0607d645ee7e294b32467feff3801ca"
})