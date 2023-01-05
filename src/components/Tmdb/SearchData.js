const API_KEY = '75a925ab7a227e572033e0d7fcc3b9d3'
const BASE_URL = "https://api.themoviedb.org/3/search/movie/"

export const searchFetch = async (query) => {
    const res = await fetch(`${BASE_URL}?&language=pt-BR&api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
}
