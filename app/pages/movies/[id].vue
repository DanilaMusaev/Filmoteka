<script setup lang="ts">
const route = useRoute();
const movieId = route.params.id;
const movieService = useMovieService();

const {data, pending, error} = useAsyncData('movie', () => movieService.searchMoviesById(movieId));
</script>

<template>
    <section class="singleMovie__section">
        <div v-if="pending">Loading</div>
        <SingleMovie v-else :movie="data?.movie" />
    </section>
</template>

<style scoped>
.singleMovie__section {
    padding: 100px 0px 50px;
}
</style>
