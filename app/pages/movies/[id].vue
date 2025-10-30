<script setup lang="ts">
const route = useRoute();
const movieId = route.params.id;
const movieService = useMovieService();

const { data, pending, error } = useAsyncData('movie', async () => {
    const movie = await movieService.searchMoviesById(movieId);

    let similarMovies = null;
    if (movie?.movie) {
        similarMovies = await movieService.searchMoviesByQuery('sss');
    }

    return {
        movie,
        similarMovies,
    };
});

const movieData = computed(() => data.value?.movie);
const similarMovies = computed(() => data.value?.similarMovies);
</script>

<template>
    <section class="singleMovie__section">
        <div v-if="pending">Loading...</div>
        <SingleMovie v-else :movie="movieData?.movie" />
        <SimilarMoviesGrid :similar-movies="similarMovies?.movies" />
    </section>
</template>

<style scoped>
.singleMovie__section {
    display: grid;
    justify-content: center;
    padding: 100px 50px 50px;
}
</style>
