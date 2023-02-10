import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    api_key: "f0607d645ee7e294b32467feff3801ca",
    api_movie_url: "https://api.themoviedb.org/3/search/movie?",
    api_series_url: "https://api.themoviedb.org/3/search/tv?",
    error: null,
    langList: ["it", "en", "fr", "de", "es"],
    searchText: "",
    validSearch: true,
    results: [],

    callApi: (url) => {
        axios.get(url)
            .then(response => {
                response.data.results.forEach(object => {
                    store.results.push(object);
                })
            })
            .catch(error => {
                console.error(error.message);
                error = error.message;
            })
    }
});