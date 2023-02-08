import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    apiUrl: "https://api.themoviedb.org/3/movie/popular/?api_key=f0607d645ee7e294b32467feff3801ca",
    apiSearchMovie: "https://api.themoviedb.org/3/search/movie/?api_key=f0607d645ee7e294b32467feff3801ca",
    searchTitle: ""
})