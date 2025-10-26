<script setup lang="ts">
interface Props {
    movies: IMovie[];
}

const props = defineProps<Props>();
</script>

<template>
    <div class="movie">
        <MovieCard v-for="movie in props.movies" :movie="movie" />
    </div>
</template>

<style scoped>
.movie {
    padding-top: 80px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    transition: all 0.3s ease-out;
}
</style>
