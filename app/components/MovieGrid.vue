<script setup lang="ts">
interface Props {
    movies: IMovieShort[] | undefined;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="movie">
        <div v-if="movies === undefined || movies.length === 0" class="">
            Nothing was found based on the results of the query.
        </div>
        <div v-else class="movie-grid">
            <MovieCard
                v-for="movie in props.movies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </div>
</template>

<style scoped>
.movie {
    width: 100%;
    padding-top: 80px;

    transition: all 0.3s ease-out;
}

.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: center;
    gap: 15px;

    transition: all 0.3s ease-out;
}
</style>
