<script setup lang="ts">
interface Props {
    similarMovies: IMovieShort[] | undefined
}

const props = defineProps<Props>()

const limitedMovie = computed(() => {
    return props.similarMovies?.slice(0, 8);
})
</script>


<template>
    <div class="similarMovies-wrapper">
        <h4 class="similarMovies-title">Related Movies:</h4>
        <div class="similarMovies">
            <MovieCard v-for="mv in limitedMovie" :movie="mv" :key="mv.id" />
        </div>
    </div>
</template>


<style scoped>
.similarMovies-wrapper {
    margin-top: 25px;
}

.similarMovies {
    max-width: 1000px;
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(8, minmax(150px, 1fr));
    gap: 16px;
    overflow-x: auto;

    scrollbar-color: var(--scrollbar-slider) var(--scrollbar-track);
    scrollbar-width: none;
}

.similarMovies:hover {
    scrollbar-width: thin;
} 

.similarMovies::-webkit-scrollbar {
    height: 8px;
    display: none;
}

.similarMovies:hover::-webkit-scrollbar {
    display: block;
}

.similarMovies::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
    border-radius: 4px;
}

.similarMovies::-webkit-scrollbar-thumb {
    background: var(--scrollbar-slider);
    border-radius: 4px;
}

.similarMovies::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-slider-hover);
}

.similarMovies-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
}
</style>