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
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 8px;
}

.similarMovies-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
}
/* Адаптивность для мобильных устройств */
/* @media (max-width: 768px) {
    .similarMovies {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 480px) {
    .similarMovies {
        grid-template-columns: repeat(2, 1fr);
    }
} */
</style>