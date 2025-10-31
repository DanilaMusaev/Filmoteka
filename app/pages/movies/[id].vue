<script setup lang="ts">
const route = useRoute();
const movieService = useMovieService();

// Чтобы TS не ругался на undefined делаем movieId computed
const movieId = computed(() => {
  const id = route.params.id;
  return Array.isArray(id) ? id[0] : id;
});

// Чтобы была перезагрузка при изменении id к пути делается динамический ключ для useAsyncData
const { data, pending, error, refresh } = useAsyncData(
    `movie-${route.params.id}`,
    async () => {
        const movie = await movieService.searchMoviesById(movieId.value);

        let similarMovies = null;
        if (movie?.movie.genre) {
            similarMovies = await movieService.searchMoviesByQuery({
                genre: movie.movie.genre.split(',').shift(),
            });
        }

        return {
            movie,
            similarMovies,
        };
    },
    {
        watch: [movieId]
    }
);

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
    justify-items: center;
    padding: 100px 20px 30px;
}
</style>
